
import './styles.css'
import Oslogo from '../../assets/img/logo.svg'
import instagram_icon from '../../assets/img/instagram_icon.svg'
import wpp_icon from '../../assets/img/wpp_icon.svg'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <div>
            <div className='first_container_services'>
                <div className='title_container_services'>
                    <h1>Todos os procedimentos que você quer em um só lugar</h1>
                    <p>Faça parte do nosso clube de vantagens, aproveite os benefícios e tenha acesso a todos os serviços com condições especiais para assinantes.</p>
                </div>
            </div>
            <div className='benefitspackservices'>
                <div className='benefits_pack'>
                    <input type="radio" name="bcc" id="bcc3" />
                    <label for="bcc3">
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                        <h1>CLUBE DE VANTAGENS O meu Salão</h1>
                    </label>
                    <div className='signature_pack'>
                        <h3>- Agendamento Ilimitado</h3>
                        <h3>- Procedimentos Ilimitados</h3>
                        <h3>- 10%off em qualquer serviço</h3>
                    </div>
                </div>
                <div className='benefits_pack'>
                    <input type="radio" name="bcc" id="bcc4" />
                    <label for="bcc4">
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                        <h1>O meu Salão for men signature</h1>
                    </label>
                    <div className='signature_pack'>
                        <h3>- Agendamento Ilimitado</h3>
                        <h3>- Procedimentos Ilimitados</h3>
                        <h3>- 10%off em qualquer serviço</h3>
                    </div>
                </div>

            </div>
            <div className='second_container_services'>
                <div className='listservices_box'>
                    <div className='item_listservices'>
                        <h1>Sobrancelha</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Esmalteria</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Baby liss</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Escova</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Corte</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Hidratação</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Massagem</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Reflexologia</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Selagem</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Botox</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Podologia</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Drenagem</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Drenagem</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Drenagem</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Drenagem</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                    <div className='item_listservices'>
                        <h1>Drenagem</h1>
                        <p>Analisamos a situação de cada cliente, as características particulares do seu cabelo e expectativas com o Megahairinvisível.</p>
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='buttonscheduling'>
                <Link to='/Contact'>
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Agendar Procedimento</button>
                </Link>
            </div>
            <div className='footer'>
                <div className='footer_icon'>
                    <a href="https://www.instagram.com/omeusalaoburitis" target="_blank" rel="noopener noreferrer">
                        <img src={instagram_icon} alt='instagram_icon' />
                    </a>
                </div>
                <div className='footer_logo'>
                    <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} src={Oslogo} alt='Oslogo' />
                </div>
                <div className='footer_icon'>
                    <a href="https://web.whatsapp.com/send?phone=5531992926179" target="_blank" rel="noopener noreferrer">
                        <img src={wpp_icon} alt='wpp_icon' />
                    </a>
                </div>
            </div>
        </div>

    );
}
export default Services;