import './styles.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import photoprocd from '../../assets/img/photoprocd.png'
import photofunc from '../../assets/img/photofunc.png'
import before from '../../assets/img/before.jpg'
import after from '../../assets/img/after.jpg'
import randompht from '../../assets/img/randompht.jpg'
import randompht2 from '../../assets/img/randompht2.jpg'
import randomphoto from '../../assets/img/randomphoto.jpg'
import randomphoto2 from '../../assets/img/randomphoto2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import pht_one from '../../assets/img/pht_one.jpg'
import pht_two from '../../assets/img/pht_two.jpg'
import pht_third from '../../assets/img/pht_third.jpg'
import pht_fourth from '../../assets/img/pht_fourth.jpg'
import pht_fifth from '../../assets/img/pht_fifth.jpg'
import pht_sixth from '../../assets/img/pht_sixth.jpg'
import pht_seventh from '../../assets/img/pht_seventh.jpg'
import pht_tenth from '../../assets/img/pht_tenth.jpg'
import pht_ninth from '../../assets/img/pht_ninth.png'
import ImageSlider from 'react-image-comparison-slider'
import mdlogo from '../../assets/img/mydream_logo.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import invisibleslimlogo from '../../assets/img/invisibleslimlogo.svg'
import slide from '../../assets/img/slide.svg'
import logodf from '../../assets/img/logodf.svg'
import slideiconacess from '../../assets/img/slideiconacess.svg'




