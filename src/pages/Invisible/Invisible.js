import ImageSlider from 'react-image-comparison-slider'
import beforeonepi from '../../assets/img/beforeonepi.jpg'
import afteronepi from '../../assets/img/afteronepi.jpg'
import beforetwopi from '../../assets/img/beforetwopi.jpg'
import aftertwopi from '../../assets/img/aftertwopi.jpg'
import beforethreepi from '../../assets/img/beforethreepi.jpg'
import afterthreepi from '../../assets/img/afterthreepi.jpg'
import cacheado from '../../assets/img/cacheado.png'
import invisibleslimlogo from '../../assets/img/invisibleslimlogo.svg'
import dreamsresult from '../../assets/img/dreamsresult.jpg'
import './styles.css'
import layer from '../../assets/img/layer.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import slide from '../../assets/img/slide.svg'
import logodf from '../../assets/img/logodf.svg'
import hairtwologo from '../../assets/img/hairtwologo.svg'
import hairtwophoto from '../../assets/img/hairtwophoto.png'

function Invisible() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div className='rootInvisible'>
            <div className='title_stretches'>
                <h1>Conheça o método de alongamento mais seguro e eficaz do mercado!</h1>
            </div>
            <div className='text_containeris'>
                <img src={layer} alt='layer' data-aos="fade-right" />
                <div className='text_blockis'>
                    <h1>O <span class="word">Invisible</span> é tudo que você precisa.</h1>
                    <h3><span className='word'>Totalmente indolor e imperceptível.</span></h3>
                    <h2>Único método testado e aprovado por dermatologistas e tricologistas.</h2>
                    <p>Descubra a transformação que o <strong>INVISIBLE</strong> pode trazer para a sua beleza e confiança! <strong>Este método revolucionário é a escolha perfeita para mulheres que desejam um cabelo deslumbrante e volumoso.</strong></p>
                    <p>Independentemente do tipo de cabelo que você tem, <strong>o INVISIBLE é uma solução versátil e adaptável. Seus cabelos precisam ter apenas 2 dedos de comprimento</strong> para suportar a fita e garantir um visual impecável.</p>
                </div>
            </div>
            <div className='secondcontainer_is'>
                <img src={invisibleslimlogo} alt='invisibleslimlogo' />
                <div className='block_title'>
                    <h1>Perguntas Frequentes:</h1>
                </div>
                <div className='box_questions'>
                    <div className='questions'>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc1" />
                            <label for="acc1">
                                <h2>1</h2>
                                <h3>Pode prender o <strong>INVISIBLE</strong>?</h3>
                            </label>
                            <div className='content'>
                                <p>Sim! O Invisible não restringe em nada quanto a maleabiliade do cabelo, adaptável ao movimento dos fios, seja para um simples coque ou até mesmo penteados de festa, sem precisar se preocupar com a aparência do mega-hair.</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc2" />
                            <label for="acc2">
                                <h2>2</h2>
                                <h3>O <strong>INVISIBLE</strong> ficará visível quando estiver molhado?</h3>
                            </label>
                            <div className='content'>
                                <p>Não! Totalmente imperceptível, o método Invisible inclusive molhado não altera o aspecto natural do cabelo, devido a utilização de técnicas apropriadas na aplicação.</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc3" />
                            <label for="acc3">
                                <h2>3</h2>
                                <h3>Pode secar o <strong>INVISIBLE</strong>?</h3>
                            </label>
                            <div className='content'>
                                <p>Pode sim! O Invisible após fixado ao couro cabeludo não haverá problemas, apenas observar a temperatura e proximidade do secador á raíz dos fios com a base do mega-hair.</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc4" />
                            <label for="acc4">
                                <h2>4</h2>
                                <h3>O <strong>INVISIBLE</strong> pode ser colocado em qualquer mulher?</h3>
                            </label>
                            <div className='content'>
                                <p>O invisible pode sim ser aplicado em diferentes tipos de cabelo, a mulher que deseja ter um cabelo longo, volumoso e aumentar a auto-estima. É necessário somente o cabelo ter mais de 2 dedos de comprimento.</p>
                            </div>
                        </div>
                        <div className='item_questions'>
                            <input type="radio" name="acc" id="acc5" />
                            <label for="acc5">
                                <h2>5</h2>
                                <h3>Como funciona a manuntenção do <strong>INVISIBLE</strong>?</h3>
                            </label>
                            <div className='content'>
                                <p>Na manutenção é feita delicadamente a retirada do Invisible para evitar danos ao couro cabeludo, higienizando o local de aplicação, após a lavagem recolocamos de forma rápida, completamente indolor e seguro.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='third_containeris'>
                <h1>Condições especiais e os melhores resultados você encontra aqui!</h1>
            </div>
            <div className='acessibility_container'>
                <h3>Pressione ao centro das fotos e arraste<br /> para o lado para ver os resultados.</h3>
                <img src={slide} alt='slide' />
            </div>
            <div className='container_box'>
                <div className='item_box' style={{ width: 475, height: 519 }}>
                    <ImageSlider
                        image1={afterthreepi}
                        image2={beforethreepi}
                        sliderWidth={1}
                        sliderColor="#fff"
                        handleColor="#d19e78"
                        handleBackgroundColor="white"
                        leftLabelText="ANTES"
                        rightLabelText="DEPOIS"
                    />
                </div>
                <div className='item_box' style={{ width: 475, height: 519 }}>
                    <ImageSlider
                        image1={aftertwopi}
                        image2={beforetwopi}
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
                        image1={afteronepi}
                        image2={beforeonepi}
                        sliderWidth={1}
                        sliderColor="#fff"
                        handleColor="#d19e78"
                        handleBackgroundColor="white"
                        leftLabelText="ANTES"
                        rightLabelText="DEPOIS"
                    />
                </div>
            </div>
            <div className='curly_title_container'>
                <div className='buttonschedulingtwo'>
                <a href="https://wa.me/5531991021509?text=Ol%C3%A1+venho+do+site+e+desejo+atendimento+para+o+Invisible%2C+pode+me+ajudar%3F" target="_blank" rel="noopener noreferrer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    Agendar Avaliação
                </a>
                </div>
            </div>
            <div className='curly_container'>
                <img src={cacheado} alt='layer' data-aos="fade-right" />
                <div className='block_curly'>
                    <h1>AS CACHEADAS TAMBÉM PODEM!</h1>
                    <h2>O <span class="word">Invisible</span> permite o uso de cachos devido a sua técnica de aplicação.</h2>
                    <p>Descubra o segredo para deslumbrar com cabelos cacheados perfeitos com o Invisible! Se você está procurando um método que se encaixe perfeitamente com seus cachos, esta é a resposta para a sua busca.</p>
                    <p>Com o <span className='word'>INVISIBLE</span>, a compatibilidade é a chave. Os fios harmonizam perfeitamente com a textura do seu cabelo cacheado, evitando qualquer aspecto artificial. Afinal, o objetivo é aprimorar a beleza dos seus cachos, e não comprometê-la.</p>
                </div>
            </div>
            <div className='titledreams_container'>
                <img src={hairtwologo} alt='hairtwologo' />
                <h2>Conheça o <span className='word'>Hair 2</span> uma técnica inovadora de alongamento assim como o Invisible.</h2>
            </div>
            <div className='dreams_container'>
                <img src={hairtwophoto} alt='dreams' data-aos="fade-right" />
                <div className='block_dreams'>
                    <h1>Transforme o seu visual com o <span className='word'>Hair 2</span> e desfrute de um cabelo longo, volumoso e saúdavel.</h1>
                    <p>O <span className='word'>Hair 2</span> é a maneira mais acessível que eu Camila encontrei para realizar o sonho de muitas mulheres que querem colocar o tão sonhado INVISIBLE. O <span className='word'>HAIR 2</span> ele é um cabelo que já foi de uma cliente e agora passou a ser do salão, antes de ficar disponível ele passa por todos os cuidados necessários, e depois, SIM está apto para instalação, devolvendo a sua autoestima</p>
                    <p>O <span className='word'>HAIR 2</span> não apenas transforma cabelos, ele transforma vidas, tornando visível o poder interior que todas as mulheres possuem. Juntos, estamos construindo mais do que um visual deslumbrante, estamos construindo autoconfiança, amor-próprio e conexões profundas. No mundo do <span className='word'>HAIR 2</span>, todas podem brilhar.</p>
                </div>
            </div>
            <div className='dreams_result'>
                <div className='dreamsresult_block'>
                    <h1>Resultados incríveis e surpreendentes para todos os tipos de cabelo.</h1>
                    <p>Uma alternativa eficiente e saudável para quem deseja ter um cabelo mais longo e volumoso sem precisar recorrer a produtos químicos. Ao contrário de outras técnicas de alongamento, essa é totalmente imperceptível, o que significa que ninguém perceberá que você está usando mechas adicionais. O método é completamente seguro e não danifica o cabelo, já que não possui ponto de tração.</p>
                </div>
                <img src={dreamsresult} alt='dreamsresult' data-aos="zoom-in" />
            </div>
            <div className='buttonschedulingtwo'>
                <a href="https://wa.me/5531991021509?text=Ol%C3%A1+venho+do+site+e+desejo+atendimento+para+o+Invisible%2C+pode+me+ajudar%3F" target="_blank" rel="noopener noreferrer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    Agendar Avaliação
                </a>
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
export default Invisible;