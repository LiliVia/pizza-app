import { Component } from '../../lib';

class Login extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('div');
    this.host.classList.add('login-form');
  }

  render() {
    return `
      <h2>Tasty Pizza App</h2>
      <section>Login form</section>
      <form>
        <input type="text" required name="login" placeholder="username"
        <input type="password" required name="password" placeholder="password"
      </form>
      <p>Haven't account yet? <a href='#/signup'>Signup</a></p>
    `;
  }
}

export default Login;