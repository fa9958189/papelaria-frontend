import React, { useState } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import Head from '../../componente/Head';
import api from '../../server/api';

export default function CadastroDizimista() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    const salvarDados = async (e) => {
        e.preventDefault();

        if (!nome || !valor || !data) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const dizimista = { nome, valor, data };
            await api.post('/dizimistas', dizimista);
            alert("Dizimista cadastrado com sucesso!");
            navigate("/listardizimista");
        } catch (error) {
            console.error("Erro ao cadastrar dizimista:", error);
        }
    }

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Cadastro de Dizimista" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvarDados}>
                        <input 
                            type='text'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder='Digite o nome do Dizimista'
                        /> 
                        <input 
                            type='text' 
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                            placeholder='Digite o Valor' 
                        /> 
                        <input 
                            type='date' 
                            value={data}
                            onChange={e => setData(e.target.value)}
                            placeholder='Digite a Data' 
                        /> 
                        <div className='acao'>
                            <button className='btn-save'>
                                <FaSave />
                                Salvar
                            </button>
                            <button className='btn-cancel'>
                                <ImCancelCircle />
                                Cancelar
                            </button>  
                        </div> 
                    </form>
                </div>
            </div>       
        </div>
    );
}
