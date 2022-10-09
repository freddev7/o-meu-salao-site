import './styles.css'

function Contact() {
    return (
        <div>
            <div className='first_contactcontainer'>
                <div className='title_contactcontainer'>
                    <h1>Tire suas dúvidas ou, simplesmente, converse conosco</h1>
                    <p>Nossa equipe está pronta para agendar um horário para você, ouvir sugestões, críticas e, claro, elogios. Conte com a gente.
                    </p>
                </div>
            </div>
            <div className='container_inputs'>
                <input type="text" placeholder='  Seu Nome'/>
                <input type="text" placeholder='  Seu E-mail'/>
                <input type="text" placeholder='  Seu Telefone/Whatsapp'/>
                <input type="text" placeholder='  Sua mensagem'/>
            </div>
        </div>
    );
}

export default Contact;