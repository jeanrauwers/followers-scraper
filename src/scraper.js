import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
	const { data: html } = await axios.get(url);
	return html;
}

export async function getTwitterFollowers(html) {
	const $ = cheerio.load(html);
	const span = $('[data-nav="followers"] .ProfileNav-value');
	return span.data('count');
}
