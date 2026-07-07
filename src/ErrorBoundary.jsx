import React, { Component } from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "40px",
  background: "#0a0a0a",
  color: "#f5f5f5",
  fontFamily: "system-ui, sans-serif",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: "12px",
  color: "#e63e4a",
};

const detailStyle = {
  fontSize: "14px",
  color: "rgba(245, 245, 245, 0.55)",
  maxWidth: "480px",
  lineHeight: 1.6,
  marginBottom: "24px",
};

const buttonStyle = {
  padding: "10px 24px",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.04)",
  color: "#f5f5f5",
  fontSize: "14px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background 0.2s",
};

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    if (typeof console !== "undefined") {
      console.group("[ErrorBoundary] Uncaught error");
      console.error(error);
      console.error(errorInfo?.componentStack);
      console.groupEnd();
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === "function"
          ? this.props.fallback({ error: this.state.error, retry: this.handleRetry })
          : this.props.fallback;
      }

      return (
        <div style={containerStyle}>
          <div style={titleStyle}>Something went wrong</div>
          <div style={detailStyle}>
            A component error occurred. The rest of the page may still work.
            {this.props.showDetails && this.state.error && (
              <span style={{ display: "block", marginTop: 8, fontSize: 12, opacity: 0.5 }}>
                {this.state.error.message}
              </span>
            )}
          </div>
          <button
            style={buttonStyle}
            onClick={this.handleRetry}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}