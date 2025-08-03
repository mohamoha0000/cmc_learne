
import { validateMailForm } from "../../utils";
import rateLimit from "express-rate-limit";
import { transporter } from "../../utils/mailer";
import config from "../../../config";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5000, // 5 requests per 15 minutes
    message: 'Too many requests from this IP, please try again later.',
    validate: {xForwardedForHeader: false}
});

export default async function handler(req, res) {
    limiter(req, res, async () => {
        const input = validateMailForm(req.body);

        if(!input) return res.sendStatus(400);
    
        try {
            await transporter.sendMail({
                from: "moham3iof@gmail.com",
                to: config.smtp.recivier.split(",")[0],
                subject: `email from ${input.f_name} ${input.l_name} for kaimouni.com`,
                html: `
                    <h4>Full Name: ${input.f_name} ${input.l_name}</h4>
                    <h4>Email: ${input.email}</h4>
                    <h4>Objective: ${input.objective}</h4>
                    <p>${input.message}</p>
                `
            });

            await transporter.sendMail({
                from: "moham3iof@gmail.com",
                to: input.email,
                subject: `kaimouni.com  - Confirmation of your message`,
                html: `We got  your message! we contact you as soon as possible.`
            });
    
            return res.sendStatus(200);
        } catch(error) {
            console.error(error);
    
            return res.sendStatus(500);
        }
    })
}
