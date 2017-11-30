import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import {Comment} from '../comment';
import {User} from '../user';
import { Observable } from 'rxjs/Observable';

const CURRENT_USER = new User(1, 'Tanaka Jiro');

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  commentsRef: AngularFireList<any>;
  comments: Observable<Comment[]>;

  content = '';
  currentUser = CURRENT_USER;

  editingCommentKey: string;
  editingCommentContent: string;

  constructor(protected db: AngularFireDatabase) {
  }

  /**
   * 初期化時の処理を行う。
   */
  ngOnInit() {
    this.commentsRef = this.db.list('comments');
    this.comments = this.commentsRef.snapshotChanges()
      .map((l) => l.map((c) => new Comment(c.payload.key, c.payload.val())));
  }

  /**
   * コメントを追加する。
   */
  addComment(content: string) {
    if (!content) {
      return;
    }

    this.commentsRef.push({content: content, user: this.currentUser, date: Date.now()});
    this.content = '';
  }

  /**
   * 編集状態を切り替える。
   * @param {Comment} comment
   */
  toggleEditComment(comment: Comment) {
    if (this.editingCommentKey === comment.key) {
      delete this.editingCommentKey;
      delete this.editingCommentContent;
      return;
    }

    this.editingCommentKey = comment.key;
    this.editingCommentContent = comment.content;
  }

  /**
   * 編集中のコメントを保存する。
   */
  saveEditingComment() {
    this.commentsRef
      .update(this.editingCommentKey, {content: this.editingCommentContent})
      .then(() => {
        delete this.editingCommentKey;
        delete this.editingCommentContent;
      });
  }

  /**
   * 編集中のコメントをリセットする。
   */
  resetEditingComment() {
    this.comments.subscribe((comments) => {
      const comment = comments.find((c) => c.key === this.editingCommentKey);
      this.editingCommentContent = comment ? comment.content : '';
    });
  }

  /**
   * コメントを削除する。
   * @param {Comment} comment
   */
  deleteComment(comment: Comment) {
    this.commentsRef.remove(comment.key);
  }
}
