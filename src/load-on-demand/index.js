require('../../assets/load-on-demand/index.css');
// dynamic set __webpack_public_path__
// __webpack_public_path__ = '/build/example/';
const React = require('react');
function load() {
  require(['./async'], (Async) => {
    Async.show();
  });
}
React.render(<button onClick={load} className="my-button">load</button>, document.getElementById('__react-content'));
