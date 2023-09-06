
import '../../App.css';
import React, { useState } from 'react'


const Post = ({ post, user }) => {

	const [borderColor, setBorderColor] = useState('darkgray');
	const style = {border: '1px solid darkgray', margin: '5px 0px', padding: '10px',
					borderRadius: '5px', borderColor: borderColor};

	// helper function
	const userMatchAuthor = () => {
		return user._id.localeCompare(post.authorID) === 0 
	}

	
	const onHover = () => {
		if(userMatchAuthor()) { 
			setBorderColor('#F67F00');
		}
	}

	const offHover = () => { 
		if(userMatchAuthor()) { 
			setBorderColor('darkgray');
		}
	}

	return ( 
		<div className='Post editable' id={`${post._id.toString()}`}
				style={style} onMouseOver={onHover} onMouseLeave={offHover}>

			<p> 
				Author: {post.author} &nbsp; | &nbsp;
				Subject: {post.subject} &nbsp; | &nbsp;
				ID: {post.authorID}
			</p>

			<p>{post.body}</p>
		</div>
	)
}

export default Post




