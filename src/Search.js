import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input type="text" placeholder="Enter a city" />
      <input type="submit" value="Search" className="searchButton" />
    </form>
  );
}
