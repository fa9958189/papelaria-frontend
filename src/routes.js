import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logon from './pages/logon';
import Listausuario from './pages/listarUsuario';
import Listadizimista from './pages/listarDizimista'; // Alterado de Listaproduto para Listadizimista
import CadastroUsuario from './pages/cadastroUsuario';
import Cadastrodizimista from './pages/cadastroDizimista'; // Alterado de Cadastroproduto para Cadastrodizimista
import Editarusuario from './pages/editarUsuario';
import Editardizimista from './pages/editarDizimista'; // Alterado de Editarproduto para Editardizimista

export default function Rotas() {
   return (
       <BrowserRouter>
         <Routes>
             <Route path="/" element={<Logon />} />
             <Route path="/listausuario" element={<Listausuario />} />
             <Route path="/listadizimistas" element={<Listadizimista />} /> {/* Alterado de listaprodutos para listadizimistas */}
             <Route path="/cadastrousuario" element={<CadastroUsuario />} />
             <Route path="/cadastrodizimista" element={<Cadastrodizimista />} /> {/* Alterado de cadastroproduto para cadastrodizimista */}
             <Route path="/editarusuario/:id" element={<Editarusuario />} />
             <Route path="/editardizimista/:id" element={<Editardizimista />} /> {/* Alterado de editarproduto para editardizimista */}
          </Routes>  
       </BrowserRouter>
   );
}
