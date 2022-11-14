import { Post } from "./post.model";
import { User } from "./user.model";

export class Reaction {
    reactionID : string;
    emojiCode : string;
    reactionTo : Post;
    reactionBy : User;
};