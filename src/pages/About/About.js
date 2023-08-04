import './styles.css'
import slideimgone from '../../assets/img/slideimgone.jpg'
import slideimgtwo from '../../assets/img/slideimgtwo.jpg'
import slideimgthree from '../../assets/img/slideimgthree.jpg'
import slideimgfour from '../../assets/img/slideimgfour.jpg'
import slideimgfive from '../../assets/img/slideimgfive.jpg'
import slideimgsix from '../../assets/img/slideimgsix.jpg'
import carouselimgone from '../../assets/img/carouselimgone.jpg'
import carouselimgtwo from '../../assets/img/carouselimgtwo.jpg'
import carouselimgthree from '../../assets/img/carouselimgthree.jpg'
import carouselimgfour from '../../assets/img/carouselimgfour.jpg'
import carouselimgfive from '../../assets/img/carouselimgfive.jpg'
import carouselimgsix from '../../assets/img/carouselimgsix.jpg'
import centralparkone from '../../assets/img/centralparkone.jpg'
import centralparktwo from '../../assets/img/centralparktwo.jpeg'
import centralparkthree from '../../assets/img/centralparkthree.jpeg'
import centralparkfour from '../../assets/img/centralparkfour.jpeg'
import centralparkfive from '../../assets/img/centralparkfive.jpeg'
import centralparkseven from '../../assets/img/centralparkseven.jpeg'
import logosign from '../../assets/img/logosign.svg'
import logoomsformen from '../../assets/img/logoomsformen.svg'
import logodf from '../../assets/img/logodf.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

