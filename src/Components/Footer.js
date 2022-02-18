import React from 'react'
import Style from '../Css/Footer.module.css';

function Footer() {

    return (
        <div className={Style.footer}>
            <h2 className={Style.h2}>Desenvolvido por <a target='_blank' href='https://pinheiro.vercel.app/' rel="noreferrer" >Gabriel Pinheiro</a></h2>
        </div>
    )
}

export default Footer;