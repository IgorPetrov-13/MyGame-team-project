import { useNavigate } from "react-router-dom";
import apiAxiosInstance from "../../services/apiAxiosInstance";
import setAccessToken from "../../services/apiAxiosInstance"
import React, { type Dispatch } from 'react';
import { type user, type userArray } from '../type';
import { useAppDispatch, useAppSelector } from "../../app/providers/store/store";
import { userLogOut } from "../../entities/user/model/userSlice";



/* eslint-disable react/prop-types */
function LogoutPage() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.users.user);

    const logoutUser = () => {



        dispatch(userLogOut())
        .then(() => navigate('/'))
      .catch((error) => console.log(error));
        // event.preventDefault();
       
        // apiAxiosInstance.delete('/auth/logout')
        //     .then(({data}) => {
        //         setAccessToken(data.accessToken);
        //         setUser(null);
        //         navigate('/auth/authorization');
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    return (
        <>
            <h1>Выйти?</h1>
            <button onClick={logoutUser}>Yes, exit!</button>
        </> 
    );
}

export default LogoutPage;