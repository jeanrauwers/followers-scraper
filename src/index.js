import { getInstagramCount, getTwitterCount } from './scraper';

async function scraperController() {
	const [iCount, tCount] = await Promise.all([
		getInstagramCount(),
		getTwitterCount()
	]);
	console.log(iCount, tCount);
}

scraperController();
