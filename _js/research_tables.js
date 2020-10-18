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
  date='31/07/2020'
  file='20200731UKSP.pdf'
  title='Sensitivity of solar wind mass flux to coronal temperature'
  location='UK Solar Physics 2020 Discussion Meeting'
  />,
  <TalkRow
  date='14/07/2020'
  file='20200714PSPSourcesWG.pdf'
  title='Sensitivity of solar wind mass flux to coronal temperature'
  location='PSP Sources and Switchbacks Working Group'
  />,
  <TalkRow
  date='13/01/2020'
  file='20200113StAndrews.pdf'
  title='Directly comparing coronal and solar wind composition'
  location='3rd UK Solar Orbiter Meeting'
  />,
  <TalkRow
  date='11/10/2019'
  file='20191011SWA.pdf'
  title='Protons and Alphas at 0.3 AU'
  location='SWA team meeting'
  />,
  <TalkRow
  date='05/07/2019'
  file='20190705NAM.pdf'
  title='Solar wind origins from in-situ measurements'
  location='National Astronomy Meeting 2019'
  />,
  <TalkRow
  date='04/06/2019'
  file='20190604SolO.pdf'
  title='Solar wind origins from in-situ measurements inside 1 AU'
  location='Solar Orbiter London Workshop'
  />,
  <TalkRow
  date='30/10/2018'
  file='181030IRAP.pdf'
  title='Preparing to re-visit the inner heliosphere'
  location='IRAP seminar'
  />,
  <TalkRow
  date='17/09/2018'
  file='180917MSSL.pdf'
  title='Preparing to re-visit the inner heliosphere'
  location='MSSL Plasma seminar'
  />,
  <TalkRow
  date='20/06/2018'
  file='180620SW.pdf'
  title='Using temperature anisotropy as an in-situ diagnostic for solar wind origin'
  location='Solar Wind 15'
  />,
  <TalkRow
  date='10/10/2017'
  file='171010RASOrbiter.pdf'
  title='In situ properties of the slow solar wind at 0.3 AU'
  location='RAS specialist discussion meeting'
  />,
  <TalkRow
  date='24/04/2017'
  file='170424Berkeley.pdf'
  title='What scatters the electron strahl in the solar wind?'
  location='Berkeley Plasma seminar'
  />,
  <TalkRow
  date='29/03/2017'
  file='170329MSSL.pdf'
  title='What scatters the electron strahl in the solar wind?'
  location='MSSL Plasma seminar'
  />,
];
const talkRows = <TableRows items={talks}/>;
const talkTable = <Table header={talksHeader} rows={talkRows}/>;

const domContainer = document.querySelector('#talks_table');
ReactDOM.render(talkTable, domContainer);
