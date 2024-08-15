import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/providers/store/store';

function Navbar(): JSX.Element {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div>
      {user ? <div>Привет, {user.name}</div> : <div>Привет, Гость</div>}

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/race">Race</Link>
        <Link to="/character">Character</Link>
      </nav>
    </div>
  );
}

export default Navbar;
