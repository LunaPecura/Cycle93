
const Post = require('../../models/Post');


// create new post
const create = async (req, res) => {
	try { 
		res.json(await Post.create(req.body)); 
	}

	catch (err) { res.status(400).json(err); }
};

// get all posts
const getAll = async (req, res) => {
	try { 
		const content = await Post.find({}).sort({_id:-1});
		res.json(content); 
	} 

	catch (err) { res.status(400).json(err); }
};

// delete post
const remove = async (req, res) => {
	try { 
		console.log("inside remove()");
		const id = req.params.id.substr(1);
		console.log(id);
		res.json(await Post.deleteOne({_id: id})); 
	}
	
	catch (err) { res.status(400).json(err); }
};


module.exports = {create, getAll, remove};
