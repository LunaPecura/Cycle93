
import React from 'react'


const Post = ({ subject, body, author }) => {
	return (
		<div className='Post' style={{border: '1px solid black', margin: '1px'}}>
			<p>Author: {author} &nbsp;| Subject: {subject}</p>
			<p>{body}</p>
		</div>
	)
}

export default Post
