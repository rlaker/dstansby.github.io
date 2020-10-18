'use strict';


class Table extends React.Component {
  render() {
    return (
      <table border="1px solid black" style={{borderCollapse: 'collapse'}}>
      {this.props.header}
      {this.props.rows}
      </table>
    )
  }
}

class TableRows extends React.Component {
  // A collection of table rows
  //
  // Each element in props.items must render a series of <td> elements, and
  // be a sub-class of TableRow.
  render () {
    // Put the rows inside a table body
    return (
      <tbody>
        {this.props.items}
      </tbody>
    );
  }
}

class TableHeader extends React.Component {
  // A table header
  //
  // this.props.items must be a list of strings
  render () {
    // Map each item to a table header element
    const items = this.props.items.map(
      (item) => <th key={item}>{item}</th>
    );
    return (
      <thead>
       <tr key={'header'}>
        {items}
       </tr>
      </thead>
    )
  };
}

class TalkRow extends React.Component {
  render() {
    return (
      <tr key={this.props.date}>
       <td>{this.props.date}</td>
       <td><a href={"talks/" + this.props.file}>{this.props.title}</a></td>
       <td>{this.props.location}</td>
      </tr>
    );
  }
}

// Create variables for talks
const talksHeader = <TableHeader items={['Date', 'Title', 'Where']} />
const talks = [
  <TalkRow
  date='14/07/2020'
  file='20200731UKSP.pdf'
  title='Sensitivity of solar wind mass flux to coronal temperature'
  location='UK Solar Physics 2020 Discussion Meeting'
  />
];
const talkRows = <TableRows items={talks}/>;
const talkTable = <Table header={talksHeader} rows={talkRows}/>;

const domContainer = document.querySelector('#talks_table');
ReactDOM.render(talkTable, domContainer);
