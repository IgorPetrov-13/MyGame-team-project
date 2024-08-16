/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch } from '../../../app/providers/store/store';
import { RegFormType } from '../types/regFormType';
import { userReg } from '../model/userSlice';
import './RegistrationForm.css'; // Импорт стилей для формы регистрации

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Имя обязательно'),
    email: yup.string().email('Введите корректный email').required('Email обязателен'),
    password: yup.string().required('Пароль обязателен'),
    confirmPassword: yup.string().required('Повторите пароль'),
    score: yup.number().required('Оценка обязательна'),
  })
  .required();

function RegistrationForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegFormType>({
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
    <div className="registration-form-container">
      <h3>Зарегистрироваться</h3>
      <form
        onSubmit={handleSubmit(({ name, email, password, confirmPassword, score }) =>
          registrationUser({ name, email, password, confirmPassword, score }),
        )}
      >
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            placeholder="Имя"
            {...register('name')}
            className={errors.name ? 'input-error' : 'input'}
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register('email')}
            className={errors.email ? 'input-error' : 'input'}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            placeholder="Пароль"
            {...register('password')}
            className={errors.password ? 'input-error' : 'input'}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Повторите пароль:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Повторите пароль"
            {...register('confirmPassword')}
            className={errors.confirmPassword ? 'input-error' : 'input'}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
        </div>

        <div className="form-group">
          
          {errors.score && <p className="error-message">{errors.score.message}</p>}
        </div>

        <button type="submit" className="submit-button">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
