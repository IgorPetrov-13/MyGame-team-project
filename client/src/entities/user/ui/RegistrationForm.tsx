/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../../app/providers/store/store';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();

function RegistrationForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  //! +++++++Дописать логику регистрации +++++++
  // const registrationUser = ({ email, password }: { email: string; password: string }): void => {
  //   dispatch(userLogin({ email, password }))
  //     .then(() => navigate('/'))
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <h3>Войти</h3>

      <form onSubmit={handleSubmit(registrationUser)}>
        <input type="text" placeholder="Имя" {...register('name')} />
        <p>{errors.name?.message}</p>
        <input type="text" placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>
        <input type="password" placeholder="Пароль" {...register('password')} />
        <p>{errors.password?.message}</p>
        <input type="password" placeholder="Повторите пароль" {...register('confirmPassword')} />
        <p>{errors.confirmPassword?.message}</p>
        <button type="submit">Вход</button>
      </form>
    </>
  );
}

export default RegistrationForm;
