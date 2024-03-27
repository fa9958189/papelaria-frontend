import React, { useEffect, useState } from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Head from '../../componente/Head';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import api from '../../server/api';

export default function ListaDizimista() {
  const [dizimistas, setDizimistas] = useState([]);

  useEffect(() => {
    mostrarDizimistas();
  }, []);

  const mostrarDizimistas = () => {
    api.get('/dizimista')
      .then(response => {
        console.log(response.data);
        setDizimistas(response.data);
      })
      .catch(error => {
        console.error("Erro ao obter lista de dizimistas:", error);
      });
  };

  const excluirDizimista = (id) => {
    confirmAlert({
      title: 'Confirmação',
      message: 'Tem certeza que deseja excluir este dizimista?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            api.delete(`/dizimista/${id}`)
              .then(response => {
                console.log(response.data);
                alert(response.data.mensagem);
                mostrarDizimistas();
              })
              .catch(error => {
                console.error("Erro ao excluir dizimista:", error);
              });
          }
        },
        {
          label: 'Não'
        }
      ]
    });
  };

  return (
    <div className="dashboard-container">
      <div className='menu'>
        <Menu />
      </div>
      <div className='principal'>
        <Head title="Lista de Dizimistas" />
        <div className='form'>
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Descrição</th>
                <th>Estoque Mínimo</th>
                <th>Estoque Máximo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {dizimistas.map(dizimista => (
                <tr key={dizimista.id}>
                  <td>{dizimista.status}</td>
                  <td>{dizimista.descricao}</td>
                  <td>{dizimista.estoque_minimo}</td>
                  <td>{dizimista.estoque_maximo}</td>
                  <td>
                    <Link to={`/editardizimista/${dizimista.id}`}><FiEdit /></Link>
                    <button onClick={() => excluirDizimista(dizimista.id)}><FiTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
