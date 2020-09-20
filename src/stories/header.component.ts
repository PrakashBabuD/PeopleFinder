import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-header',
  template: `<header>
    <div class="wrapper">
      <div>
      <i class="pi pi-briefcase" style="font-size: 2rem"></i>

        <h1>Recruitment CRM </h1>

      </div>
      <div>
      <button pButton type="button" class=" p-button-rounded p-button-outlined" label="Logout">  </button>

        <storybook-button
          *ngIf="user"
          size="small"
          (onClick)="onLogout.emit($event)"
          label="Log out"
        ></storybook-button>
        <storybook-button
          *ngIf="!user"
          size="small"
          (onClick)="onLogin.emit($event)"
          label="Log in"
        ></storybook-button>
        <storybook-button
          *ngIf="!user"
          primary
          size="small"
          (onClick)="onCreateAccount.emit($event)"
          label="Sign up"
        ></storybook-button>
      </div>
    </div>
  </header>`,
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
