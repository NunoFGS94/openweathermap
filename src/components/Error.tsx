import React from "react";
import { ReactComponent as ErrorIcon } from "../components/icons/errorIcon.svg";
import "./Error.css";

export default function Error() {
  return (
    <div className="card" data-testid="error">
      <ErrorIcon />
      <p className="error-message">Something went wrong!</p>
    </div>
  );
}
