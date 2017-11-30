import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login = false;

  constructor(protected sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.sessionState.subscribe(s => this.login = s.login);
  }

  logout(): void {
    this.sessionService.logout();
  }
}
