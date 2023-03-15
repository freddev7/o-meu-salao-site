import mcinvisible from '../../assets/img/mcinvisible.svg'
import photocourse from '../../assets/img/photocourse.png'
import courseone from '../../assets/img/courseone.png'
import coursetwo from '../../assets/img/coursetwo.png'
import certified from '../../assets/img/certified.jpg'
import Oslogo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import './styles.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Courses() {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])

    return (
        <div>
            <div className='title_coursescontainer'>
                <h1>Confira os nossos cursos e especializações com métodos inovadores!</h1>
            </div>
            <div className='course_container'>
                <div className='block_course'>
                    <h1>O Master Class Invisible capacita o profissional executar a melhor técnica de alongamento do mercado.</h1>
                    <p>O mercado de beleza e estética está em constante evolução, e um dos segmentos que mais tem crescido é o de alongamento capilar. Porém, nem sempre é fácil encontrar profissionais qualificados que realizem esse serviço com excelência. É por isso que o curso Invisible surge como uma solução para capacitar os profissionais e oferecer aos clientes a melhor técnica de alongamento do mercado. O curso Invisible tem como objetivo ensinar a técnica mais avançada de alongamento capilar atualmente, que proporcionam um resultado mais natural e duradouro. Além disso, o curso aborda temas importantes como higiene e segurança no trabalho, escolha dos materiais adequados e cuidados pós-procedimento.</p>
                    <img src={mcinvisible} alt='mcinvisible' />
                </div>
                <div className='photocoursecont'>
                    <img src={photocourse} alt='photocourse' data-aos="zoom-in-up" />
                </div>
            </div>

            <div className='prodcourse_container'>
                <img src={courseone} alt='courseone' data-aos="fade-zoom-in" />
                <div className='block_prod'>
                    <h1>Aprenda na prática os métodos mais eficazes de alongamento</h1>
                    <p>Para aprender na prática os métodos mais eficazes de alongamento capilar, é importante escolher um curso confiável e com profissionais experientes no assunto. Nesse curso, você irá aprender desde as técnicas mais básicas até as mais avançadas, passando pelos diferentes tipos de cabelo e texturas. O curso também irá abordar as precauções necessárias para realizar o alongamento capilar com segurança, como cuidados com o couro cabeludo e a manutenção adequada do cabelo. Além disso, você terá a oportunidade de aprender a escolher os melhores materiais e equipamentos para cada método de alongamento capilar.</p>
                </div>
            </div>
            <div className='prodcourse_containertwo'>
                <div className='blocktwo_prod'>
                    <h1>Capacitação com excelência em harmonização capilar.</h1>
                    <p>Com a capacitação oferecida pelo curso Invisible, os profissionais podem se destacar no mercado de beleza e estética, oferecendo aos seus clientes um serviço diferenciado e de alta qualidade. Além disso, a técnica de alongamento Invisible é uma das mais procuradas atualmente, o que pode aumentar a demanda pelos serviços desses profissionais. Em resumo, o curso Invisible é uma excelente oportunidade para os profissionais que desejam se especializar em alongamento de unhas e cílios e oferecer aos seus clientes a melhor técnica disponível no mercado. Com uma abordagem completa e prática, o curso capacita os profissionais para realizarem o serviço de forma segura, eficiente e com resultados excepcionais.</p>
                </div>
                <img src={coursetwo} alt='coursetwo' data-aos="fade-zoom-in" />
            </div>
            <div className='prodcourse_containerthree'>
                <img src={certified} alt='courseone' data-aos="fade-zoom-out" />
                <div className='block_prod'>
                    <h1>Garanta o seu certificado e comece a transformar vidas através dos cabelos.</h1>
                    <p>Os cabelos são uma parte importante da nossa imagem, personalidade e auto-estima, por isso é comum que muitas pessoas busquem novas formas de mudar seu visual. Uma das maneiras mais populares de fazer isso é através do alongamento capilar. Ao final do curso, você estará apto a realizar o alongamento capilar com confiança e segurança, oferecendo um serviço de qualidade aos seus clientes. Invista em sua carreira e torne-se um especialista em alongamento capilar, oferecendo uma experiência única e personalizada aos seus clientes.</p>
                </div>
            </div>
            <div className='buttonscheduling'>
                <Link to='/Contact'>
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>Faça sua inscrição</button>
                </Link>
            </div>
            <div className='footer'>
                <div className='footer_icon'>
                    <a href="https://www.instagram.com/omeusalaoburitis" target="_blank" rel="noopener noreferrer">
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
                <div className='footer_logo'>
                    <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }} src={Oslogo} alt='Oslogo' />
                </div>
                <div className='footer_icon'>
                    <a href="https://wa.me/5531991021509?text=Ol%C3%A1%2C+venho+do+Site+O+Meu+Salao+Buritis" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-whatsapp'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Courses;