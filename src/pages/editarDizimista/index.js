import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { MdCancel } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import Head from '../../componente/Head';
import api from '../../server/api';

export default function EditarDizimista() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get(`/dizimistas/${id}`);
                const dizimista = response.data.dizimista;
                setNome(dizimista.nome);
                setValor(dizimista.valor);
                setData(dizimista.data);
            } catch (error) {
                console.error("Erro ao buscar dizimista:", error);
            }
        }
        fetchData();
    }, [id]);

    const salvarDados = async (e) => {
        e.preventDefault();

        if (!nome || !valor || !data) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const dizimista = { nome, valor, data };
            await api.put(`/dizimistas/${id}`, dizimista);
            alert("Dizimista atualizado com sucesso!");
            navigate('/listardizimista');
        } catch (error) {
            console.error("Erro ao editar dizimista:", error);
        }
    }

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Editar Dizimista" />
                <div className='form-container'>
                    <form className='form-cadastro' onSubmit={salvarDados}>
                        <input
                            type='text'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder='Digite o nome do dizimista'
                        />
                        <input
                            type='text'
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                            placeholder='Digite o valor'
                        />
                        <input
                            type='date'
                            value={data}
                            onChange={e => setData(e.target.value)}
                            placeholder='Digite a data'
                        />

                        <div className='acao'>
                            <button className='btn-save'>
                                <FaSave />
                                Salvar
                            </button>
                            <button className='btn-cancel'>
                                <MdCancel />
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
