
import '../../App.css';
import React, { useState } from 'react'
import * as forumAPI from '../../utilities/forum-api'


const Post = ({ post, user, flagForDelete }) => {

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

	const deletePost = async () => {
		if(userMatchAuthor) {
			await forumAPI.deletePost(post._id.toString());
			flagForDelete();
		}
	}

	const tag = () => {
		
	}

	return ( 
		<div className='Post' id={`${post._id.toString()}`}
				style={style} onMouseOver={onHover} onMouseLeave={offHover}>

			<p> 
				Author: {post.author} &nbsp; | &nbsp;
				Subject: {post.subject} {/* &nbsp; | &nbsp; */}
				{/* ID: {post.authorID} */}
			</p>

			<p>Body: {post.body}</p>
			<p>Tags: {post.tags}</p>

			
				{
					userMatchAuthor ? 
					<button onClick={deletePost}>Delete</button>
					: 
					<>
						<button onClick={tag}>Tag</button>
					</>
				}
			
			
		</div>
	)
}

export default Post




