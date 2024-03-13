import React, { useState, useEffect } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Head from '../../componente/Head';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Listaentrada() {
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    mostrarEntradas();
  }, []);

  function mostrarEntradas() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch('/api/entradas', requestOptions)
      .then(response => response.json())
      .then(data => {
        setEntradas(data.produtos);
      })
      .catch(error => console.error('Erro ao buscar entradas de produto:', error));
  }

  const removerEntrada = (id) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`/api/entradas/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        alert(data.mensagem);
        mostrarEntradas();
      })
      .catch(error => console.error('Erro ao excluir entrada de produto:', error));
  };

  const apagar = (id) => {
    confirmAlert({
      title: 'Excluir Entrada de Produto',
      message: 'Deseja realmente excluir essa entrada de produto?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => removerEntrada(id)
        },
        {
          label: 'Não',
          onClick: () => alert('Clique em Não')
        }
      ]
    });
  };

  function mostrarnome(idproduto){
    let nome= "";
    const listarproduto = JSON.parse(localStorage.getItem("cd-produtos") || "[]");
    listarproduto
      .filter(value => value.id === idproduto)
      .map(value => {
        nome = value.descricao;
      });
    return nome;
  }

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Entrada de Produto" />
        <Link to="/entradaproduto" className='btn-novo'>Nova Entrada</Link>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome do Produto</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Data de Entrada</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {entradas.map((enpr) => (
              <tr key={enpr.id}>
                <td>{enpr.id}</td>
                <td>{mostrarnome(enpr.id_produto)}</td>
                <td>{enpr.qtde}</td>
                <td>{enpr.valor_unitario}</td>
                <td>{enpr.data_entrada}</td>
                <td className='botoes'>
                  <FiTrash
                    size={18}
                    color='red'
                    onClick={() => apagar(enpr.id)}
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
