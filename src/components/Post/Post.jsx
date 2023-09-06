
import '../../App.css';
import React, { useState } from 'react'
import * as forumAPI from '../../utilities/forum-api'


const Post = ({ post, user }) => {

	const [borderColor, setBorderColor] = useState('darkgray');
	const userMatchAuthor = user._id.localeCompare(post.authorID) === 0;
	const style = {border: '1px solid darkgray', margin: '5px 0px', padding: '10px',
					borderRadius: '5px', borderColor: borderColor};
	
	
	const onHover = () => {
		if(userMatchAuthor) { 
			setBorderColor('#F67F00');
		}
	}

	const offHover = () => { 
		if(userMatchAuthor) { 
			setBorderColor('darkgray');
		}
	}

	const deletePost = () => {
		if(userMatchAuthor) {
			forumAPI.deletePost(post._id.toString())
		}
	}

	return ( 
		<div className='Post' id={`${post._id.toString()}`}
				style={style} onMouseOver={onHover} onMouseLeave={offHover}>

			<p> 
				Author: {post.author} &nbsp; | &nbsp;
				Subject: {post.subject} &nbsp; | &nbsp;
				ID: {post.authorID}
			</p>

			<p>{post.body}</p>

			
				{
					userMatchAuthor ? 
					<button onClick={deletePost}>Delete</button>
					: 
					<></>
				}
			
			
		</div>
	)
}

export default Post




