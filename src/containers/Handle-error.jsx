import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegularError from '../components/Regular-error.jsx';

function mapStateToProps(error) {
  return {
    error,
  };
}

class HandleError extends Component {
  state = {
    handleError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      handleError: true,
    });
  }

  render() {
    if (this.state.handleError) {
      console.log(this.props.error);
      return (
        <RegularError src={this.props.error}/>
      );
    }

    return this.props.children;
  }
}

export default connect(mapStateToProps)(HandleError);
