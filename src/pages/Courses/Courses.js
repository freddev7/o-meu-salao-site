import mcinvisible from '../../assets/img/mcinvisible.svg'
import photocourse from '../../assets/img/photocourse.png'
import courseone from '../../assets/img/courseone.png'
import coursetwo from '../../assets/img/coursetwo.png'
import certified from '../../assets/img/certified.png'
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
                    <h1>O curso Invisible Slim capacita o profissional executar a melhor técnica de alongamento do mercado.</h1>
                    <p>Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade </p>
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
                    <p>Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade</p>
                </div>
            </div>
            <div className='prodcourse_containertwo'>
                <div className='blocktwo_prod'>
                    <h1>Aprenda na prática os métodos mais eficazes de alongamento do mercado.</h1>
                    <p>Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade</p>
                </div>
                <img src={coursetwo} alt='coursetwo' data-aos="fade-zoom-in" />
            </div>
            <div className='prodcourse_containerthree'>
                <img src={certified} alt='courseone' data-aos="fade-zoom-out" />
                <div className='block_prod'>
                    <h1>Garanta o seu certificado e comece a transformar vidas através dos cabelos.</h1>
                    <p>Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade, Com protocolos diferenciados, nossas equipes especialistas sempre têm para oferecer a você um tratamento especial de acordo com cada tipo de necessidade</p>
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
                    <a href="https://web.whatsapp.com/send?phone=5531992926179" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-whatsapp'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Courses;