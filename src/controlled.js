import React from 'react';
import TreeView from './treeview';

const dataSource = [
  ['Apple', 'Orange'],
  ['Facebook', 'Google'],
  ['Celery', 'Cheeseburger'],
];

class Controlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedBookkeeping: dataSource.map(() => true),
    };
    this.handleClick = this.handleClick.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  handleClick(i) {
    let [...openedBookkeeping] = this.state.openedBookkeeping;
    openedBookkeeping[i] = !openedBookkeeping[i];
    this.setState({openedBookkeeping: openedBookkeeping});
  }

  collapseAll() {
    this.setState({
      openedBookkeeping: this.state.openedBookkeeping.map(() => false),
    });
  }

  render() {
    return (
      <div>
        <i>Controlled</i><br></br>
        <button onClick={this.collapseAll}>Collapse all</button>
        {dataSource.map((cust, i) =>
          <TreeView
            key={i}
            tag={'Type ' + i}
            opened={this.state.openedBookkeeping[i]}
            onClick={this.handleClick.bind(null, i)}>
            <ul>
              <li>{cust[0]}</li>
              <li>{cust[1]}</li>
            </ul>
          </TreeView>
        )}
      </div>
    );
  }
}

export default Controlled;
