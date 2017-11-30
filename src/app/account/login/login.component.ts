import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../core/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(protected sessionService: SessionService) { }

  ngOnInit() {
  }

  login(): void {
    this.sessionService.login();
  }
}
