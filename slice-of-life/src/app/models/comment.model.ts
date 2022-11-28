import { Post } from "./post.model";
import { User } from "./user.model";

export class Comment {
    comment_by : string;
    comment_id : number;
    comment_on : number;
    created_id : string;
    free_text : string;
    parent : number;
};