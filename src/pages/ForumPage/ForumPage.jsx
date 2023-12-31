import React, { useState, useEffect } from 'react'
import * as forumAPI from '../../utilities/forum-api'
import Post from '../../components/Post/Post'
import PostForm from '../../components/PostForm/PostForm'

const ForumPage = ({ user }) => {

	const [posts, setPosts] = useState([]);
	const [trigger, setTrigger] = useState(false);

	// get all posts from database upon loading
	useEffect( () => { getAllPosts() }, [trigger] );
	const getAllPosts = async () => { 
		setPosts(await forumAPI.allPosts()); 
	}

	// hand-me-down function for the post form
	const addPost = (post) => {
		setPosts([post, ...posts]);
	}

	const flag = () => { setTrigger(!trigger); }



	return (
		<div className='ForumPage'>
			<h1>Forum</h1>

			<PostForm addPost={addPost} user={user} />

			{/* List of all posts */}
			{posts.map( (post, i) => <Post post={post} user={user} flag={flag} key={i} />)}
	
		</div>
	)
}

export default ForumPage
