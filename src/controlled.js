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
    this.state = {opened: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({opened: !this.state.opened});
  }

  render() {
    return (
      <div>
        <i>Controlled</i>
        <button onClick={this.handleClick}>Collapse all</button>
        {dataSource.map((cust, i) =>
          <TreeView key={i} tag={'Type ' + i} opened={this.state.opened}>
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
