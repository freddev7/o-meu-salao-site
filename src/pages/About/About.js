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
import logosign from '../../assets/img/logosign.svg'
import logoomsformen from '../../assets/img/logoomsformen.svg'
import logodf from '../../assets/img/logodf.svg'

function About() {


    //var counter = 1;
    //setInterval(function () {
    // document.getElementById('radio' + counter).checked = true;
    // counter++;
    // if (counter > 6) {
    //counter = 1;
    // }
    // }, 6000);


    return (
        <div>
            <div className='first_about_container'>
                <div className='title_about_container'>
                    <h1>O Meu Salão</h1>
                    <p>Fundado em 2019 por Camila Rodrigues, profissional atuante no mercado desde 2003. Sempre buscando por inovações, tecnologias e contribuições diretas com o mercado da beleza.
                        Vinda de uma tradicional e consagrada família de cabeleireiros e artistas do meio. Sempre com muita paixão pelo aprendizado concebeu o inédito método de mega hair denominado Invisible, técnica esta que obteve destaque em premiações internacionais no ano de 2022 em países da América e Oriente Médio.
                        <p> Sempre buscando oferecer os melhores serviços de beleza e bem-estar para nossos clientes, com uma sofisticação ímpar, elegância singular
                            e muito glamour.
                            Contamos com uma equipe de profissionais altamente qualificadas, que está sempre pronta para atender às suas necessidades e desejos, proporcionando um elegante, sutil e perspicaz ambiente para que você possa relaxar e cuidar de si.
                        </p>
                    </p>
                </div>
            </div>
            <div className='second_about_container'>
                <div className='title_second_container'>
                    <h1>Conheça as nossas unidades:</h1>
                </div>
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
                <div className='slider'>
                    <div className='slides'>
                        <input type="radio" name='radio-btn' id="radio1" />
                        <input type="radio" name='radio-btn' id="radio2" />
                        <input type="radio" name='radio-btn' id='radio3' />
                        <input type="radio" name='radio-btn' id='radio4' />
                        <input type="radio" name='radio-btn' id='radio5' />
                        <input type="radio" name='radio-btn' id='radio6' />

                        <div className='slide first'>
                            <img src={slideimgone} alt='imgone' />
                        </div>
                        <div className='slide'>
                            <img src={slideimgtwo} alt='imgtwo' />
                        </div>
                        <div className='slide'>
                            <img src={slideimgthree} alt='imgthree' />
                        </div>
                        <div className='slide'>
                            <img src={slideimgfour} alt='imgfour' />
                        </div>
                        <div className='slide'>
                            <img src={slideimgfive} alt='imgfour' />
                        </div>
                        <div className='slide'>
                            <img src={slideimgsix} alt='imgfour' />
                        </div>
                    </div>

                    <div className='navigation_auto'>
                        <div className='auto_btn1'></div>
                        <div className='auto_btn2'></div>
                        <div className='auto_btn3'></div>
                        <div className='auto_btn4'></div>
                        <div className='auto_btn5'></div>
                        <div className='auto_btn6'></div>
                    </div>

                    <div className='manual_navigation'>
                        <label for="radio1" className='manual-btn' />
                        <label for="radio2" className='manual-btn' />
                        <label for="radio3" className='manual-btn' />
                        <label for="radio4" className='manual-btn' />
                        <label for="radio5" className='manual-btn' />
                        <label for="radio6" className='manual-btn' />
                    </div>
                </div>
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
                    <p>Venha nos fazer uma visita e desfrutar do conforto e qualidade que proporcionamos aos nossos clientes.</p>
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
            <div className='container_slidertwo'>
                <div className='slider'>
                    <div className='slides'>
                        <input type="radio" name='radio-btn' id="radio7" />
                        <input type="radio" name='radio-btn' id="radio8" />
                        <input type="radio" name='radio-btn' id='radio9' />
                        <input type="radio" name='radio-btn' id='radio10' />
                        <input type="radio" name='radio-btn' id='radio11' />
                        <input type="radio" name='radio-btn' id='radio12' />

                        <div className='slide first'>
                            <img src={carouselimgone} alt='carouselimgone' />
                        </div>
                        <div className='slide'>
                            <img src={carouselimgtwo} alt='carouselimgtwo' />
                        </div>
                        <div className='slide'>
                            <img src={carouselimgthree} alt='carouselimgthree' />
                        </div>
                        <div className='slide'>
                            <img src={carouselimgfour} alt='carouselimgfour' />
                        </div>
                        <div className='slide'>
                            <img src={carouselimgfive} alt='carouselimgfour' />
                        </div>
                        <div className='slide'>
                            <img src={carouselimgsix} alt='carouselimgfour' />
                        </div>
                    </div>

                    <div className='navigation_auto'>
                        <div className='auto_btn7'></div>
                        <div className='auto_btn8'></div>
                        <div className='auto_btn9'></div>
                        <div className='auto_btn10'></div>
                        <div className='auto_btn11'></div>
                        <div className='auto_btn12'></div>
                    </div>

                    <div className='manual_navigation'>
                        <label for="radio7" className='manual-btn' />
                        <label for="radio8" className='manual-btn' />
                        <label for="radio9" className='manual-btn' />
                        <label for="radio10" className='manual-btn' />
                        <label for="radio11" className='manual-btn' />
                        <label for="radio12" className='manual-btn' />
                    </div>

                </div>
                <div className='logocontainer'>
                    <img src={logoomsformen} alt='logoomsformen' />
                </div>
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
export default About;