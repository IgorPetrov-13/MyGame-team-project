import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../../app/providers/store/store';
import { userLogin } from '../model/userSlice';
import './LoginForm.css';  // Импорт стилей

const schema = yup
  .object()
  .shape({
    email: yup.string().email('Неверный формат email').required('Email обязателен'),
    password: yup.string().required('Пароль обязателен'),
  })
  .required();

function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationUser = ({ email, password }: { email: string; password: string }): void => {
    dispatch(userLogin({ email, password }))
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div className="login-form-container">
      <h3>Войти</h3>
      <form onSubmit={handleSubmit(authorizationUser)}>
        <input type="text" placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>
        <input type="password" placeholder="Пароль" {...register('password')} />
        <p>{errors.password?.message}</p>
        <button type="submit">Вход</button>
      </form>
    </div>
  );
}

export default LoginForm;
