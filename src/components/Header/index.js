import Nav from "./Nav/Nav";
import Buscar from "./Buscar/Buscar";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";


export default function Header() {
    return (
        <div className="container container-md border">
            <div className="row border justify-content-center">
                <div className="col border" sm={1}>Logo</div>
                <div className="col border" sm={2}>Digital Store</div>
                <div className="col border" sm={6}><Buscar /></div>
                <div className="col border" sm={1}>cadastre-se</div>
                <div className="col border" sm={1}><Link to={'/'} className="btn btn-primary">Entrar</Link></div>
                <div className="col border" sm={1}>
                <button type="button btn-" className="btn">
                <ShoppingCart/><span className="badge badge-danger">9</span>
                </button>
                </div>
            </div>
            <div className="row border">
                <div className="col border" sm={8}><Nav /></div>
                <div className="col border"></div>
            </div>
        </div>
    )
}