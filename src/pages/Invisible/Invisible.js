import ImageSlider from 'react-image-comparison-slider'
import before from '../../assets/img/before.png'
import after from '../../assets/img/after.png'
import randompht from '../../assets/img/randompht.png'
import randompht2 from '../../assets/img/randompht2.png'
import randomphoto from '../../assets/img/randomphoto.png'
import randomphoto2 from '../../assets/img/randomphoto2.png'
import cacheado from '../../assets/img/cacheado.png'
import invisibleslimlogo from '../../assets/img/invisibleslimlogo.svg'
import invisibleslimlogobackground from '../../assets/img/invisibleslimlogobackground.svg'
import dreams from '../../assets/img/dreams.png'
import dreamsresult from '../../assets/img/dreamsresult.png'
import './styles.css'
import layer from '../../assets/img/layer.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Oslogo from '../../assets/img/logo.svg'
import instagram_icon from '../../assets/img/instagram_icon.svg'
import wpp_icon from '../../assets/img/wpp_icon.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Invisible() {

    useEffect(() => {
        Aos.init({duration: 3000});
    },[])

    return (
        <div>
            <div className='title_stretches'>
                <h1>Conheça os métodos mais seguros e éficazes do mercado!</h1>
            </div>
            <div className="firstcontainer_is">
                <div className='firstblock_is'>
                    <img src={layer} alt='layer' data-aos="fade-right"/>
                    <div className='text_containeris'>
                        <h1>O método Invisible Slim é tudo o que você precisa!</h1>
                        <p>O megahair pode ser colocado em qualquer tipo de cabelo e em qualquer mulher que queira ficar ainda mais bela e melhorar sua autoestima. A única restrição que existe é quanto ao tamanho do cabelo, que precisa ter mais de 2 dedos de comprimento para permitir a sustentação da fita!</p>
                        <p>Quanto ao tempo entre as manutenções, vai depender muito do crescimento do cabelo, dos cuidados e até mesmo do clima. Em média, faz-se a manutenção entre 45 a 60 dias. Apenas alertamos para não deixar passar dos 60 dias, assim seu mega continuará impecável!</p>
                        <p>Na manutenção, as faixas são cuidadosamente retiradas, sem provocar danos ou perda de cabelos e, após lavagem para eliminação de resíduos, são recolocadas.</p>
                    </div>
                </div>
            </div>
            <div className='secondcontainer_is'>
                <div className='block_title'>
                    <h1>Perguntas Frequentes:</h1>
                </div>
                <div className='box_questions'>
                    <div className='questions'>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc1" />
                            <label for="acc1">
                                <h2>1</h2>
                                <h3>Posso prender meu cabelo com o Invisible Slim?</h3>
                            </label>
                            <div className='content'>
                                <p>Sim! Independente se você está pensando em um simples rabo de cavalo para o dia a dia, uma trança ou até mesmo um penteado para festa, o megahair não te restringe em nada! Com a nossa técnica da fita invisível, ele fica imperceptível!</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc2" />
                            <label for="acc2">
                                <h2>2</h2>
                                <h3>Quando meu cabelo estiver molhado, o Invisible Slim ficará visível?</h3>
                            </label>
                            <div className='content'>
                                <p>Não! Pode ficar tranquila que ninguém vai conseguir perceber o megahair. A fita fica invisível e, mesmo com o cabelo molhado, o aspecto é super natural! Até difícil de acreditar, né?! Corre lá no nosso Instagram e veja em nossos stories!</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc3" />
                            <label for="acc3">
                                <h2>3</h2>
                                <h3>Posso secar meu cabelo ?</h3>
                            </label>
                            <div className='content'>
                                <p>Pode secar o cabelo sim! O megahair fica bem aderido ao couro cabeludo e não será prejudicado. Só tome o cuidado de não usar o secador na temperatura muito quente próximo à raiz dos fios e da base do mega, porque isso prejudicaria qualquer couro cabeludo!</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc4" />
                            <label for="acc4">
                                <h2>4</h2>
                                <h3>Qualquer mulher pode colocar o Invisible Slim?</h3>
                            </label>
                            <div className='content'>
                                <p>O Invisible Slim pode ser colocado em qualquer tipo de cabelo e em qualquer mulher que queira ficar ainda mais bela e melhorar sua autoestima. A única restrição que existe é quanto ao tamanho do cabelo, que precisa ter mais de 2 dedos de comprimento para permitir a sustentação da fita!</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc5" />
                            <label for="acc5">
                                <h2>5</h2>
                                <h3>Como funciona a manutenção do Invisible Slim?</h3>
                            </label>
                            <div className='content'>
                                <p>Na manutenção, as faixas são cuidadosamente retiradas, sem provocar danos ou perda de cabelos e, após a lavagem para eliminação de resíduos, são recolocadas. O processo é rápido, totalmente indolor e muito seguro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='logoinvisibleslim'>
                <img src={invisibleslimlogo} alt='invisibleslimlogo' />
            </div>
            <div className='third_containeris'>
                <div className='title_thirdcontainer'>
                    <h1>Condições especiais e os melhores resultados você encontra aqui!</h1>
                </div>
            </div>
            <div className='container_box'>
                <div className='item_box' style={{ width: 475, height: 519 }}>
                    <ImageSlider
                        image1={before}
                        image2={after}
                        sliderWidth={1}
                        sliderColor="#fff"
                        handleColor="#e4c653"
                        handleBackgroundColor="white"
                    />
                </div>
                <div className='item_box' style={{ width: 475, height: 519 }}>
                    <ImageSlider
                        image1={randompht2}
                        image2={randompht}
                        sliderWidth={1}
                        sliderColor="#fff"
                        handleColor="#e4c653"
                        handleBackgroundColor="white"
                    />
                </div>
                <div className='item_box' style={{ width: 475, height: 519 }}>
                    <ImageSlider
                        image1={randomphoto2}
                        image2={randomphoto}
                        sliderWidth={1}
                        sliderColor="#fff"
                        handleColor="#e4c653"
                        handleBackgroundColor="white"
                    />
                </div>
            </div>
            <div className='buttonscheduling'>
                <Link to='/Contact'>
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Agendar Avaliação</button>
                </Link>
            </div>
            <div className='footeris'>
                <h1>As cacheadas também podem!</h1>
            </div>
            <div className='curly_container'>
                <div className='block_curly'>
                    <h1>O método Invisible Slim permite o uso de cachos devido a sua técnica de aplicação. </h1>
                    <p>Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade </p>
                    <img src={invisibleslimlogobackground} alt='invisibleslimlogobackground' />
                </div>
                <div className='curlyimg'>
                    <img src={cacheado} alt='cacheado' data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
                </div>
            </div>
            <div className='titledreams_container'>
                <h1>- Dreams -</h1>
            </div>
            <div className='dreams_container'>
                <img src={dreams} alt='dreams' data-aos="zoom-in"/>
                <div className='block_dreams'>
                    <h1>Conheça o Dreams uma técnica inovadora de alongamento invisível assim como o Invisible Slim.</h1>
                    <p>A técnica consiste em um alongamento com uma quantidade pequena de cabelo, possibilitando então a colocação de mechas no cabelo sem a necessidade de química. Um alongamento totalmente indolor e imperceptível, metodo inivisivel com cobertura de cabelos totalmente imperceptivel e natural.</p>
                    <p>Não possui ponto de tração sendo assim não danifica o cabelo pode ser utilizado para finalidades diferentes sendo elas alongar ou preencher material testado e aprovado por dermatologistas. Clientes que possuem alopecia adrogenica, corte químico pós covid com perca assentuada de cabelo na regiao frontal ou até mesmo para acabamentos</p>
                </div>
            </div>
            <div className='dreams_result'>
                <div className='dreamsresult_block'>
                    <h1>Resultados incríveis e surpreendentes para todos os tipos de cabelo.</h1>
                    <p>A técnica consiste em um alongamento com uma quantidade pequena de cabelo, possibilitando então a colocação de mechas no cabelo sem a necessidade de química. Um alongamento totalmente indolor e imperceptível, metodo inivisivel com cobertura de cabelos totalmente imperceptivel e natural. Não possui ponto de tração sendo assim não danifica o cabelo pode ser utilizado para finalidades diferentes sendo elas alongar ou preencher material testado e aprovado por dermatologistas. Clientes que possuem alopecia adrogenica, corte químico pós covid com perca assentuada de cabelo na regiao frontal ou até mesmo para acabamentos</p>
                </div>
                <img src={dreamsresult} alt='dreamsresult' data-aos="zoom-in"/>
            </div>
            <div className='buttonscheduling'>
                <Link to='/Contact'>
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Agendar Avaliação</button>
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
export default Invisible;