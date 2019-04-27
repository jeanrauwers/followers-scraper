import { getInstagramCount, getTwitterCount } from './lib/scraper';

async function scraperController() {
	const [iCount, tCount] = await Promise.all([
		getInstagramCount(),
		getTwitterCount()
	]);
	console.log(
		`You have ${iCount} instagram followers and  ${tCount} Twitter followers`
	);
}

scraperController();
