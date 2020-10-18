'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        { border: '1px solid black', style: { borderCollapse: 'collapse' } },
        this.props.header,
        this.props.rows
      );
    }
  }]);

  return Table;
}(React.Component);

var TableRows = function (_React$Component2) {
  _inherits(TableRows, _React$Component2);

  function TableRows() {
    _classCallCheck(this, TableRows);

    return _possibleConstructorReturn(this, (TableRows.__proto__ || Object.getPrototypeOf(TableRows)).apply(this, arguments));
  }

  _createClass(TableRows, [{
    key: 'render',

    // A collection of table rows
    //
    // Each element in props.items must render a series of <td> elements, and
    // be a sub-class of TableRow.
    value: function render() {
      // Put the rows inside a table body
      return React.createElement(
        'tbody',
        null,
        this.props.items
      );
    }
  }]);

  return TableRows;
}(React.Component);

var TableHeader = function (_React$Component3) {
  _inherits(TableHeader, _React$Component3);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
  }

  _createClass(TableHeader, [{
    key: 'render',

    // A table header
    //
    // this.props.items must be a list of strings
    value: function render() {
      // Map each item to a table header element
      var items = this.props.items.map(function (item) {
        return React.createElement(
          'th',
          { key: item },
          item
        );
      });
      return React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          { key: 'header' },
          items
        )
      );
    }
  }]);

  return TableHeader;
}(React.Component);

var TalkRow = function (_React$Component4) {
  _inherits(TalkRow, _React$Component4);

  function TalkRow() {
    _classCallCheck(this, TalkRow);

    return _possibleConstructorReturn(this, (TalkRow.__proto__ || Object.getPrototypeOf(TalkRow)).apply(this, arguments));
  }

  _createClass(TalkRow, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'tr',
        { key: this.props.date },
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
            { href: "talks/" + this.props.file },
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

  return TalkRow;
}(React.Component);

// Create variables for talks


var talksHeader = React.createElement(TableHeader, { items: ['Date', 'Title', 'Where'] });
var talks = [React.createElement(TalkRow, {
  date: '14/07/2020',
  file: '20200731UKSP.pdf',
  title: 'Sensitivity of solar wind mass flux to coronal temperature',
  location: 'UK Solar Physics 2020 Discussion Meeting'
})];
var talkRows = React.createElement(TableRows, { items: talks });
var talkTable = React.createElement(Table, { header: talksHeader, rows: talkRows });

var domContainer = document.querySelector('#talks_table');
ReactDOM.render(talkTable, domContainer);