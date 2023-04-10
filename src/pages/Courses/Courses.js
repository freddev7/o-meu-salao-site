import mcinvisible from '../../assets/img/mcinvisible.svg'
import mcinvisiblew from '../../assets/img/mcinvisiblew.svg'
import photocourse from '../../assets/img/photocourse.png'
import videocourse from '../../assets/img/videocourse.mp4'
import videocoursemodel from '../../assets/img/videocoursemodel.mp4'
import videocoursemodel2 from '../../assets/img/videocoursemodel2.mp4'
import class01 from '../../assets/img/class01.jpg'
import class02 from '../../assets/img/class02.png'
import class03 from '../../assets/img/class03.png'
import class04 from '../../assets/img/class04.png'
import courseend from '../../assets/img/courseend.jpeg'
import Oslogo from '../../assets/img/logo.svg'
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
                <img src={mcinvisible} alt='mcinvisible' />
                <h2>Descubra as técnicas para você lucrar trabalhando com o novo método Invisible.</h2>
            </div>
            <div className='block_course'>
                <h2>Não existe nenhuma outra carreira na área da beleza que te proporcione ter um lucro entre mil reais a três mil reais entre 10 minutos à 1 hora de trabalho, como o Mega Hair te proporciona.</h2>
                <img src={photocourse} alt='photocourse' />
                <div className='block_course_text'>
                    <h3>O MASTER CLASS INVISIBLE CAPACITA O PROFISSIONAL EXECUTAR A MELHOR TÉCNICA DE ALONGAMENTO DO MERCADO.</h3>
                    <p>O mercado de beleza e estética está em constante evolução, e um dos segmentos que mais tem crescido é o de alongamento capilar. Porém, nem sempre é fácil encontrar profissionais qualificados que realizem esse serviço com excelência. O curso Invisible tem como objetivo ensinar a técnica mais avançada de alongamento capilar atualmente, que proporcionam um resultado mais natural e duradouro. Além disso, o curso aborda temas importantes como higiene e segurança no trabalho, escolha dos materiais adequados e cuidados pós-procedimento.</p>
                    <i className='fas fa-award'></i>
                </div>
            </div>
            <div className='prodcourse_container'>
                <div className='block_prod'>
                    <div className='block_prod_text'>
                        <h2>Aprenda a forma certa, na prática, o método mais seguro e eficaz de alongamento.</h2>
                        <p>Nesse curso, você irá aprender desde as técnicas mais básicas até as mais avançadas, passando pelos diferentes tipos de cabelo e texturas. O curso também irá abordar as precauções necessárias para realizar o alongamento capilar com segurança, como cuidados com o couro cabeludo e a manutenção adequada do cabelo. Além disso, você terá a oportunidade de aprender a escolher os melhores materiais e equipamentos para cada método de alongamento capilar. Mesmo que você já tenha experiência com cabelos ou trabalhe com outra área e irá começar agora nesta carreira. Tem lugar para você! Mas é o Mega Hair de excelência, com a técnica e o método certo. Vou te ensinar o ÚNICO MÉTODO aprovado por dermatologistas e tricologistas o Invisible. E mais: esse novo mercado de excelência em mega hair está nascendo agora e o mundo todo precisa de profissionais qualificados.</p>
                        <a href="https://wa.me/5531991021509?text=Ol%C3%A1%2C+venho+do+Site+O+Meu+Salao+Buritis" target="_blank" rel="noopener noreferrer">
                            <button onClick={() => { window.scrollTo({ top: 0, }); }}>INSCREVA-SE</button>
                        </a>
                    </div>
                    <video src={videocourse} alt='videocourse' autoPlay muted loop />
                </div>
            </div>
            <div className='prodcourse_containertwo'>
                <div className='title_prodcourse_containertwo'>
                    <h2>Vários métodos no mercado  mas o ÚNICO MÉTODO aprovado por dermatologistas e tricologistas o Invisible. E mais: tenha total diferencial no mercado garantindo seu ganho financeiro..</h2>
                </div>
                <div className='video_block'>
                    <video src={videocoursemodel} alt='videocoursemodel' autoPlay muted loop />
                    <div className='video_block_text'>
                        <i className='fas fa-graduation-cap'></i>
                        <img src={mcinvisiblew} alt='mcinvisiblew' />
                        <i className='fas fa-vote-yea'></i>
                        <h3>Garanta sua vaga e tenha lucros de 1 mil reais em apenas 30 minutos de trabalho com o método Invisible.</h3>
                    </div>
                    <video src={videocoursemodel2} alt='videocoursemodel2' autoPlay muted loop />
                </div>
            </div>
            <div className='prodcourse_containerthree'>
                <div className='title_prodcourse_containerthree'>
                    <h2>Garanta o seu certificado e comece a transformar vidas através dos cabelos.</h2>
                </div>
                <div className='block_images'>
                    <img src={class01} alt='class01' />
                    <img src={class02} alt='class02' />
                    <img src={class03} alt='class03' />
                    <img src={class04} alt='class04' />
                </div>
                <div className='subtitle_prodcourse_containerthree'>
                    <h2>Conteúdo do curso</h2>
                    <h3>Todo o conteúdo que você irá aprender durante o curso para você se tornar um expert</h3>
                </div>
                <div className='items_course_box'>
                    <div className='items_course_boxone'>
                        <div className='items_course'>
                            <h2>CONHEÇA O MÉTODO INVISIBLE</h2>
                            <p>Você irá conhecer como o método foi desenvolvido, os seus principais<br /> benefícios, as diferenças com outros métodos e a nossa garantia exclusiva:</p>
                            <ul>
                                <li>- Todos os benefícios do metódo</li>
                                <li>- Como se apresentar corretamente</li>
                                <li>- Como foi criado o método</li>
                            </ul>
                        </div>
                        <div className='items_course'>
                            <h2>COMO FAZER UMA AVALIAÇÃO</h2>
                            <p>O primeiro passo para começar um atendimento é a avaliação. Por isso, irei te mostrar:</p>
                            <ul>
                                <li>- Como fazer a análise</li>
                                <li>- Como escolher e a quantidade ideal do cabelo</li>
                                <li>- A manutenção necessária</li>
                                <li>- Como fazer a precificação</li>
                                <li>- Como fazer o pós-venda</li>
                                <li>- Quais os benefícios do Invisible</li>
                                <li>- As nacionalidades dos cabelos.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='items_course_boxtwo'>
                        <div className='items_course'>
                            <h2>COMO FAZER A APLICAÇÃO</h2>
                            <p>Depois de realizar a avaliação, chegou a hora de fazermos a aplicação,<br /> por isso, você irá aprender:</p>
                            <ul>
                                <li>- Como fazer a preparação do cabelo</li>
                                <li>- A montagem da mecha para aplicação na fita</li>
                                <li>- Como colocar as fitas</li>
                                <li>- Como realizar a finalização do cabelo</li>
                            </ul>
                        </div>
                        <div className='items_course'>
                            <h2>COMO FAZER A MANUTENÇÃO</h2>
                            <p>E por último, mas não menos importante, chegou a hora da manutenção, onde você irá aprender:</p>
                            <ul>
                                <li>- Como fazer a remoção corretamente</li>
                                <li>- Como fazer a preparação do cabelo</li>
                                <li>- Como colocar o método corretamente</li>
                                <li>- Como fazer a finalização do cabelo</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a href="https://wa.me/5531991021509?text=Ol%C3%A1%2C+venho+do+Site+O+Meu+Salao+Buritis" target="_blank" rel="noopener noreferrer">
                    <button onClick={() => { window.scrollTo({ top: 0, }); }}>FAÇA JÁ SUA INSCRIÇÃO</button>
                </a>
            </div>
            <div className='course_container_end'>
                <div className='block_prod_end'>
                    <img src={courseend} alt='courseend' />
                    <div className='block_prod_endtext'>
                        <h2>MasterClass Invisible: Conquiste sua liberdade financeira com o método de mega hair adesivado da especialista Camila Rodrigues.</h2>
                        <p>É mãe da pequena Maria Lucia, empresária e especialista em mega hair com mais de 20 anos de carreira. Criadora do único método de alongamento adesivado aprovado por dermatologistas e tricologistas o Invisible, técnica exclusiva e que possibilita suas alunas faturarem mais de 1 mil reais em apenas 30 minutos, por aplicação, sem precisar fazer investimentos altos em cabelos ou estrutura física. Na MasterClass Invisible, Camila Rodrigues vai pegar na sua mão e te mostrar o plano prático para conquistar a sua liberdade financeira através do Mega Hair, se tornando uma profissional de referência na sua região.</p>
                    </div>
                </div>
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