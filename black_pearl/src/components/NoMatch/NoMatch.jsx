import React from "react";
import "./NoMatch.scss";

function NoMatch() {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <h2>404 - Page Not Found</h2>
      <p>
        We are sorry fellow pirate! We couldn't find the page you are looking
        for
      </p>
    </div>
  );
}

export default NoMatch;
