import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section>
      <h1>Client Side Storage</h1>
      <ul>
        <li>
          <Link to="/cookies">cookies</Link>
        </li>
      </ul>
    </section>
  );
};

export default Main;
