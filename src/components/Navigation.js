import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Cars',
    },
    {
      id: 2,
      path: '/favorites',
      text: 'Favorites',
    },
  ];

  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
