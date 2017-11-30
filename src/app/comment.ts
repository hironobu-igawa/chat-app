import {User} from './user';

export class Comment {
  key: string;
  user: User;
  initial: string;
  content: string;
  date: number;

  constructor(key: string, data: any) {
    this.key = key;
    this.user = data.user;
    this.initial = data.user.name.slice(0, 1);
    this.content = data.content;
    this.date = data.date;
  }
}
