import Component from './Component';

import { bindAll } from '../utils';


class Router extends Component {
  constructor(props) {
    super(props);

    const { routes } = props;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null,
    };

    this.host = document.getElementById('root');

    console.log(props);

    bindAll(this, 'handleUrlChange', 'navigateTo', 'handleOnEnter');

    window.addEventListener('hashchange', () =>
      this.handleUrlChange(this.path)
    );

    this.handleUrlChange(this.path);

  }

  get path() {
    return window.location.hash.slice(1);
  }

  navigateTo(url) {
    window.location.hash = url;
  }

  handleUrlChange(path) {
    const { routes, currentRoute } = this.state;

    const nextRoute = routes.find(({ href }) => href === this.path);

    if (nextRoute && nextRoute !== currentRoute) {
      console.log(nextRoute);
      if (nextRoute.onEnter) {
        this.handleOnEnter(nextRoute);
        return;
      }

      if (nextRoute.redirectTo) {
        this.navigateTo(nextRoute.redirectTo);
        return;
      }

      this.updateState({
        currentRoute: nextRoute,
        currentComponent: new nextRoute.component(),
      });

    }
  }

  handleOnEnter({ onEnter }) {
    onEnter(this.navigateTo);
  }

  render() {
    const { currentComponent } = this.state;

    return currentComponent.update();
  }
}

export default Router;