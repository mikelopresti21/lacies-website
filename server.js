const express = require("express");
const nodemailer = require("nodemailer")
const path = require("path");

const app = express();
const distPath = path.join(__dirname, "dist", "lacies-website", "browser");

app.use(express.static(distPath));

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mikelopresti21@gmail.com',
        pass: 'jlrq upto xuzw ipmp'
    },
});

app.post('/contact', (req, res) => {

    const {name, email, message} = req.body;

    const mailOptions = {
        from: email,
        to: 'mikelopresti21@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(`Error sending email: ${error}`);
        }
        res.status(200).send('Email sent successfully');
    });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});