import React from "react";
import "./app-header.css";
const AppHeader = ({ liked, all }) => {
  return (
    <div className="app-header d-flex">
      <h1>purpuraSomnia</h1>
      <h2>
        {all} posts, like {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
