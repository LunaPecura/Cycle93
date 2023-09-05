import React, { useState, useEffect } from 'react'
import * as forumAPI from '../../utilities/forum-api'
import Post from '../../components/Post/Post'
import PostForm from '../../components/PostForm/PostForm'

const ForumPage = () => {

	const [posts, setPosts] = useState([]);

	useEffect( () => { getAllPosts() }, [] );


	const getAllPosts = async () => {
		setPosts(await forumAPI.allPosts());
	}

	const addPost = async (post) => {
		setPosts([...posts, post]);
		// setPosts(await forumAPI.post(post))
	}

	return (
		<div className='ForumPage'>
			<h1>ForumPage</h1>
			<PostForm addPost={addPost} />
			{ posts.length === 0 ? null : 
				posts.map( (post, i) => {
					return <Post subject={post.subject} body={post.body} key={i}/>
				})
			}
		</div>
	)
}

export default ForumPage
