import { Injectable } from '@angular/core';
import { PostLike } from './classes/postLike';
import { User } from './classes/user';

@Injectable({
    providedIn: 'root'
})

export class Post {
    public description: string;
    public title: string;
    public id: number;
    public postLikes: Array<PostLike> = new Array<PostLike>();
    public timestamp: any;
    public comments: Array<any> = new Array<any>();
    public friends: Array<User> = new Array<User>();
}
