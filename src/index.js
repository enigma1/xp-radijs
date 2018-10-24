import { r, l, action, mount, Component } from 'radi';

/** @jsx Radi.r **/
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
    return () =>
      <div>
        <h1>Counter: { l(this, 'count') } </h1>
        <button
          class="btn primary"
          disabled={ l(this, 'count').process(() => {
            return this.state.count <= 0;
          })}
          onclick={ () => this.down() }
        >
        -
        </button>
        <button
          class="btn"
          onclick={ () => this.up() }
        >
        +
        </button>
      </div>
    ;
  }
}
mount(<Counter />, 'app');
