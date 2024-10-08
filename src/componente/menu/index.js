import './styles.css';
import { Link } from 'react-router-dom';
import { FiUser, FiPackage, FiArrowUpCircle, FiArchive, FiArrowDownCircle, FiBarChart2 } from "react-icons/fi"; // Importing React icons

export default function Menu() {
    return (
        <div>
            <nav>
                <Link to="/listausuario" className='link'><FiUser className='icos' />Usuário</Link> {/* User icon */}
                <Link to="/listarGraficos" className='link'><FiBarChart2 className='icos' />Gráficos</Link> {/* Graphs icon - Change to the appropriate route */}
                <Link to="/listaprodutos" className='link'><FiPackage className='icos' />Produto</Link> {/* Product icon */}
                <Link to="/listaentradaProduto" className='link'><FiArrowUpCircle className='icos' />Entrada produto</Link> {/* Product entry icon */}
                <Link to="/listaestoque" className='link'><FiArchive className='icos' />Estoque</Link> {/* Stock icon */}
                <Link to="/listarSaida" className='link'><FiArrowDownCircle className='icos' />Saída</Link> {/* Exit icon */}
            </nav>
        </div>
    )
}
