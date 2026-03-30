import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

export const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:8080/api/auth/register', {name, email, password})
            Swal.fire({
                title: "Sucesso!",
                text: "Usuário registrado com sucesso!",
                icon: "sucess"
            })
        } catch {
            Swal.fire({
                title: "Erro!",
                text: "Falha ao registrar usuário!",
                icon: "error"
            })
        }
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className="flex items-center justify-center h-full w-full">
                <div className="bg-gray-200 w-[70vw] h-[50vh] rounded-2xl shadow-2xl flex flex-col items-center justify-center mt-50">
                    <h1>Cadastro de usuário</h1>
                    <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Nome" />
                    <br />
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Email" />
                    <br />
                    <input type="text" onChange={(e) => setPassword(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Senha" />
                    <br />
                    <button onClick={handleRegister} className="bg-red-800 hover:bg-red-900 text-white font-bold w-[30vw] h-[4vh] rounded-xl">Entrar</button>
                </div>
            </div>
        </>
    )
}