import './styles.css'
import Oslogo from '../../assets/img/logo.svg'

function Contact() {
    return (
        <div>
            <div className='first_contactcontainer'>
                <div className='title_contactcontainer'>
                    <h1>Entre em contato conosco, estamos à disposição para ajudar.</h1>
                    <p>Nós estamos sempre disponíveis para tirar todas as suas dúvidas, agendar um horário ou simplesmente conversar sobre suas necessidades, opiniões ou ideias.</p>
                </div>
                <div className='icon_chat'><i className='fas fa-comments'></i></div>
                <div className='contact_btn'>
                    <a href="https://wa.me/5531991021509?text=Ol%C3%A1%2C+venho+do+Site+O+Meu+Salao+Buritis" target="_blank" rel="noopener noreferrer">
                        <button onClick={() => { window.scrollTo({ top: 0, }); }}>Clique aqui</button>
                    </a>
                </div>
            </div>
            <div className='box_contacts'>
                <div className='phone_square'><i className='fas fa-phone-square'></i></div>
                <div className='icon_phone'>
                    <div className='phone'><i className='fas fa-phone'></i></div>
                    <h1>(31) 3212-3002</h1>
                </div>
                <div className='icon_wpp'>
                    <div className='wpp'><i className='fab fa-whatsapp'></i></div>
                    <h1>(31) 9 9292-6179</h1>
                </div>
                <div className='icon_wpp'>
                    <div className='wpp'><i className='fab fa-whatsapp'></i></div>
                    <h1>(31) 9 9828-1212</h1>
                </div>
                <div className='icon_email'>
                    <div className='email'><i className='fas fa-globe'></i></div>
                    <h1>omeusalao@gmail.com</h1>
                </div>
                <div className='icon_location'>
                    <div className='location'><i className='fas fa-map-marker-alt'></i></div>
                    <h1>Rua Maria Heilbuth Surette, 51 - Buritis, Belo Horizonte-MG</h1>
                </div>
            </div>
            <div className='footer'>
                <div className='footer_icon'>
                    <a href="https://www.instagram.com/omeusalaoburitis" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
                <div className='footer_logo'>
                    <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} src={Oslogo} alt='Oslogo' />
                </div>
                <div className='footer_icon'>
                    <a href="https://wa.me/5531991021509?text=Ol%C3%A1%2C+venho+do+Site+O+Meu+Salao+Buritis" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-whatsapp'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;