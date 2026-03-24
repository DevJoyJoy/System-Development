import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex items-center justify-center h-full w-full">
                <div className="bg-gray-200 w-[70vw] h-[50vh] rounded-2xl shadow-2xl flex flex-col items-center justify-center">
                    <h1>Cadastro de usuário</h1>
                    <br />
                    <input type="text" className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Email" />
                    <br />
                    <input type="text" className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Senha" />
                    <br />
                    <button className="bg-red-800 hover:bg-red-900 text-white font-bold w-[30vw] h-[4vh] rounded-xl">Entrar</button>
                </div>
            </div>
        </>
    )
}