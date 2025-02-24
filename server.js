const { error } = require("console");
const express = require("express");
const nodemailer = require("nodemailer")
const path = require("path");
const { text } = require("stream/consumers");

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

app.post('/contact', async (req, res) => {

    const {name, email, message} = req.body;

    const contactEmail = {
        from: email,
        to: 'mikelopresti21@gmail.com',
        subject: `Message from ${name}`,
        text: message
    };

    const autoReply = {
        from: 'mikelopresti21@gmail.com',
        to: email,
        subject: 'Thanks for contacting me at LaciePerez.com',
        text: `Hello ${name}!\n Thanks for reaching out to me! I'll follow up with you as soon as I can!\n Thanks,\n Lace`
    }

    try {
        await transporter.sendMail(contactEmail);
        await transporter.sendMail(autoReply);
        res.status(200).send({ message: "Email and auto-reply sent successfully" });
    } catch (error) {
        res.status(500).send({ error: `Error sending email: ${error.message}` });
    }
    
});

app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});