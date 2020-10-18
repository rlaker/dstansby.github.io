'use strict';


class Talk extends React.Component {
  render() {
    return (
      <React.Fragment>
       <td>{this.props.date}</td>
       <td><a href={this.props.file}>{this.props.title}</a></td>
       <td>{this.props.location}</td>
      </React.Fragment>
    );
  }
}

const talks = [
  <Talk
  date='14/07/2020'
  file='20200731UKSP.pdf'
  title='Sensitivity of solar wind mass flux to coronal temperature'
  location='UK Solar Physics 2020 Discussion Meeting'
  />
];

const talkItems = talks.map((talk) => <tr key={talk.props.file}>{talk}</tr>);

const header = (
  <thead>
   <tr>
     <th align='left' padding='8px'>Date</th>
     <th>Title</th>
     <th>Where?</th>
   </tr>
   </thead>
)

class TalkTable extends React.Component {

  render() {
    return (
      <table border="1px solid black" style={{borderCollapse: 'collapse'}}>
      {header}
       <tbody>
       {talkItems}
       </tbody>
      </table>
    )
  }
}

const domContainer = document.querySelector('#talks_table');
ReactDOM.render(React.createElement(TalkTable), domContainer);
