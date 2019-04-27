import { getHTML, getTwitterFollowers } from './scraper';

async function go() {
	const twitterHtml = await getHTML('https://twitter.com/jeanrauwers');
	const twitterFollowers = await getTwitterFollowers(twitterHtml);
	console.log(twitterFollowers);
}

go();
