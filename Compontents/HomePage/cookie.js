import React, { Component } from "react";
import { Colors } from "../../styledHelpers/colors";
import styled from "styled-components";
import { increaseCount } from "../../Actions/actionCounter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const CookieContainer = styled.div`
  width: 40%;
  display: inline-flex;
  justify-content: left;
  margin-top: 3vh;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;
const CookieImg = styled.img`
  height: 60vh;
  width: auto;
  transition: 0.15s;
  margin-left: 3%;

  @media (max-width: 768px) {
    margin-left: 0;
    height: 40vh;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.8);
  }
`;

class Cookie extends Component {
  static mapStateToProps = (state) => {
    return {
      clickedCount: state.clickedCount
    };
  };
  static mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        increaseCount
      },
      dispatch
    );
  };

  render() {
    const { increaseCount } = this.props;
    return (
      <CookieContainer>
        <CookieImg
          src="../icons/cookie.png"
          alt="Logo"
          onClick={increaseCount}
        />
      </CookieContainer>
    );
  }
}
export default connect(
  Cookie.mapStateToProps,
  Cookie.mapDispatchToProps
)(Cookie);
