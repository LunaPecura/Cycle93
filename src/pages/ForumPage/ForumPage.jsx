import React from 'react'
import { useState } from 'react'
import Post from '../../components/Post/Post'
import PostForm from '../../components/PostForm/PostForm'

const ForumPage = () => {

	const getPosts = () => {
		return [
			{ title: 'blah', body: 'blahblah' }, 
			{ title: 'blah', body: 'blahblah' },
			{ title: 'blah', body: 'blahblah' },
			{ title: 'blah', body: 'blahblah' }
		]
	}

	const [posts, setPosts] = useState(getPosts());

	return (
		<div className='ForumPage'>
			<h1>ForumPage</h1>
			{
				posts.map( (post, i) => {
					return <Post title={post.subject} body={post.body} key={i}/>
				})
			}
			<PostForm addPost={setPosts} />
		</div>
	)
}

export default ForumPage
