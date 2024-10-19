const express = require('express');
const { getAccessToken } = require('./services/authService');
const { isTokenExpired } = require('./utils/timeUtils');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

let token = null;
let tokenTimestamp = null;

app.use(cors());

app.get('/api/get-token', async (req, res) => {
    try {
        if (!token || isTokenExpired(tokenTimestamp)) {
            console.log('Fetching new token...');
            token = await getAccessToken();
            tokenTimestamp = Date.now();
        }
        res.json({ success: true, token, timestamp: tokenTimestamp});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message});
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
