import './styles.css'

function Navigation() {
    return (
        <div className='navigationContainer'>
            <div className='arrow_icon'>
                <i className='fas fa-caret-up' onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }}></i>
            </div>
            <div className='wpp_icon'>
                <a href="https://bit.ly/PROCEDIMENTOSMEUSALAO" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-whatsapp'></i>
                </a>
            </div>
        </div >
    );
}

export default Navigation;