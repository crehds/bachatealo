import React, { Component } from 'react';
import RegularError from '../components/Regular-error.jsx';

class HandleError extends Component {
  state = {
    handleError: false,
  };

  static getDerivedStateFromError() {
    return { handleError: true };
  }

  componentDidCatch(error, info) {
    console.error('Unhandled error while rendering the page:', error, info);
  }

  render() {
    if (this.state.handleError) {
      return <RegularError />;
    }

    return this.props.children;
  }
}

export default HandleError;
