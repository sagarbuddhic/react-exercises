import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReloadPage = () => {
    window.location.reload();
  };

  handleGoback = () => {
    window.history.back();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <span>Something went wrong</span>
          <button onClick={this.handleReloadPage}>Reloading</button>
          <button onClick={this.handleGoback}>Go back</button>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
