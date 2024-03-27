import './styles.css';
import { Link } from 'react-router-dom';
import { FiUser, FiPackage, FiArrowUpCircle, FiArchive, FiArrowDownCircle, FiBarChart2 } from "react-icons/fi"; // Importing React icons

export default function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <nav>
                <Link to="/listausuario" className='link'><FiUser className='icos' />Usuário</Link> {/* User icon */}
                <Link to="/listadizimistas" className='link'><FiPackage className='icos' />Dizimista</Link> {/* Dizimista icon - Alterado de listaprodutos para listadizimistas */}
            </nav>
        </div>
    )
}
