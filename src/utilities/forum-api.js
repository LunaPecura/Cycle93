
const BASE_URL = '/api/posts';

export function post(content) {
	return sendRequest(BASE_URL, 'POST', content)
}

export function allPosts() {
	
}



async function sendRequest(url, method = 'GET', payload = null) {
	
	const options = { method };
	if (payload) {
		options.headers = { 'Content-Type': 'application/json' };
		options.body = JSON.stringify(payload);
	}

	const res = await fetch(url, options);
	if (!res.ok) throw new Error('Bad Request');
	return res.json();
}

