import React, { useState, useEffect } from 'react';

function Index() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const iniciarSesion = () => {
    console.log('el usuario quiere iniciar sesion');
    console.log('el correo es:', correo);
    console.log('la contrasena es:', password);
  };

  useEffect(() => {
    console.log('hubo un cambio', correo, password);
  }, [correo, password]);

  useEffect(() => {
    if (password !== '') {
      if (password.length < 5) {
        setErrorPassword(true);
      } else {
        setErrorPassword(false);
      }
    }
  }, [password]);

  useEffect(() => {
    console.log('estoy cargando por primera vez');
  }, []);

  return (
    <div className='flex flex-col p-10 items-center'>
      <span>Correo</span>
      <input
        onChange={(e) => {
          setCorreo(e.target.value);
        }}
        className='my-2 p-2 border-2 border-indigo-500 rounded-lg'
        type='email'
      />
      <span>Contraseña</span>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className='my-2 p-2 border-2 border-indigo-500 rounded-lg'
        type='password'
      />
      {errorPassword && (
        <span className='text-3xl font-bold text-red-500'>
          La contraseña debe tener al menos 5 caracteres
        </span>
      )}
      <button
        className='my-2 p-2 bg-green-300 rounded-lg shadow-md hover:bg-green-400'
        onClick={iniciarSesion}
      >
        Login
      </button>
    </div>
  );
}

export default Index;
