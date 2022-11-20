require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const serviceId = process.env.SERVICE_ID;
const twilio = require("twilio");
const client = new twilio(accountSid, authToken);

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Welcom to Verfication service!"));

app.get("/verify/:to", async (req, res) => {
    const to = req.params.to;

    client.verify
        .services(serviceId)
        .verifications.create({ to, channel: "sms" })
        .then((verification) => {
            console.log(verification);
            res.json(verification);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
});

app.get("/check/:to/:code", async (req, res) => {
    const to = req.params.to;
    const code = req.params.code;
    client.verify
        .services(serviceId)
        .verificationChecks.create({ to, code })
        .then((verification) => {
            res.json(verification);
        })
        .catch((err) => {
            res.json(err);
        });
});

console.log(`Server running at: `);
console.log(`http://localhost:${port}`);
app.listen(port);
