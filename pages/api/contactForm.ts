export default function handler(req, res) {

  const body = req.body;

  console.log("Form Data: ");
  console.log(body);

  return res.status(200).json({data: "looks good boi"});

}
