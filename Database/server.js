const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB_PATH = "./db.json";

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
// Helper to write db
const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

// 📌 POST route for contact form
app.post("/send-inquiry", async (req, res) => {
  const { name, salon, service, date, stylist, email, phone, notes } = req.body;

  try {
    // 1️⃣ Save inquiry to db.json via json-server API
    const db = readDB();
    db.inquiries.push({ name, salon, service, date, stylist, email, phone, notes });
    writeDB(db);

    // 2️⃣ Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config
      auth: {
        user: "sohammamdyal@gmail.com", // 🔑 your email
        pass: "bnfw yxyk lpks andg",   // 🔑 use app password, not your real Gmail password
      },
    });

    // 3️⃣ Email content
    const mailOptions = {
        from: email,
        to: "sohammamdyal@gmail.com",
        subject: `New Salon Inquiry from ${name}`,
        text: `
          Name: ${name}
          Salon: ${salon}
          Service: ${service}
          Date/Time: ${date}
          Stylist: ${stylist}
          Email: ${email}
          Phone: ${phone}
          Notes: ${notes || "N/A"}
        `,
      };
    // 4️⃣ Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Inquiry saved and email sent successfully!" });
  } catch (error) {
    console.error("Error sending inquiry:", error);
    res.status(500).json({ message: "Failed to process inquiry" });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