function About() {

    const swiper2Params = {
        slidesPerView: "auto",
        spaceBetween: -30,
        stretch: 0,
    };

    return (
        <div>
            <div className='first_about_container'>
                <h1>O Meu Salão</h1>
                <p>Fundado em 2019 por Camila Rodrigues, profissional atuante no mercado desde 2003. Sempre buscando por inovações, tecnologias e contribuições diretas com o mercado da beleza. Vinda de uma tradicional e consagrada família de cabeleireiros e artistas do meio. Sempre com muita paixão pelo aprendizado concebeu o inédito método de mega hair denominado Invisible, técnica esta que obteve destaque em premiações internacionais no ano de 2022 em países da América e Oriente Médio.</p>
                <p>Contamos com uma equipe de profissionais altamente qualificadas, que está sempre pronta para atender às suas necessidades e desejos, proporcionando um elegante, sutil e perspicaz ambiente para que você possa relaxar e cuidar de si.</p>
            </div>
            <div className='second_about_container'>
                <h1>Conheça as nossas unidades:</h1>
            </div>
            <div className='unit_one'>
                <div className='unit_textblock'>
                    <h1>BURITIS</h1>
                    <p>Um salão completo para toda a família com profissionais voltados para um atendimento totalmente humanizado e respeitando sempre a individualidade de cada cliente.</p>
                    <p>Nossos profissionais passam por treinamentos periódicos em academias nacionais e internacionais para garantir a sua satisfação de acordo com a sua personalidade e também com as tendências do visagismo mundial.</p>
                    <div className='hour_phone'>
                        <p>TELEFONES</p>
                        <div className='icon_phone'>
                            <div className='phone'><i className='fas fa-phone'></i></div>
                            <h1>(31) 3212-3002</h1>
                        </div>
                        <div className='icon_wpp'>
                            <div className='wpp'><i className='fab fa-whatsapp'></i></div>
                            <h1>(31) 9 9292-6179</h1>
                        </div>
                        <p>TERÇA A SÁBADO</p>
                        <div className='icon_clock'>
                            <div className='clock'><i className='fas fa-clock'></i></div>
                            <h1>09H - 19H</h1>
                        </div>
                    </div>
                </div>
                <div className='map'>
                    <iframe width="600" height="500" id="gmap_canvas" title="buritismap" src="https://maps.google.com/maps?q=o%20meu%20salao%20por%20camila%20rodrigues&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            <div className='container_slider'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container2'

                    {...swiper2Params}>
                    <SwiperSlide className='swiper_item'>
                        <img src={slideimgone} alt="pht_one"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={slideimgtwo} alt="pht_two"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={slideimgthree} alt="pht_third"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={slideimgfour} alt="pht_fourth"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={slideimgfive} alt="pht_fifth"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={slideimgsix} alt="pht_sixth"></img>
                    </SwiperSlide>
                    <div className='slider-controler'>
                        <div className='swiper-button-prev slider-arrow'>
                        </div>
                        <div className='swiper-button-next slider-arrow'>
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>
                </Swiper>
                <div className='logocontainer'>
                    <img src={logosign} alt='logosign' />
                </div>
            </div>
            <div className='unit_one'>
                <div className='unit_textblock'>
                    <h1>CENTRAL PARK - BETÂNIA</h1>
                    <p>Nossa segunda unidade, O meu Salão For Men é uma barbearia, exclusiva para eles.</p>
                    <p>Um espaço super moderno e completo, que possui uma loja de roupas, acessórios e calçados integrada. Disponibilizamos de frigobar e TV, proporcionando a você um conforto maior enquanto você aguarda!</p>
                    <p>Contamos com profissionais super qualificados que entregam um serviço de excelência, possuímos equipamentos de ponta, para garantir uma finalização com grande estilo.</p>
                    <div className='hour_phone'>
                        <p><strong>TELEFONE</strong></p>
                        <div className='icon_wpp'>
                            <div className='wpp'><i className='fab fa-whatsapp'></i></div>
                            <h1>(31) 9 9828-1212</h1>
                        </div>
                        <p><strong>SEGUNDA A SÁBADO</strong></p>
                        <div className='icon_clock'>
                            <div className='clock'><i className='fas fa-clock'></i></div>
                            <h1>09H - 20H</h1>
                        </div>
                    </div>
                </div>
                <div className='map'>
                    <iframe width="600" height="500" id="gmap_canvas" title='mapcentralpark' src="https://maps.google.com/maps?q=o%20meu%20salao%20for%20men&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            <div className='container_slider'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    className='swiper_container2'

                    {...swiper2Params}>
                    <SwiperSlide className='swiper_item'>
                        <img src={carouselimgone} alt="pht_one"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={carouselimgtwo} alt="pht_two"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={carouselimgthree} alt="pht_third"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={carouselimgfour} alt="pht_fourth"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={carouselimgfive} alt="pht_fifth"></img>
                    </SwiperSlide>
                    <SwiperSlide className='swiper_item'>
                        <img src={carouselimgsix} alt="pht_sixth"></img>
                    </SwiperSlide>
                    <div className='slider-controler'>
                        <div className='swiper-button-prev slider-arrow'>
                        </div>
                        <div className='swiper-button-next slider-arrow'>
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>
                </Swiper>
                <div className='logocontainer'>
                    <img src={logoomsformen} alt='logoomsformen' />
                </div>
            </div>
            <div className='unit_one'>
                <div className='unit_textblock'>
                    <h1>CENTRAL PARK II - BETÂNIA</h1>
                    <p>Nossa segunda unidade, O meu Salão For Men é uma barbearia, exclusiva para eles.</p>
                    <p>Um espaço super moderno e completo, que possui uma loja de roupas, acessórios e calçados integrada. Disponibilizamos de frigobar e TV, proporcionando a você um conforto maior enquanto você aguarda!</p>
                    <p>Contamos com profissionais super qualificados que entregam um serviço de excelência, possuímos equipamentos de ponta, para garantir uma finalização com grande estilo.</p>
                    <div className='hour_phone'>
                        <p><strong>TELEFONE</strong></p>
                        <div className='icon_wpp'>
                            <div className='wpp'><i className='fab fa-whatsapp'></i></div>
                            <h1>(31) 9 9828-1212</h1>
                        </div>
                        <p><strong>SEGUNDA A SÁBADO</strong></p>
                        <div className='icon_clock'>
                            <div className='clock'><i className='fas fa-clock'></i></div>
                            <h1>09H - 20H</h1>
                        </div>
                    </div>
                </div>
                <div className='map'>
                    <iframe width="600" height="500" id="gmap_canvas" title='mapcentralpark' src="https://maps.google.com/maps?q=o%20meu%20salao%20for%20men&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className='swiper_container2'

                {...swiper2Params}>
                <SwiperSlide className='swiper_item'>
                    <img src={centralparkone} alt="pht_one"></img>
                </SwiperSlide>
                <SwiperSlide className='swiper_item'>
                    <img src={centralparktwo} alt="pht_two"></img>
                </SwiperSlide>
                <SwiperSlide className='swiper_item'>
                    <img src={centralparkthree} alt="pht_third"></img>
                </SwiperSlide>
                <SwiperSlide className='swiper_item'>
                    <img src={centralparkfour} alt="pht_fourth"></img>
                </SwiperSlide>
                <SwiperSlide className='swiper_item'>
                    <img src={centralparkfive} alt="pht_fifth"></img>
                </SwiperSlide>
                <SwiperSlide className='swiper_item'>
                    <img src={centralparkseven} alt="pht_sixth"></img>
                </SwiperSlide>
                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </Swiper>
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
        </div>

    );
}
export default About;