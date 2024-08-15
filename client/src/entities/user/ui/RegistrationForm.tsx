/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../../app/providers/store/store';
import { RegFormType } from '../types/regFormType';
import { userReg } from '../model/userSlice';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    score: yup.number().required(),
  })
  .required();

function RegistrationForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      score: 0,
    },
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const registrationUser = ({
    name,
    email,
    password,
    confirmPassword,
    score,
  }: RegFormType): void => {
    dispatch(userReg({ name, email, password, confirmPassword, score }))
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h3>Войти</h3>

      <form
        onSubmit={handleSubmit(({ name, email, password, confirmPassword, score }) =>
          registrationUser({ name, email, password, confirmPassword, score }),
        )}
      >
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
