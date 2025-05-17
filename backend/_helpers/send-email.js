const nodemailer = require('nodemailer');
const config = require('config.json');

module.exports = sendEmail;

async function sendEmail({ to, subject, html, from = config.emailFrom }) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'marianne.graham1@ethereal.email',
            pass: 'TUKMx6xV7vCPDTdYWG'
        }
    });
    await transporter.sendMail({ from, to, subject, html });
}
