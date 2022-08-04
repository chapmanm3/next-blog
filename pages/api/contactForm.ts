const sgMail = require('@sendgrid/mail')

function sendMail(message: string) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  const msg = {
    to: 'chapmancac@gmail.com',
    from: 'contact@mattchapman.tech',
    subject: 'Youve got a new Contact',
    text: message
  }

  sgMail.send(msg)
    .then(() => console.log('Contact sent successfully'))
    .catch((error) => console.error(error))
}

export default function handler(req, res) {

  const body = req.body;

  console.log("Form Data: ");
  console.log(body);

  sendMail(`Email: ${body.email} Message: ${body.message}`)

  return res.status(200).json({data: "looks good boi"});

}
