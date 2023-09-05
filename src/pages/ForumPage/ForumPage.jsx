import React, { useState, useEffect } from 'react'
import * as forumAPI from '../../utilities/forum-api'
import Post from '../../components/Post/Post'
import PostForm from '../../components/PostForm/PostForm'

const ForumPage = ({ user }) => {

	const [posts, setPosts] = useState([]);

	// get all posts from database upon loading
	useEffect( () => { getAllPosts() }, [] );
	const getAllPosts = async () => { 
		setPosts(await forumAPI.allPosts()); 
	}

	// hand-me-down function for the post form
	const addPost = (post) => {
		setPosts([post, ...posts]);
	}



	return (
		<div className='ForumPage'>
			<h1>ForumPage</h1>

			<PostForm addPost={addPost} user={user} />

			{/* List of all posts */}
			{posts.map( (post, i) => <Post post={post} key={i} />)}
	
		</div>
	)
}

export default ForumPage
