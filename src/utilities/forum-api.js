
import axios from 'axios';

const BASE_URL = '/api/posts';



export function post(newPost) { return sendRequest(BASE_URL, 'POST', newPost); }
export function allPosts() { return sendRequest(BASE_URL, 'GET'); }



async function sendRequest(url, method = 'GET', payload = null) {
	const res = method === 'GET' ?
				await axios.get(url) : await axios.post(url, payload);

	if (res.status !== 200) throw new Error('Bad Request');
	
	return res.data;
}

