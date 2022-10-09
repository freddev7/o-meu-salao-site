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
import instagram_icon from '../../assets/img/instagram_icon.svg'
import wpp_icon from '../../assets/img/wpp_icon.svg'
import Oslogo from '../../assets/img/logo.svg'

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
                    <h1>O meu Salão</h1>
                    <p>O meu Salão fundado em 2016 por Camila Rodrigues no bairro buritis, foi criado para proporcionar uma experiência única e inesquecível de relaxamento, saúde e bem-estar. São serviços, ambientes e atendimento de altíssimo padrão, para contribuir com sua qualidade de vida e proporcionar maior equilíbrio entre corpo e mente.</p>
                    <p>Acreditamos que a experiência O meu Salão deva ser valorizada como uma pausa na correria do dia a dia e reconhecida como um momento de prazer, auto cuidado e elevação da autoestima.</p>
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
                    <p>A Unidade Buritis é nossa primeira unidade. São 500m² dividos entre área de atendimento e estacionamento. Tudo pensado para que sua experiência aqui seja excepcional. Venha nos fazer uma visita, aproveite e dê um tapa no seu visual! </p>
                    <div className='hour_phone'>
                        <p><strong>TELEFONE</strong></p>
                        <div className='icon_phone'>
                            <div className='phone'><i className='fas fa-phone'></i></div>
                            <h1>(31) 2516.0505</h1>
                        </div>
                        <p><strong>SEGUNDA A SÁBADO</strong></p>
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
                    <h1>BETÂNIA</h1>
                    <p>A Unidade Buritis é nossa primeira unidade. São 500m² dividos entre área de atendimento e estacionamento. Tudo pensado para que sua experiência aqui seja excepcional. Venha nos fazer uma visita, aproveite e dê um tapa no seu visual! </p>
                    <div className='hour_phone'>
                        <p><strong>TELEFONE</strong></p>
                        <div className='icon_phone'>
                            <div className='phone'><i className='fas fa-phone'></i></div>
                            <h1>(31) 2516.0505</h1>
                        </div>
                        <p><strong>SEGUNDA A SÁBADO</strong></p>
                        <div className='icon_clock'>
                            <div className='clock'><i className='fas fa-clock'></i></div>
                            <h1>09H - 19H</h1>
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
                    <img src={Oslogo} alt='logosign' />
                </div>
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
export default About;