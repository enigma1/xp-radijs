import { r, l, action, mount, Component } from 'radi';

class Counter extends Component {
  state() {
    return {
      count: 0
    }
  }

  @action up() {
    return {
      count: this.state.count + 1
    }
  }

  @action down() {
    return {
      count: this.state.count - 1
    }
  }

  view() {
    return r('div', {},
      r('button', {
        class: 'btn primary',
        disabled: l(this, 'count').process(() => this.state.count <= 0),
        onclick: () => {
          return this.down();
        }},
        '-'
      ),
      r('button', {
        class: 'btn',
        onclick: () => {
          console.log(this.state.count, l(this, 'count').processValue);

          return this.up();
        }
      }, '+'),
      r('h1', {}, l(this, 'count') )
    );
  }
}
mount(new Counter(), 'app');
