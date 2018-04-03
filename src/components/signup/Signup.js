import { Component } from '../../lib';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.host = document.createElement('div');
    this.host.classList.add('signup-form');
  }

  render() {
    return `
      <h2>Tasty Pizza App</h2>
      <section>Signup form</section>
      <form>
        <input type="text" required name="firstname" placeholder="First name"
        <input type="text" required name="lastname" placeholder="Last name"
        <input type="password" required name="password" placeholder="password"
      </form>
      <p>Allready have an account <a href='#/login'>Login</a></p>
    `;
  }
}

export default Signup;