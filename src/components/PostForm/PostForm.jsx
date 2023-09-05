
import { useState } from 'react';
import * as forumAPI from '../../utilities/forum-api';



export default function PostForm({ addPost, user }) {

	const [content, setContent] = useState({ subject: '', body: '' });

	function handleChange(evt) {
		setContent({ ...content, [evt.target.name]: evt.target.value });
	}

	async function handleSubmit(evt) {
		evt.preventDefault(); 
		addPost( await forumAPI.post({...content, author: user.name }) );
	}

	const showForm = () => {
		document.querySelector('#newPostForm').classList.remove('hidden');
	}


	return (
		<div className='PostForm' onClick={showForm} >
			<div className='form-container' onSubmit={handleSubmit}>

				<h3 style={{color: 'gray'}}>New Post</h3>
				<form autoComplete='off' id='newPostForm' className='hidden'>

					<label>Subject</label>
					<input type='text' name='subject' value={content.subject} 
							onChange={handleChange} required />

					<label>Message</label>
					<textarea rows={5} name='body' value={content.body} 
							onChange={handleChange} required />
					
					<button type='submit'>POST</button>

				</form>
			</div>
			
			<p className='error-message'>&nbsp;</p>
		</div>
	);
}
