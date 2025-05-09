const sgMail = require('@sendgrid/mail')
import type { NextApiRequest, NextApiResponse } from 'next'

function sendMail(message: string) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: 'Youve got a new Contact',
    text: message
  }

  return sgMail.send(msg)
}

export default function handler(req: NextApiRequest, res: NextApiResponse<{data: string}>) {

  const body = req.body;

  console.log("Form Data: ");
  console.log(body);

  sendMail(`Email: ${body.email} Message: ${body.message}`)
    .then(() => {
      return res.status(200).json({data: "Email success"});
    })
    .catch((err: string) => {
      console.error(err)
      return res.status(500)
    })
}
