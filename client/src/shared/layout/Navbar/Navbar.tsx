import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/providers/store/store';
import './Navbar.css';

function Navbar(): JSX.Element {
  const user = useAppSelector((state) => state.users.user);
  const [showGreeting, setShowGreeting] = useState(false);


  useEffect(() => {
    // Триггер для плавного появления приветствия
    setTimeout(() => setShowGreeting(true), 300);
  }, []);

  return (
    <div className="navbar">
      <div className={`greeting ${showGreeting ? 'show' : ''}`}>
        Привет, {user ? user.name : 'Игрок'}!
      </div>
      <nav>
        <Link to="/">
          <span>Главная</span>
        </Link>
        <Link to="/themes">
          <span>Игра</span>
        </Link>
        {user ? (
          <>            
            <Link to="/logout">Выйти</Link>
            
          </>
        ) : (
          <>
            <Link to="/login">
              <span>Войти</span>
            </Link>
            <Link to="/registration">
              <span>Зарегистрироваться</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
