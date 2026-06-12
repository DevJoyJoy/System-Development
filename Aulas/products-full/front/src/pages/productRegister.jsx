import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'

export const ProductRegister = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:8080/api/products/register', {name, description, price, stock, category})
            Swal.fire({
                title: "Sucesso!",
                text: "Produto registrado com sucesso!",
                icon: "sucess"
            })
            navigate('/products')
        } catch {
            Swal.fire({
                title: "Erro!",
                text: "Falha ao registrar produto!",
                icon: "error"
            })
        }
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        setCategory("");
    }

    return (
        <>
            <div className="flex items-center justify-center h-full w-full">
                <div className="bg-gray-200 w-[70vw] h-[50vh] rounded-2xl shadow-2xl flex flex-col items-center justify-center mt-50">
                    <h1>Cadastro de produtos</h1>
                    <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Nome" />
                    <br />
                    <input type="text" onChange={(e) => setDescription(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Descrição" />
                    <br />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Preço" />
                    <br />
                    <input type="text" onChange={(e) => setStock(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Estoque" />
                    <br />
                    <input type="text" onChange={(e) => setCategory(e.target.value)} className="bg-white rounded-xl w-[30vw] h-[4vh] p-2 text-gray-400" placeholder="Categoria" />
                    <br />
                    <button onClick={handleRegister} className="bg-red-800 hover:bg-red-900 text-white font-bold w-[30vw] h-[4vh] rounded-xl">Entrar</button>
                </div>
            </div>
        </>
    )
}