import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Head from '../../componente/Head';
import api from '../../server/api';

export default function ListarDizimista() {
    const [dizimistas, setDizimistas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/dizimistas');
                setDizimistas(response.data.dizimistas);
            } catch (error) {
                console.error("Erro ao buscar dizimistas:", error);
            }
        }
        fetchData();
    }, []);

    const removerDizimista = async (id) => {
        try {
            await api.delete(`/dizimistas/${id}`);
            setDizimistas(dizimistas.filter(dizimista => dizimista.id !== id));
        } catch (error) {
            console.error("Erro ao excluir dizimista:", error);
        }
    };

    return (
        <div className="dashboard-container">
            <div className='menu'>
                <Menu />
            </div>
            <div className='principal'>
                <Head title="Dizimistas" />
                <Link to="/Cadastrodizimista" className='btn-novo'>Entrada Dizimo</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dizimistas.map((dizimista) => (
                            <tr key={dizimista.id}>
                                <td>{dizimista.id}</td>
                                <td>{dizimista.nome}</td>
                                <td>R${dizimista.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                                <td>{dizimista.data}</td>
                                <td className='botoes'>
                                    <Link to={`/editardizimista/${dizimista.id}`}>
                                        <FiEdit size={18} color='yellow' />
                                    </Link>
                                </td>
                                <td className='botoes'>
                                    <FiTrash
                                        size={18}
                                        color='red'
                                        onClick={() => removerDizimista(dizimista.id)}
                                        cursor="pointer"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
