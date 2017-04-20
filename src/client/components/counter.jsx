import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
/**/
import Notifications from 'react-notify-toast';
/**/
import {toggleCheck, incNumber, decNumber} from '../actions';

class Counter extends React.Component {
  render() {
    console.log('rendering Counter component');
    const props = this.props;
    const {checked, value} = props;
    return (
      <div>
        {/**/}
        <Notifications />
        {/**/}
        <h1>Counter</h1>
        <Link to="/home">Home</Link><br/>
        <Link to="/counter">Counter</Link>
        <div>
          <h2>Managing States with Redux</h2>
          <label>
            <input onChange={props.onChangeCheck} type={'checkbox'} checked={checked}/>
            Checkbox
          </label>
          <div>
            <button type={'button'} onClick={props.onDecrease}>-</button>
            &nbsp;{value}&nbsp;
            <button type={'button'} onClick={props.onIncrease}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
