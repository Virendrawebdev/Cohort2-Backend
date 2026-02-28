const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/post.controller');
const multer = require('multer');
const upload =multer({storage:multer.memoryStorage()}) //ye line multer ko memory storage use karne ke liye keh rahi hai, iska matlab ye hai ki file ko server ke memory main store kiya jayega, isse hum file ko easily access kar sakte hain aur uske baad usse kisi cloud storage service main upload kar sakte hain.
const identifyUser =require("../middlewares/auth.middleware")

/**
 * @routes Post /api/posts [protected]
 * @description create a post with the content and image provided -req.body ={caption, image-file }
 */

postRouter.post("/",upload.single("image"),identifyUser, postController.createPostController)


/**
 *@route Get/api/posts/ [protected]
 @description get all the posts created by the user that the request come from .
 */
postRouter.get("/",identifyUser, postController.getPostController)

/**
 * @route GET /api/posts/details/:postid
 * @description return an detail about specific post with the id. also check weather the post belon to the user that the request come from 
 */

postRouter.get("/details/:postId",identifyUser, postController.getPostDetailsController)

/**
 * @routes POST/api/posts/like/:postid
 * @description like a post with the id provided in the request params.
 */
postRouter.post("/like/:postId",identifyUser, postController.likePostController)

module.exports = postRouter