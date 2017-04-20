import React, {PropTypes} from 'react';

class Top extends React.Component {
  render() {
    console.log('rendering Top component');
    return (
      <div>{this.props.children}</div>
    );
  }
}

Top.propTypes = {
  children: PropTypes.node
};
