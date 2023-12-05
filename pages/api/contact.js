export default function (req, res) {
  let nodemailer = require('nodemailer');

  // Configuration pour Mailtrap (remplacer avec vos propres crédentials)
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'votre_user_mailtrap', // Remplacer par votre user Mailtrap
      pass: 'votre_mot_de_passe_mailtrap' // Remplacer par votre mot de passe Mailtrap
    }
  });

  const mailData = {
    from: 'demo@uncover-unvoy.com', // L'adresse expéditrice fictive
    to: 'uncover.contact.us@gmail.com', // Adresse du destinataire
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err) {
      console.log(err);
      res.status(500).send("Error sending email");
    } else {
      console.log(info);
      res.status(200).send("Email sent successfully");
    }
  });
}
