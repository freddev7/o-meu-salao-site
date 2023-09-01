
import './styles.css'
import Oslogo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import acessibilityicon from '../../assets/img/acessibilityicon.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCards, Pagination, Navigation } from "swiper";
import pht_one from '../../assets/img/pht_one.jpg'
import pht_two from '../../assets/img/pht_two.jpg'
import pht_third from '../../assets/img/pht_third.jpg'
import pht_fourth from '../../assets/img/pht_fourth.jpg'
import pht_fifth from '../../assets/img/pht_fifth.jpg'
import pht_sixth from '../../assets/img/pht_sixth.jpg'
import pht_seventh from '../../assets/img/pht_seventh.jpg'
import pht_tenth from '../../assets/img/pht_tenth.jpg'
import pht_ninth from '../../assets/img/pht_ninth.png'
import acessibilitycardsicon from '../../assets/img/acessibilitycardsicon.svg'
import logodf from '../../assets/img/logodf.svg'
import pht_ten from '../../assets/img/pht_ten.jpg'
import pht_eleven from '../../assets/img/pht_eleven.jpg'

function Services() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])


    return (
        <div>
            <div className='first_container_services'>
                <h1>Todas as possibilidades reunidas em um só lugar</h1>
                <p>Faça parte do nosso clube de vantagens, aproveite os benefícios e tenha acesso a todos os serviços com condições especiais para assinantes.</p>
            </div>
            <div className='acessibility_container'>
                <h3>Pressione e saiba mais.</h3>
                <img src={acessibilityicon} alt='slide' />
            </div>
            <div className='benefitspackservices'>
                <div className='benefits_pack'>
                    <input type="radio" name="bcc" id="bcc3" />
                    <label for="bcc3">
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                        <h1>CLUBE DE VANTAGENS</h1>
                    </label>
                    <div className='signature_pack'>
                        <h3>- Procedimentos Ilimitados</h3>
                        <h3>- Agendamentos Ilimitados</h3>
                        <h3>- Descontos Exclusivos</h3>
                        <h3>- Acesso à Área de Membros</h3>
                        <h3>- Sorteios</h3>
                    </div>
                </div>
                <div className='benefits_pack'>
                    <input type="radio" name="bcc" id="bcc4" />
                    <label for="bcc4">
                        <div>
                            <img src={Oslogo} alt='Oslogo' />
                        </div>
                        <h1>CARTÃO PRESENTE</h1>
                    </label>
                    <div className='signature_pack'>
                        <h3>- O Vale-presente pode ser em qualquer<br />   valor que o cliente desejar.</h3>
                        <h3>- Proporcione essa experiência única <br />   e inesquecível para quem você ama.</h3>
                    </div>
                </div>
            </div>
            <div className='carousel_container'>
                <div className='slider_carousel'>
                    <div className='item_carousel'>
                        <h1>Mechas</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Esmalteria</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Cílios</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Micropigmentação Labial</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Lash Lift</h1>
                    </div>
                </div>
                <div className='slider_carousel'>
                    <div className='item_carousel'>
                        <h1>Mechas</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Esmalteria</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Cílios</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Micropigmentação Labial</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Lash Lift</h1>
                    </div>
                </div>
            </div>
            <div className='carousel_container_two'>
                <div className='slider_carousel_two'>
                    <div className='item_carousel'>
                        <h1>Massagem</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Dream Gloss</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Penteados</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Makeup</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Sobrancelha</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Hydra Gloss</h1>
                    </div>
                </div>
                <div className='slider_carousel_two'>
                    <div className='item_carousel'>
                        <h1>Massagem</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Dream Gloss</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Penteados</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Makeup</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Sobrancelha</h1>
                    </div>
                    <div className='item_carousel'>
                        <h1>Hydra Gloss</h1>
                    </div>
                </div>
            </div>
            <div className='acessibility_container'>
                <img src={acessibilitycardsicon} alt='acessibilitycardsicon' />
            </div>
            <div className='second_container_services'>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    loop={true}
                    spaceBetween={10}
                    centeredSlides={true}
                    slidesPerView="auto"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, EffectCards, Pagination, Navigation]}
                    className='swiper_container'

                >
                    <SwiperSlide>
                        <h1>Sobrancelha</h1>
                        <img src={pht_one} alt="pht_one"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Hydra Gloss</h1>
                        <img src={pht_two} alt="pht_two"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Esmalteria</h1>
                        <img src={pht_third} alt="pht_third"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Penteados</h1>
                        <img src={pht_fourth} alt="pht_fourth"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Makeup</h1>
                        <img src={pht_fifth} alt="pht_fifth"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Massagem</h1>
                        <img src={pht_sixth} alt="pht_sixth"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Dream Gloss</h1>
                        <img src={pht_seventh} alt="pht_seventh"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Mechas</h1>
                        <img src={pht_tenth} alt="pht_tenth"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Cílios</h1>
                        <img src={pht_ninth} alt="pht_ninth"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Micropigmentação Labial</h1>
                        <img src={pht_ten} alt="pht_ninth"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Lash Lift</h1>
                        <img src={pht_eleven} alt="pht_eleven"></img>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='buttonscheduling'>
                <Link to='/Contact'>
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>AGENDAR PROCEDIMENTO</button>
                </Link>
            </div>
            <div className='footer'>
                <div className='footer_icon'>
                    <a href="https://www.instagram.com/omeusalaoburitis" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
                <div className='auth_prod'>
                    <h1>Powered by</h1>
                    <a href="https://www.designfactoryweb.com.br" target="_blank" rel="noopener noreferrer">
                        <img src={logodf} alt="logodf"></img>
                    </a>
                </div>
            </div>
        </div >

    );
}
export default Services;