import React from 'react'
import Style from '../Css/Footer.module.css';

function Footer() {

    const [contato, setContato] = React.useState(false);

    function mostrar() {
        setContato(!contato);
    }

    return (
        <div className={Style.footer}>
            <h2>Desenvolvido por Gabriel Pinheiro</h2>
            <p className={Style.paragraph}>
                <button className={Style.botao} onClick={mostrar}>Contato</button>
                {contato && (
                    " GP.PSL55@GMAIL.COM"
                )}
            </p>
        </div>
    )
}

export default Footer;