
import { useState } from 'react';
import * as forumAPI from '../../utilities/forum-api';



export default function PostForm({ addPost, user }) {

	const [content, setContent] = useState({ subject: '', body: '' });
	const form = document.querySelector('#newPostForm');


	function handleChange(evt) {
		setContent({ ...content, [evt.target.name]: evt.target.value });
	}

	async function handleSubmit(evt) {
		evt.preventDefault(); 

		const author = user.name;
		const authorID = user._id.toString();
		
		form.classList.add('hidden');
		addPost( await forumAPI.post({ ...content, author: author, authorID: authorID }) );
		setContent({subject: '', body: ''});
	}

	const showForm = () => {
		form.classList.remove('hidden');
	}


	return (
		<div className='PostForm' onClick={showForm}>
			<div className='form-container' onSubmit={handleSubmit}>

				<h3 style={{color: 'gray'}}>Make Request</h3>
				<form autoComplete='off' id='newPostForm' className='hidden'>

					<label>Subject</label>
					<input type='text' name='subject' value={content.subject} 
							onChange={handleChange} required />

					<label>Message</label>
					<textarea rows={3} name='body' value={content.body} 
							onChange={handleChange} required />
					
					<button type='submit'>SUBMIT</button>

				</form>
			</div>
			
			<p className='error-message'>&nbsp;</p>
		</div>
	);
}
