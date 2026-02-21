const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload =multer({storage:multer.memoryStorage()}) //ye line multer ko memory storage use karne ke liye keh rahi hai, iska matlab ye hai ki file ko server ke memory main store kiya jayega, isse hum file ko easily access kar sakte hain aur uske baad usse kisi cloud storage service main upload kar sakte hain.


/**
 * Post /api/posts [protected]
 * -req.body ={caption, image-file }
 */

postRouter.post("/",upload.single("image"), postController.createPostController)

module.exports = postRouter