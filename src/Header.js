import React from 'react';


function Header() {
    const titles = ['Home', 'Blog', 'About', 'Contact Us']

    return (
      <nav>
          <ul>{titles.map(element => <li key={element}>{element}</li>)}</ul>
      </nav>
    )
  }


  export default Header;