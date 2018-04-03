import { toHtml, clearChildren, appendChildren, bindAll } from '../utils';

class Component {
  constructor(props) {

    this.state = {};
    this.props = props || {};
    this.host = null;

    bindAll(this, 'onBeforeUpdate', 'update', 'updateState', '_render');
  }

  _render() {
    const children = this.render();


    if (!children && this.host) {
      return this.host;
    }

    if (typeof children === 'string') {
      return appendChildren(clearChildren(this.host), toHtml(children));
    } else {
      return appendChildren(clearChildren(this.host), children);
    }
  }

  onBeforeUpdate(nextProps) { }

  update(nextProps) {
    // this.onBeforeUpdate(nextProps);
    this.props = nextProps;
    return this._render();
  }

  // updateState(nextState) {
  //   this.state = Object.assign({}, this.state, nextState);
  //   this._render();
  // }

  updateState(state) {
    const nextState = Object.assign({}, this.state, state);

    this.state = nextState;
    this._render();

    return nextState;
  }


  render() { }

}

export default Component;
