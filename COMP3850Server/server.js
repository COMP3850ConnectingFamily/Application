const accountSid = "AC8107323fe59fb9eeed38d2391ae03536";
const authToken = "0a135848ec22b6898835bf9a06ca91e5";
const serviceId = "VA488f29c4683bd413065d4da81cbe8bf9";
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
