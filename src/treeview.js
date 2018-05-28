import React from 'react';

class TreeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({opened: !this.state.opened});
  }

  render() {
    const {
      opened = this.state.opened,
      tag = '',
      children,
    } = this.props;

    const arrow = (
      <div className="arrow" onClick={this.handleClick}></div>
    );
    return (
      <div className="treeview">
        {arrow}<span>{tag}</span>
        {opened ? children : null}
      </div>
    );
  }
}

export default TreeView;