function Home() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])



    return (
        <div className='home'>
            <div className='first_container'>
                <div className='first_home_block'>
                    <div className='first_text_block'>
                        <h1 data-aos="fade-right" data-aos-duration="1000">BEM VINDO(A)! <br />AO<br /> O MEU SALÃO</h1>
                        <p data-aos="fade-right" data-aos-duration="1500">Somos um dos melhores salões de Belo Horizonte, <strong>referência em alongamento adesivado invisível e prótese capilar,</strong> oferecendo os mais avançados e inovadores procedimentos e tecnologias para nossos clientes.</p>
                    </div>
                    <img src={photoprocd} alt='photoprocd' data-aos="fade-right" data-aos-duration="1500" />
                    <div className='second_text_block'>
                        <h1 data-aos="fade-left" data-aos-duration="1000">Por <span class="word">Camila Rodrigues</span>, criadora do método<span class="word"> Invisible!</span></h1>
                        <p data-aos="fade-left" data-aos-duration="1500"><strong>Único método testado e aprovado por dermatologistas e tricologistas,</strong> totalmente indolor e imperceptível. Desenvolvido pela expert em saúde capilar<strong> Camila Rodrigues</strong> que a mais de 20 anos vem transformando vidas atráves dos cabelos.</p>
                        <div className='home_block_links'>
                            <div className='home_first_btn'>
                                <Link to='/About'>
                                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Sobre</button>
                                </Link>
                            </div>
                            <div className='home_second_btn'>
                                <Link to='/Courses'>
                                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Cursos</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_container'>
                <div className='title_second_container'>
                    <img src={invisibleslimlogo} alt='invisibleslimlogo' />
                    <div className='title_container'>
                        <h1 data-aos="fade-right" data-aos-duration="1000">Tenha o cabelo dos sonhos com o Invisible!</h1>
                    </div>
                </div>
                <div className='acessibility_container'>
                    <h3>Pressione ao centro das fotos e arraste<br /> para o lado para ver os resultados.</h3>
                    <img src={slide} alt='slide' />
                </div>
                <div className='container_box'>
                    <div className='item_box' style={{ width: 475, height: 519 }}>
                        <ImageSlider
                            image1={after}
                            image2={before}
                            sliderWidth={1}
                            sliderColor="#fff"
                            handleColor="#d19e78"
                            handleBackgroundColor="#ede8de"
                            leftLabelText="ANTES"
                            rightLabelText="DEPOIS"
                        />
                    </div>
                    <div className='item_box' style={{ width: 475, height: 519 }}>
                        <ImageSlider
                            image1={randompht}
                            image2={randompht2}
                            sliderWidth={1}
                            sliderColor="#fff"
                            handleColor="#d19e78"
                            handleBackgroundColor="#ede8de"
                            leftLabelText="ANTES"
                            rightLabelText="DEPOIS"
                        />
                    </div>
                    <div className='item_box' style={{ width: 475, height: 519 }} type="text/css">
                        <ImageSlider
                            image1={randomphoto2}
                            image2={randomphoto}
                            sliderWidth={1}
                            sliderColor="#fff"
                            handleColor="#d19e78"
                            handleBackgroundColor="#ede8de"
                            leftLabelText="ANTES"
                            rightLabelText="DEPOIS"
                        />
                    </div>
                </div>
                <div className='title_steps_list'>
                    <h1 data-aos="fade-right" data-aos-duration="1000">Em apenas 4 passos, rumo ao comprimento ideal!</h1>
                </div>
                <div className='list_box' >
                    <div className='list_box_one'>
                        <div className='item_list' data-aos="flip-left" data-aos-duration="1500">
                            <h2>1</h2>
                            <h3>AVALIAÇÃO</h3>
                            <p>Na avaliação, fazemos uma melhor apresentação do método, auxiliamos na escolha do cabelo, cor, tipo e comprimento desejado. Somente atráves da avaliação presencial informamos o valor. Lembrando que a primeira avaliação é gratuita.</p>
                        </div>
                        <div className='item_list' data-aos="flip-right" data-aos-duration="1500">
                            <h2>2</h2>
                            <h3>ESCOLHA DO CABELO</h3>
                            <p>Trabalhamos somente com cabelos brasileiros regionais. Entendemos a necessidade de cada cliente em relação ao tamanho, cor e textura, por isso contamos com uma grande variedade para melhor atendê-las.</p>
                        </div>
                    </div>
                    <div className='list_box_one'>
                        <div className='item_list' data-aos="flip-left" data-aos-duration="1500">
                            <h2>3</h2>
                            <h3>APLICAÇÃO</h3>
                            <p>O procedimento é totalmente indolor e imperceptível. A duração da colocação é de 40 minutos. Utilizamos uma película adesiva que é fabricada por nós e colocada em você de acordo com suas medidas. Não danifica em absolutamente nada o seu cabelo.</p>
                        </div>
                        <div className='item_list' data-aos="flip-right" data-aos-duration="1500">
                            <h2>4</h2>
                            <h3>MANUTENÇÃO</h3>
                            <p>A manutenção do Mega Hair é importante para garantir a durabilidade e a qualidade do alongamento. É recomendado agendar a manutenção até 90 dias, dependendo do crescimento do seu cabelo e dos cuidados que devemos ter com ele.</p>
                        </div>
                    </div>
                </div>
                <div className='buttoninvisible'>
                    <Link to='/Invisible'>
                        <button onClick={() => { window.scrollTo({ top: 0, }); }}>Saiba Mais</button>
                    </Link>
                </div>
            </div>
            <div className='third_container'>
                <div className='title_third_container'>
                    <h1 data-aos="fade-down" data-aos-duration="1000">Confira nossa linha de cosméticos exclusiva para você!</h1>
                    <img src={mdlogo} alt='mdlogo' data-aos="fade-up" data-aos-duration="1000" />
                </div>
                <div className='third_block'>
                    <div className='third_text_block' data-aos="fade-right" data-aos-duration="1500">
                        <p>A My Dream Cosmetic foi criada para atender às necessidades de proporcionar cuidados especiais aos cabelos danificados por coloração, alisamento ou química.</p>
                        <p>Com ativos poderosos e tecnológicos, nossas linhas revitalizam a saúde capilar e devolvem a beleza, o brilho, a maciez e o movimento aos fios.</p>
                    </div>
                    <div className='container_imgft' data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000">
                        <img src={photofunc} alt='photofunc' />
                    </div>
                    <div className='third_text_block'>
                        <p data-aos="fade-left" data-aos-duration="1000">Experimente os nossos produtos profissionais e sinta a diferença com cabelos sempre mais bonitos e saudáveis.</p>
                        <div className='third_button'>
                            <Link to='/Products'>
                                <button onClick={() => { window.scrollTo({ top: 0, }); }}>Produtos</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fourth_container'>
                <div className='fourth_text'>
                    <h1 data-aos="fade-right" data-aos-duration="1000">Surpreenda-se com a variedade e qualidade de nossos serviços!</h1>
                    <div className='acessibility_container'>
                        <img src={slideiconacess} alt='slideiconacess' />
                    </div>
                </div>
                <div className='slidercontainer'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'

                    >
                        <SwiperSlide>
                            <h1>Sobrancelha</h1>
                            <img src={pht_one} alt="pht_one"></img>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h1>Micropigmentação Labial</h1>
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
                        <div className='slider-controler'>
                            <div className='swiper-button-prev slider-arrow'>
                            </div>
                            <div className='swiper-button-next slider-arrow'>
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className='buttonservice'>
                <Link to='/Services'>
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Ver todos Serviços</button>
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
        </div>

    );
}
export default Home;