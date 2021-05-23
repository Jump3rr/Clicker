// import React, { Component } from "react";
// import PropTypes from "prop-types";

// class ClickCounter extends Component {
//   render() {
//     const { value, onIncrement } = this.props;
//     return (
//       <p>
//         Clicked: {value} times <button onClick={onIncrement}>+</button>{" "}
//       </p>
//     );
//   }
// }

// ClickCounter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired
// };

// export default ClickCounter;

import React, { Component } from "react";
//import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseCount, getCount } from "../../Actions/actionCounter";

class ClickCounter extends Component {
  static mapStateToProps = (state) => {
    return {
      count: state.count
    };
  };
  static mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        increaseCount,
        getCount
      },
      dispatch
    );
  };

  render() {
    const { getCount, increaseCount } = this.props;
    return (
      <div>
        <button onClick={increaseCount}>+</button>
        <span>{this.props.count}</span>
        <span>{getCount}</span>
        {console.log({ increaseCount }, { getCount })}
      </div>
    );
  }
}
export default connect(
  ClickCounter.mapStateToProps,
  ClickCounter.mapDispatchToProps,
  ClickCounter.increaseCount,
  ClickCounter.state
)(ClickCounter);
