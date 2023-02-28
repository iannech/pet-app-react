import { Component } from "react";
import { Link } from "react-router-dom";

// only catches errors from components that are inside of it
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically you would log this to something like TrackJs or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing.
          <Link to="/">Click here to go back to the Home Page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
