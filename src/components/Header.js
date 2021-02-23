import React from 'react';
import '../stylesheets/header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="headerLogo">Animatopy</h1>
      <div className="headerLinks">
        <p className="headerDocumentationLink">Documentation</p>
        <img
          className="headerGithubLink"
          src="https://img.icons8.com/fluent/48/000000/github.png"
          alt="github link"
        />
      </div>
    </div>
  );
}

export default Header;
