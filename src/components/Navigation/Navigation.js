import './styles.css'

function Navigation() {
    return (
        <div className='navigationContainer'>
            <div className='arrow_icon'>
                <i className='fas fa-caret-up' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}></i>
            </div>
            <div className='wpp_icon'>
                <a href="https://wa.me/5531991021509?text=Ol%C3%A1+venho+do+site+e+desejo+atendimento+para+o+Invisible%2C+pode+me+ajudar%3F" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-whatsapp'></i>
                </a>
            </div>
        </div >
    );
}

export default Navigation;