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
  render () {
    const items = this.props.items.map(
      (item) => <tr key={item['key']}>{item}</tr>
    );
    return (
      <tbody>
      {items}
      </tbody>
    );
  }
}


class Talk extends React.Component {
  constructor(props) {
    super(props);
    this.key = props.title;
  }

  render() {
    return (
      <React.Fragment>
       <td>{this.props.date}</td>
       <td><a href={"talks/" + this.props.file}>{this.props.title}</a></td>
       <td>{this.props.location}</td>
      </React.Fragment>
    );
  }
}

// Create variables for talks
const talksHeader = (
  <thead>
   <tr>
     <th align='left' padding='8px'>Date</th>
     <th>Title</th>
     <th>Where?</th>
   </tr>
   </thead>
)
const talks = [
  <Talk
  date='14/07/2020'
  file='20200731UKSP.pdf'
  title='Sensitivity of solar wind mass flux to coronal temperature'
  location='UK Solar Physics 2020 Discussion Meeting'
  />
];
const talkRows = <TableRows items={talks} keyname='title'/>;
const talkTable = <Table header={talksHeader} rows={talkRows}/>;

const domContainer = document.querySelector('#talks_table');
ReactDOM.render(talkTable, domContainer);
