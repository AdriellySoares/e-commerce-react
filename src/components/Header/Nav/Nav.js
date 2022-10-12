import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <Link>Home</Link>
            <Link>Produtos</Link>
            <Link>Categorias</Link>
            <Link>Meus Produtos</Link>
        </div>
    )
}