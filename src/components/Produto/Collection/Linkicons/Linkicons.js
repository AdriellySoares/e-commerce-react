import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Button } from '@mui/material';
import FrameC from '../img/FrameC.png'

import './index.css'




export default function Linkicons(){
    return(
        <section>
            <div className='card-deck d-flex justify-content-center' >
                <p className="titulo">Coleções em destaque</p>
            </div>
            <div className='d-flex d-flex-row-row justify-content-center'>
                <nav>
                    <Link to="/"></Link>
                    <div>
                        <Button className="botao"><Link to="/Camisetas"><p className="texto"><img src={FrameC}/>Camisetas</p></Link></Button>
                    </div>
                    <Button className="botao"><Link to="/Calcas" ><p className="texto">Calças</p></Link></Button>
                    <Button className="botao"><Link to="/Bones"><p className="texto">Bonés</p></Link></Button>
                    <Button className="botao"><Link to="/Headphones"><p className="texto">Headphones</p></Link></Button>
                    <Button className="botao"><Link to="/Tenis"><p className="texto">Tênis</p></Link></Button>
                </nav>
            </div>
        </section>
    );
}