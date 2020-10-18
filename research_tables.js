'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Talk = function (_React$Component) {
  _inherits(Talk, _React$Component);

  function Talk() {
    _classCallCheck(this, Talk);

    return _possibleConstructorReturn(this, (Talk.__proto__ || Object.getPrototypeOf(Talk)).apply(this, arguments));
  }

  _createClass(Talk, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'td',
          null,
          this.props.date
        ),
        React.createElement(
          'td',
          null,
          React.createElement(
            'a',
            { href: this.props.file },
            this.props.title
          )
        ),
        React.createElement(
          'td',
          null,
          this.props.location
        )
      );
    }
  }]);

  return Talk;
}(React.Component);

var talks = [React.createElement(Talk, {
  date: '14/07/2020',
  file: '20200731UKSP.pdf',
  title: 'Sensitivity of solar wind mass flux to coronal temperature',
  location: 'UK Solar Physics 2020 Discussion Meeting'
})];

var talkItems = talks.map(function (talk) {
  return React.createElement(
    'tr',
    { key: talk.props.file },
    talk
  );
});

var header = React.createElement(
  'thead',
  null,
  React.createElement(
    'tr',
    null,
    React.createElement(
      'th',
      { align: 'left', padding: '8px' },
      'Date'
    ),
    React.createElement(
      'th',
      null,
      'Title'
    ),
    React.createElement(
      'th',
      null,
      'Where?'
    )
  )
);

var TalkTable = function (_React$Component2) {
  _inherits(TalkTable, _React$Component2);

  function TalkTable() {
    _classCallCheck(this, TalkTable);

    return _possibleConstructorReturn(this, (TalkTable.__proto__ || Object.getPrototypeOf(TalkTable)).apply(this, arguments));
  }

  _createClass(TalkTable, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        { border: '1px solid black', style: { borderCollapse: 'collapse' } },
        header,
        React.createElement(
          'tbody',
          null,
          talkItems
        )
      );
    }
  }]);

  return TalkTable;
}(React.Component);

var domContainer = document.querySelector('#talks_table');
ReactDOM.render(React.createElement(TalkTable), domContainer);