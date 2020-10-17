'use strict';


function Talk(props) {
  return (
    <tr>
     <td>{props.date}</td>
     <td><a href={props.file}>{props.title}</a></td>
     <td>{props.location}</td>
    </tr>
    );
}

const talk = <Talk date='14/07/2020'
       file='20200731UKSP.pdf'
       title='Sensitivity of solar wind mass flux to coronal temperature'
       location='UK Solar Physics 2020 Discussion Meeting'/>;

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
       {talk}
       </tbody>
      </table>
    )
  }
}

const domContainer = document.querySelector('#talks_table');
ReactDOM.render(createElement(TalkTable), domContainer);
