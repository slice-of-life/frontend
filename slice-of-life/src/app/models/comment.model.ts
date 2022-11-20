import { Post } from "./post.model";
import { User } from "./user.model";

export class Comment {
    timestamp : string;
    commentID : string;
    parent : Comment;
    text : string;
    commentOn : Post;
    author : User;
};