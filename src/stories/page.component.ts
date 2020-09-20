import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-page',
  template: `<article>
    <storybook-header
      [user]="user"
      (onLogout)="onLogout.emit($event)"
      (onLogin)="onLogin.emit($event)"
      (onCreateAccount)="onCreateAccount.emit($event)"
    ></storybook-header>
    <section style="width:100%;max-width:100%;padding:24px 20px;">
      <h3> Comments List</h3>
      <comments-list></comments-list>



    </section>
  </article>`,
  styleUrls: ['./page.css'],
})
export default class PageComponent {
  @Input()
  user: unknown = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}

// export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
//   <article>
//     <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

// );
// Page.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

// Page.defaultProps = {
//   user: null,
// };
