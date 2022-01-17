import React, { useState } from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showResponsiveNavbar, setShowResponsiveNavbar] = useState(false);
  return (
    <div>
      <div className='p-2 md:hidden'>
        <button
          onClick={() => {
            setShowResponsiveNavbar(!showResponsiveNavbar);
          }}
        >
          <i className='fas fa-bars' />
        </button>
        {showResponsiveNavbar && (
          <nav className='flex items-center bg-indigo-700'>
            <ul className='flex flex-col p-3'>
              <LinkNavegacion texto='Inicio' ruta='/' />
              <LinkNavegacion texto='Perfil' ruta='/perfil' />
              <LinkNavegacion texto='Contacto' ruta='/contacto' />
            </ul>
          </nav>
        )}
      </div>
      <NavbarBig />
    </div>
  );
};

const NavbarBig = () => {
  return (
    <nav className='hidden md:flex items-center bg-indigo-700'>
      <img className='mx-2 h-16' src={logo} alt='Logo React' />
      <ul className='flex'>
        <LinkNavegacion texto='Inicio' ruta='/' />
        <LinkNavegacion texto='Perfil' ruta='/perfil' />
        <LinkNavegacion texto='Contacto' ruta='/contacto' />
      </ul>
    </nav>
  );
};

const LinkNavegacion = ({ texto, ruta }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) => {
          return isActive ? 'linkNavegacionActivo' : 'linkNavegacionInactivo';
        }}
        to={ruta}
      >
        {texto}
      </NavLink>
    </li>
  );
};

export default Navbar;
