import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./src/routes/routes.js";
import axios from "axios";
import googleTranslate from "google-translate";
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(bodyParser.json())
// app.use('/api/v1', router)
app.post('/api/v1/translate', async (req, res) => {
    try {
        const { text, to = 'lo', from = 'en' } = req.body;

        if (!text || text.trim() === '') {
            return res.status(400).json({
                success: false,
                error: 'Text is required for translation'
            });
        }

        const options = {
            method: 'POST',
            url: 'https://cdn.jsdelivr.net/npm/google-translate@3.0.0/lib/main.min.js',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            data: new URLSearchParams({
                q: text,
                source: from,
                target: to,
                format: 'text'
            })
        };

        const response = await axios.request(options);
        const translatedText = response.data.data.translations[0].translatedText;

        return res.status(200).json({
            success: true,
            original: {
                text: text,
                language: from
            },
            translated: {
                text: translatedText,
                language: to
            }
        });

    } catch (error) {
        console.error('Translation error:', error?.response?.data || error.message);
        return res.status(500).json({
            success: false,
            error: 'Translation failed',
            message: error?.response?.data || error.message
        });
    }
});

 

app.listen(2000, () => console.log("Server is running on port 2000"))