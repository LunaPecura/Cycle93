
import axios from 'axios';

const BASE_URL = '/api/posts';



export function post(content) {
	return sendRequest(BASE_URL, 'POST', content);
}

export function allPosts() {
	return sendRequest(BASE_URL, 'GET');
}



async function sendRequest(url, method = 'GET', payload = null) {
	const options = { method };

	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}

	// const res = await fetch(url, options);
	const res = await axios.get(url);
	if (res.status !== 200) throw new Error('Bad Request');
	console.log("data: ", res.data);
	return res.data;
}

