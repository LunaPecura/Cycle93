const Post = require('../../models/Post');

const create = async (req, res) => {
	try {
		const post = await Post.create(req.body); // Add post to database
		res.json(post);
	} catch (err) {		
		res.status(400).json(err); // Client will check for non-2xx status code
	}
};

const login = async (req, res) => {
	try {
		// Find the user by their email
		const user = await User.findOne({ email: req.body.email });
		const isMatch = await bcrypt.compare(req.body.password, user.password);
		if (!isMatch) throw new Error();
		res.status(200).json(createJWT(user));
	} catch (err) {
		res.status(400).json({ msg: err.message, reason: 'Bad Credentials' });
	}
};



module.exports = {create};
