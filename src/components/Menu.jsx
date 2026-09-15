import React from 'react';

function Menu({ menu, isOpen, onToggle }) {
  return (
    <nav className={isOpen ? 'menu is-active' : 'menu'}>
      <button
        type="button"
        className="icon-menu burguer-button"
        id="burguer-menu"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="menu-list"
        onClick={onToggle}
      />
      <ul id="menu-list">
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
