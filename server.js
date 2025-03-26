const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const response = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
        });
        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong!" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
