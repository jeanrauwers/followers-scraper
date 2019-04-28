import express from 'express';
import cors from 'cors';
import { uniqueCount } from './lib/utils';
import { getInstagramCount, getTwitterCount, taskRunner } from './lib/scraper';
import db from './lib/db';
import './lib/cron';
import aggregate from './lib/aggregate';

const server = express();
server.use(cors());
const port = process.env.PORT || 9000;

server.get(`/scrape`, async (req, res, next) => {
	console.log(`Scraping!!`);
	const [iCount, tCount] = await Promise.all([
		getInstagramCount(),
		getTwitterCount()
	]);
	res.json({ iCount, tCount });
});

server.get(`/data`, async (req, res, next) => {
	const { twitter, instagram } = db.value();
	const unqiueTwitter = uniqueCount(twitter);
	const uniqueInstagram = uniqueCount(instagram);
	res.json({ twitter: unqiueTwitter, instagram: uniqueInstagram });
});

server.get(`/aggregate`, async (req, res, next) => {
	const { twitter, instagram } = db.value();
	const unqiueTwitter = uniqueCount(twitter);
	const uniqueInstagram = uniqueCount(instagram);
	res.json({ twitter: aggregate(twitter), instagram: aggregate(instagram) });
});

server.listen(port, () => {
	console.log(`Server running on port http://localhost:${port}`);
});
