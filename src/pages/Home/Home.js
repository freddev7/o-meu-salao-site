import './styles.css'
import photo from '../../assets/img/photo.png'
import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import logowmk from '../../assets/img/logowmk.png'
import photoprocd from '../../assets/img/photoprocd.png'
import photofunc from '../../assets/img/photofunc.png'
import before from '../../assets/img/before.png'
import after from '../../assets/img/after.png'
import randompht from '../../assets/img/randompht.png'
import randompht2 from '../../assets/img/randompht2.png'
import randomphoto from '../../assets/img/randomphoto.png'
import randomphoto2 from '../../assets/img/randomphoto2.png'
import pht_one from '../../assets/img/pht_one.png'
import pht_two from '../../assets/img/pht_two.png'
import pht_third from '../../assets/img/pht_third.png'
import pht_fourth from '../../assets/img/pht_fourth.png'
import pht_fifth from '../../assets/img/pht_fifth.png'
import pht_sixth from '../../assets/img/pht_sixth.png'
import pht_seventh from '../../assets/img/pht_seventh.png'
import pht_eighth from '../../assets/img/pht_eighth.png'
import pht_ninth from '../../assets/img/pht_ninth.png'
import Oslogo from '../../assets/img/logo.svg'
import ImageSlider from 'react-image-comparison-slider'
import instagram_icon from '../../assets/img/instagram_icon.svg'
import wpp_icon from '../../assets/img/wpp_icon.svg'
import arrow from '../../assets/img/arrow.png'
import mdlogo from '../../assets/img/mydream_logo.svg'
import logo3 from '../../assets/img/logo3.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    useEffect(() => {
       window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    useEffect(() => {
        Aos.init({duration: 3000});
    },[])



    return (
        <div className='home'>
            <div className='first_container'>
                <div className='home_block'>
                    <div className='home_block_text'>
                        <h1>O meu salão</h1>
                        <p>É referência em alongamentos e tratamentos de cabelos, unhas e estética, proporcionando aos clientes o que há de mais moderno na área da beleza. Oferecemos um leque de serviços completos para mulheres e homens.</p>
                    </div>
                    <div className='home_block_links'>
                        <div className='home_first_btn'>
                            <Link to='/About'>
                                <button onClick={() => { window.scrollTo({ top: 0, }); }}>Sobre</button>
                            </Link>
                        </div>
                        <div className='home_second_btn'>
                            <Link to='/Services'>
                                <button onClick={() => { window.scrollTo({ top: 0, }); }}>Serviços</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='container_img' data-aos="fade-left">
                    <div className='photo'>
                        <img src={photo} alt='photoa' />
                    </div>
                    <div className='logowmk'>
                        <img src={logowmk} alt='logowmk' />
                    </div>
                </div>
            </div>
            <div className='second_container'>
                <div className='second_container_img' data-aos="fade-right">
                    <img src={photoprocd} alt='photoprocd' />
                </div>
                <div className='second_home_block'>
                    <div className='second_block_text'>
                        <h1>Você já conhece o método Invisible Slim ?</h1>
                        <br />
                        <p>Alongamento adesivado, totalmente indolor e imperceptível. Único método testado e aprovado por dermatologistas e tricologistas. Método exclusivo, desenvolvido pela expert em saúde capilar Camila Rodrigues, vem transformando vidas atráves dos cabelos.</p>
                    </div>
                        <br />
                        <br />
                        <br />
                    <div className='home_first_btn'>
                            <Link to='/Courses'>
                                <button onClick={() => { window.scrollTo({ top: 0, }); }}>Cursos</button>
                            </Link>
                        </div>
                </div>
            </div>
            <div className='third_container'>
                <div className='title_container'>
                    <h1>Tenha o cabelo dos sonhos com o Invisible Slim!</h1>
                </div>
            </div>
            <div className='list_box' >
                <div className='item_list' data-aos="flip-left">
                    <h2>1</h2>
                    <h3>AVALIAÇÃO</h3>
                    <p>Na avaliação, nós fazemos uma melhor apresentação do método, auxiliamos na escolha do cabelo, cor, tipo e comprimento desejado. Somente mediante a avaliação presencial conseguimos passar o orçamento, lembrando que a primeira avaliação é gratuita.</p>
                </div>
                <div className='item_list' data-aos="flip-left">
                    <h2>2</h2>
                    <h3>ESCOLHA DO CABELO</h3>
                    <p>Prezamos muito pela qualidade dos nossos cabelos. Trabalhamos hoje com cabelos brasileiros regionais. Entendemos a necessidade de cada cliente em relação ao tamanho, cor e textura, por isso contamos com uma grande variedade para melhor atendê-las.</p>
                </div>
                <div className='item_list' data-aos="flip-left">
                    <h2>3</h2>
                    <h3>APLICAÇÃO</h3>
                    <p>O procedimento é totalmente indolor e imperceptível. A duração da colocação é de 40 minutos. Utilizamos uma película adesiva que é fabricada por nós e colocada em você de acordo com suas medidas. Não danifica em absolutamente nada o seu cabelo.</p>
                </div>
                <div className='item_list' data-aos="flip-left">
                    <h2>4</h2>
                    <h3>MANUTENÇÃO</h3>
                    <p>A manutenção deve ser feita em um período de 30 a 60 dias, a depender do desenvolvimento do seu própio cabelo e os cuidados.</p>
                    <i className='fas fa-circle-check'></i>
                </div>
            </div>
            <div className='fourth_container'>
                <div className='container_box'>
                    <div className='item_box' style={{ width: 475, height: 519 }}>
                        <ImageSlider
                            image1={before}
                            image2={after}
                            sliderWidth={1}
                            sliderColor="#e4c653"
                            handleColor="#fff"
                            handleBackgroundColor="#e4c653"
                        />
                    </div>
                    <div className='item_box' style={{ width: 475, height: 519 }}>
                        <ImageSlider
                            image1={randompht2}
                            image2={randompht}
                            sliderWidth={1}
                            sliderColor="#e4c653"
                            handleColor="#fff"
                            handleBackgroundColor="#e4c653"
                        />
                    </div>
                    <div className='item_box' style={{ width: 475, height: 519 }}>
                        <ImageSlider
                            image1={randomphoto2}
                            image2={randomphoto}
                            sliderWidth={1}
                            sliderColor="#e4c653"
                            handleColor="#fff"
                            handleBackgroundColor="#e4c653"
                        />
                    </div>
                </div>
                <div className='buttoninvisible'>
                    <Link to='/Invisible'>
                        <button onClick={() => { window.scrollTo({ top: 0, }); }}>Alongamentos</button>
                    </Link>
                </div>
                <div className='logos_container'>
                    <img src={logo3} alt='logo3' />
                    <div></div>
                    <img src={mdlogo} alt='mdlogo' />
                </div>
            </div>
            <div className='fifth_container'>
                <div className='title_fifthcontainer'>
                    <h1>Aqui você encontra os melhores<br /> produtos e serviços</h1>
                    <p>O Meu Salão foi criado para proporcionar uma experiência única e inesquecível de relaxamento, saúde e bem-estar. São serviços, ambientes e atendimento de altíssimo padrão, para contribuir com sua qualidade de vida e proporcionar maior equilíbrio entre corpo e mente.
                        O meu Salão foi criado para proporcionar uma experiência única e inesquecível de relaxamento, saúde e bem-estar. São serviços, ambientes e atendimento de altíssimo padrão, para contribuir com sua qualidade de vida e proporcionar maior equilíbrio entre corpo e mente.
                    </p>
                    <Link to='/Products'>
                        <button onClick={() => { window.scrollTo({ top: 0, }); }}>Produtos</button>
                    </Link>
                </div>
                <div className='container_imgft' data-aos="zoom-out-up">
                    <img src={photofunc} alt='photofunc' />
                </div>
            </div>
            <div className='home_signature_container'>
                <div className='signature_content_container'>
                    <h1>Conheça os nossos planos e benefícios para o seu bem-estar !</h1>
                </div>
            </div>
            <div className='container_benefits'>
                <div className='benefits_content'>
                    <input type="radio" name="bcc" id="bcc1" />
                    <label for="bcc1">
                        <div>
                            <img src={Oslogo} alt='logosign' />
                        </div>
                        <h1>CLUBE DE VANTAGENS O meu Salão</h1>
                    </label>
                    <div className='signature_content'>
                        <h3>- Agendamento Ilimitado</h3>
                        <h3>- Procedimentos Ilimitados</h3>
                        <h3>- 10%off em qualquer serviço</h3>
                    </div>
                </div>
                <div className='benefits_content'>
                    <input type="radio" name="bcc" id="bcc2" />
                    <label for="bcc2">
                        <div>
                            <img src={Oslogo} alt='logosign' />
                        </div>
                        <h1>O meu Salão for men signature</h1>
                    </label>
                    <div className='signature_content'>
                        <h3>- Corte Ilimitado</h3>
                        <h3>- Barba Ilimitada</h3>
                        <h3>- Acesso ao clube de vantagens</h3>
                    </div>
                </div>

            </div>

            <div className='sixth_container'>
                <div className='sixth_text'>
                    <h1>Agende um procedimento e prepare-se para viver uma experiência inesquecível</h1>
                    <p>Experimente uma nova forma de cuidar de si: cada detalhe foi pensado em você. Estamos ansiosos para recebê-lo(a).</p>
                </div>
            </div>
            <div className='carousel_block'>
                <button onClick={handleLeftClick}>
                    <img src={arrow} alt='scroll left' />
                </button>
                <div className="carousel" ref={carousel}>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_one} alt='pht_one' />
                        </div>
                        <div className='text_item'>
                            <h1>Sobrancelha</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_two} alt='pht_two' />
                        </div>
                        <div className='text_item'>
                            <h1>Micropigmentação Labial</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_third} alt='pht_third' />
                        </div>
                        <div className='text_item'>
                            <h1>Esmalteria</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_fourth} alt='pht_fourth' />
                        </div>
                        <div className='text_item'>
                            <h1>Limpeza de Pele</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_fifth} alt='pht_fifth' />
                        </div>
                        <div className='text_item'>
                            <h1>Baby liss</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_sixth} alt='pht_sixth' />
                        </div>
                        <div className='text_item'>
                            <h1>Escova</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_seventh} alt='pht_seventh' />
                        </div>
                        <div className='text_item'>
                            <h1>Massagem</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_eighth} alt='pht_eighth' />
                        </div>
                        <div className='text_item'>
                            <h1>Reflexologia</h1>
                        </div>
                    </div>
                    <div className='item_carousel'>
                        <div className='img_item'>
                            <img src={pht_ninth} alt='pht_ninth' />
                        </div>
                        <div className='text_item'>
                            <h1>Cílios</h1>
                        </div>
                    </div>
                </div>
                <button onClick={handleRightClick}>
                    <img src={arrow} alt='scroll right' />
                </button>
            </div>
            <div className='buttonservice'>
                <Link to='/Services'>
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Ver Serviços</button>
                </Link>
            </div>
            <div>
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
        </div>

    );
}
export default Home;