import React from 'react';

function Menu(props) {
  return (
    <nav
      className="menu"
      onClick={props.handleAddClass}
      ref={props.setRef}
    >
      <i className="icon-menu burguer-button" id="burguer-menu">
      </i>
      <ul>
      {props.menu.map((item) =>
        <li key={item.id}>
          <a
          href={item.href}>{item.title}
          </a>
        </li>
      )}
      </ul>
    </nav>
  );
}

export default Menu;
