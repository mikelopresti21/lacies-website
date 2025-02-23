const express = require("express");
const nodemailer = require("nodemailer")
const path = require("path");

const app = express();
const distPath = path.join(__dirname, "dist", "lacies-website", "browser");

app.use(express.static(distPath));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mikelopresti21@gmail.com',
        pass: ''
    },
});

app.post('/send-email', (req, res) => {
    const {name, email, message} = req.body;

    const mailOptions = {
        from: email,
        to: 'mikelopresti21@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully');
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

const PORT = "https://lacies-website.vercel.app";

app.listen(PORT, () => {
    console.log(`server running on : ${PORT}`);
});