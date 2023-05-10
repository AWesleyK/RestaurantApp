import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Replace with your email credentials
    const emailAccount = {
      user: '',
      pass: '',
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailAccount.user,
        pass: emailAccount.pass,
      },
    });

    // Extract form data from the request body
    const { firstName, lastName, attachment } = req.body;

    // Set up email options
    const mailOptions = {
      from: emailAccount.user,
      to: 'awkwardstudioscontact@gmail.com',
      subject: 'Job Application',
      text: `First Name: ${firstName}\nLast Name: ${lastName}`,
      attachments: [
        {
          filename: attachment.name,
          content: Buffer.from(attachment.content, 'base64'),
          contentType: attachment.type,
        },
      ],
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
