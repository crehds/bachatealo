import React from 'react';

function Menu({ menu, isOpen, onToggle, activeHref }) {
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
            {/* undefined, never 'false': the attribute's mere presence is
                what the CSS keys off, so an inactive link must carry no
                aria-current at all. */}
            <a
              href={item.href}
              aria-current={item.href === activeHref ? 'true' : undefined}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
