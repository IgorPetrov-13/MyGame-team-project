import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/providers/store/store';

function Navbar(): JSX.Element {
  const user = useAppSelector((state) => state.users.user);

  //! +++++++Дописать логику выхода +++++++
  const handleLogout = () => {};

  return (
    <div>
      {user ? <div>Привет, {user.name}</div> : <div>Привет, Гость</div>}

      <nav>
        <Link to="/">Главная</Link>
        <Link to="/themes">Игра</Link>
        {user ? (
          <>
            <div>{user.name}</div>
            <button>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/registration">Зарегистрироваться</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
