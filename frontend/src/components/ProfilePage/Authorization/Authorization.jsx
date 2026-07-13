import useHandleInput from "../../../hooks/useHandleInput.js";
import { useState, useContext, useEffect } from "react";
import {authorization} from '../../../api/authorization.js'
import  AuthContext  from "../../../context/AuthContext.jsx"




const Authorization = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const loginInput = useHandleInput();
    const [password, setPassword] = useState("");

    const user = {
        login: loginInput.value,
        password: password
    }


    const checkAuth  = async (user) => {
        console.log(user);
        const result = await authorization(user);
        if (result) {
            if (result.status === 200){
                setAuth(true)
                console.log(auth);
            }
        }
        return;
    }


    useEffect(() => {
        console.log("Актуальное значение auth:", auth);
    }, [auth]);



    return (
        <div className="w-70 h-55 bg-green flex flex-col justify-start items-center rounded-2xl border-white border shadow-md shadow-black">
            <h1 className="text-white text-2xl pb-6 pt-5 text-shadow-md text-shadow-black" >Авторизация</h1>


            <div className="authorization flex justify-center items-center flex-col gap-4 ">
                <input
                    className="form-control authorization-input border border-white rounded-2xl placeholder:indent-2 placeholder:text-white indent-2"
                    placeholder="Login"
                    type={loginInput.inputType}
                    value={loginInput.value}
                    onChange={loginInput.onChange}
                />
                <input
                    type={"password"}
                    className="form-control border border-white rounded-2xl placeholder:indent-2 placeholder:text-white"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="p-6">
                <button
                    className="text-white border-white border"
                    onClick={() => {checkAuth (user)}}
                >
                    Войти
                </button>
            </div>


        </div>
    )
}

export default Authorization;


// TODO validation