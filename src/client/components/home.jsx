import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    console.log('rendering Home component');
    return (
      <div>
        <h1>React Router Home</h1>
        <Link to="/home">Home</Link><br/>
        <Link to="/counter">Counter</Link>
      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
