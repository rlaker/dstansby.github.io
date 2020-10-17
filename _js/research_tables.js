'use strict';


function Talk(date, file, title, location) {
  this.date = date;
  this.file = file;
  this.title = title;
  this.location = location;
}

Talk.prototype.render = function() {
  return (
    <React.Fragment>
     <td>{this.date}</td>
     <td><a href={this.file}>{this.title}</a></td>
     <td>{this.location}</td>
    </React.Fragment>
    );
}

const talks = [new Talk('14/07/2020', '20200731UKSP.pdf',
                        'Sensitivity of solar wind mass flux to coronal temperature',
                        'UK Solar Physics 2020 Discussion Meeting')];

const talkItems = talks.map((talk) => <tr key={talk.file}>{talk.render()}</tr>);

const createElement = React.createElement;
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
ReactDOM.render(createElement(TalkTable), domContainer);
