
import axios from 'axios';

const BASE_URL = '/api/posts';



export function post(newPost) { return sendRequest(BASE_URL, 'POST', newPost); }
export function allPosts() { return sendRequest(BASE_URL, 'GET'); }
export function deletePost(id) { return sendRequest(`${BASE_URL}/:${id}`, 'DELETE'); }
export function editPost(id, newPost) { return sendRequest(`${BASE_URL}/:${id}`, 'PUT', newPost); }





async function sendRequest(url, method = 'GET', payload = null) {
	const res = method === 'GET' ?
					await axios.get(url) : ( method === 'POST' ? 
					await axios.post(url, payload) : ( method === 'DELETE' ? 
					await axios.delete(url) : await axios.put(url, payload) ) );

	if (res.status !== 200) throw new Error('Bad Request');
	
	return res.data;
}

