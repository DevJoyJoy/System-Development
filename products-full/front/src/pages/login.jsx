import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', {email, password})

            sessionStorage.setItem('token', response.data.token)
            Swal.fire({
                title: "Sucesso!",
                text: "Usuário logado com sucesso!",
                icon: "sucess"
            })
            navigate('/products')
        } catch {
            Swal.fire({
                title: "Erro!",
                text: "Falha ao registrar usuário!",
                icon: "error"
            })
        }
        setEmail("");
        setPassword("");
    } 

    return(
        <>
        <div className="flex items-center justify-center h-full w-full">
            <div className="bg-gray-200 w-[70vw] h-[50vh] rounded-2xl shadow-2xl flex flex-col items-center justify-center mt-50">
                <h1>Faça Login</h1>
                <br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Email"/>
                <br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Senha"/>
                <br />
                <button onClick={handleLogin} className="bg-red-800 hover:bg-red-900 text-white font-bold w-[30vw] h-[4vh] rounded-xl">Entrar</button>
            </div>
        </div>
        </>
    )
}