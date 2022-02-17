import React from "react";
import { ReactComponent as StormyIcon } from "../components/icons/rainyIcon.svg";
import { ReactComponent as SnowyIcon } from "../components/icons/stormyIcon.svg";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="card" data-testid="loading">
      <div className="storm">
        <StormyIcon />
      </div>
      <div className="snow">
        <SnowyIcon />
      </div>
    </div>
  );
}
