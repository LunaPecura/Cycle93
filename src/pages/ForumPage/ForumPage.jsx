import React from 'react'
import { useState } from 'react'

import NewPostForm from '../../components/NewPostForm/NewPostForm'

const ForumPage = () => {

	const [posts, setPosts] = useState([]);

	return (
		<div className='ForumPage'>
			<h1>ForumPage</h1>

			<NewPostForm addPost={setPosts} />
		</div>
	)
}

export default ForumPage
