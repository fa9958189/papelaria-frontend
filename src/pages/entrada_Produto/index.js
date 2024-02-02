import React,{useState} from 'react';
import '../../pages/global.css';
import Menu from '../../componente/Menu';
import { FiEdit,FiTranh,FiDelete,FiFilePlus, FiTrash }from "react-icons/fi";
import { FaAngry } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom'; 
import Head from '../../componente/Head';

export default function Entrada() {
    const navigate = useNavigate ();
    const [id,setid]  = useState("");
    const [id_produto,setid_produto]  = useState("");
    const [quantidade,setquantidade]  = useState("");
    const [valor_unitario,setvalor_unitario]  = useState("");
    const [data_entrada,set_entrada]  = useState("");
    
    const usuario={
        id: Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
    
        id_produto,
        quantidade,
        valor_unitario
    }
  
    function salvardados(e){
      e.preventDefault();
     // console.log(usuario);
     if(id_produto==="")
     alert("preencha id produto")  
    else if(quantidade==="")
    alert("preencha quantidade")
    else if(valor_unitario==="")
    alert("preencha valor unitario")
    else if(data_entrada==="")
    alert("preencha data entrada")
    else{
   
        const banco =JSON.parse(localStorage.getItem("cd-entradas") || "[]");
        banco.push(usuario);
        localStorage.setItem("cd-entradas",JSON.stringify(banco));
       alert("Usuário salvo com sucesso");
       navigate("/listaentrada");
    }

    }

    return (

    <div className="dashboard-container">
       

        <div className='menu'>

            <Menu />
        </div>
        <div className='principal'>
        <Head title="Cadastro de Entrada Produto" />
        
       
    <div className='form-container'>
    <form className='form-cadastro' onSubmit={salvardados}>
            <input type='text'
            value={id_produto}
            onChange={e=>setid(e.target.value)}
             placeholder='Digite o Id produto'
              /> 
            <input 
            type='text' 
            value={quantidade}
            onChange={e=>setquantidade(e.target.value)}
            placeholder='Digite quantidade' 
            /> 
            <input 
            type='text' 
            value={valor_unitario}
            onChange={e=>setvalor_unitario(e.target.value)}
            placeholder='Digite valor unitario' 
            /> 
            <input 
            type='text' 
            value={data_entrada}
            onChange={e=>setvalor_unitario(e.target.value)}
            placeholder='Digite data entrada' 
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
  
    )
  
  }