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

	const addPost = (post) => {
		setPosts([...posts, post]);
	}

	return (
		<div className='ForumPage'>
			<h1>ForumPage</h1>
			<PostForm addPost={addPost} user={user} />
			{ posts.length === 0 ? null : 
				posts.map( (post, i) => {
					return <Post subject={post.subject} body={post.body} author={post.author} key={i}/>
				})
			}
		</div>
	)
}

export default ForumPage
