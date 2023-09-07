
import '../../App.css';
import React, { useState } from 'react'
import * as forumAPI from '../../utilities/forum-api'


const Post = ({ post, user, flag }) => {

	const [borderColor, setBorderColor] = useState('#D3C1AE');
	const userMatchAuthor = user._id.localeCompare(post.authorID) === 0;
	const style = { border: '1px solid #D3C1AE', margin: '25px', padding: '10px',
					borderRadius: '5px', borderColor: borderColor };
	
	
	
	const onHover = () => {
		if(userMatchAuthor) { 
			setBorderColor('#F67F00');
		}
	}

	const offHover = () => { 
		if(userMatchAuthor) { 
			setBorderColor('#D3C1AE');
		}
	}

	const deletePost = async () => {
		await forumAPI.deletePost(post._id.toString());
		flag();
	}

	const tag = async () => {
		const newTag = `${user.name} tagged this. `
		const newPost = {...post};
		newPost.tags = [...post.tags, newTag];
		console.log(newPost);
		await forumAPI.editPost(post._id.toString(), newPost);
		flag();
	}

	return ( 
		<div className='Post' id={`${post._id.toString()}`} style={style}
				onMouseOver={onHover} onMouseLeave={offHover}>

			<p> 
				Author: {post.author} &nbsp; | &nbsp;
				Subject: {post.subject} {/* &nbsp; | &nbsp; */}
			</p>

			<p>Body: {post.body}</p>
			<p>Tags: {post.tags}</p>

			
				{
					userMatchAuthor ? 
					<button onClick={deletePost}>Delete</button>
					: 
					<>
						<button className='tagButton' onClick={tag}>Tag</button>
						<button className='tagButton' onClick={ ()=>{} }>Tag1</button>
						<button className='tagButton' onClick={ ()=>{} }>Tag2</button>
						<button className='tagButton' onClick={ ()=>{} }>Tag3</button>
						<button className='tagButton' onClick={ ()=>{} }>Tag4</button>
					</>
				}
			
			
		</div>
	)
}

export default Post




