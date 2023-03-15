import './styles.css'
import product from '../../assets/img/product.png'
import product2 from '../../assets/img/product2.png'
import product3 from '../../assets/img/product3.png'
import product4 from '../../assets/img/product4.png'
import product5 from '../../assets/img/product5.png'
import product6 from '../../assets/img/product6.png'
import product7 from '../../assets/img/product7.png'
import product8 from '../../assets/img/product8.png'
import product9 from '../../assets/img/product9.png'
import mdlogogold from '../../assets/img/mydream_logogold.svg'
import mydreamformenlogo from '../../assets/img/mydreamformenlogo.svg'
import Oslogo from '../../assets/img/logo.svg'

function Products() {
    return (
        <div>
            <div className='firstcontainer_products'>
                <div className='title_container_products'>
                    <h1>Com a linha certa de produtos você pode mais!</h1>
                    <p>A My Dream é uma marca que tem como objetivo principal entregar produtos de alta qualidade e eficácia, que atendam às necessidades e expectativas de seus clientes. Para isso, a marca investe em tecnologia avançada e em ingredientes de qualidade superior, garantindo a entrega de resultados surpreendentes.</p>
                </div>
            </div>
            <div className='logo_container_products'>
                <img src={mdlogogold} alt='mdlogogold' />
            </div>
            <div className='productlayout'>
                <div className='text_blockproducts'>
                    <h1>Linha Dream Gloss</h1>
                    <p>Baseada na combinação dos ativos nanoestruturados em laboratório, Silsoft AX e Lumini System, em combinação com Ácido Hialuronico, nossa linha Dream Gloss leva até você o melhor produto para realinhamento capilar. Após muitas pesquisas e testes realizados em laboratórios de pesquisa e desenvolvimento, chegamos a uma fórmula que entrega redução de volume e tratamento de frizz sem agredir o fio, brilho tridimensional resultante de um perfeito selamento de cutículas e condicionamento instantâneo.</p>
                    <div className='button_product'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/dream-gloss' target="_blank" rel="noopener noreferrer">
                            <button>Dream Gloss</button>
                        </a>
                    </div>
                </div>
                <div className='product_img'>
                    <img src={product} alt='product' />
                </div>
            </div>
            <div className='productlayout_second'>
                <div className='product2_img'>
                    <img src={product2} alt='product2' />
                </div>
                <div className='text_blockproducts_second'>
                    <h1>Linha Pós-Química</h1>
                    <p>Promove higienização do couro cabeludo, removendo as sujidades e o excesso de oleosidade. Rico em Nutrihair Complex, Ácido Hialurônico e Extrato de Algodão, juntos repõem nutrientes essenciais aos fios. Um tratamento de alta performance para os cabelos quimicamente tratados.</p>
                    <div className='button_product_second'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/pos-quimica' target="_blank" rel="noopener noreferrer">
                            <button>Pós-Química</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='productlayout_third'>
                <div className='text_blockproducts_third'>
                    <h1>Linha Blond</h1>
                    <p>A Linha Blond para matização da My Dream foi desenvolvido com o intuito de matizar o fio, tirar o amarelo indesejado e trazer hidratação e reestruturação de um cabelo quimicamente descolorido. Traz recuperação imediata de fios fragilizados de cabelos louros, descoloridos ou grisalhos.</p>
                    <div className='button_product_third'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/linha-blond' target="_blank" rel="noopener noreferrer">
                            <button>Blond</button>
                        </a>
                    </div>
                </div>
                <div className='product3_img'>
                    <img src={product3} alt='product' />
                </div>
            </div>
            <div className='productlayout_fifth'>
                <div className='product5_img'>
                    <img src={product5} alt='product5' />
                </div>
                <div className='text_blockproducts_fifth'>
                    <h1>Linha Invisible Slim</h1>
                    <p>A máscara Invisible Slim traz todos os benefícios contidos nos ativos presentes em nossa linha além de conter Extrato de Hortelã e Extrato de frutas vermelhas ele também traz em sua composição um dos ativos de maior valor comercial do momento, o Ácido Hialurônico, que por sua vez tem um alto poder de hidratação conseguindo reter água em até 48x o seu peso molecular, isso faz com que ele mantenha um fio com um aspecto revigorado.</p>
                    <div className='button_product_fifth'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/invisible-slim' target="_blank" rel="noopener noreferrer">
                            <button>Máscara Invisible Slim</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='productlayout_third'>
                <div className='text_blockproducts_third'>
                    <h1>OX Descolorante</h1>
                    <p>Os Descolorantes OX contam com fórmulas 100% estabilizadas, o composto de peróxido e hidrogênio tem o poder de alcançar a altura de tom desejada para uma descoloração eficiente, auxiliando a ação do pó descolorante.</p>
                    <div className='button_product_third'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/ox-descolorante' target="_blank" rel="noopener noreferrer">
                            <button>OX Descolorante</button>
                        </a>
                    </div>
                </div>
                <div className='product_img'>
                    <img src={product6} alt='product6' />
                </div>
            </div>
            <div className='productlayout_fifth'>
                <div className='product7_img'>
                    <img src={product7} alt='product7' />
                </div>
                <div className='text_blockproducts_fifth'>
                    <h1>Primer</h1>
                    <p>O Shampoo Antirresíduo Prime Precess da My Dream abre parcialmente as cutículas, preparando os fios para receberem os tratamentos. Rico em Extrato de Baobá, Extrato de Caviar e Proteína do Trigo, juntos repõem nutrientes essenciais para a restruturação dos fios.</p>
                    <div className='button_product_third'>
                        <a href='https://www.mydreamcosmetic.com.br/shampoo/shampoo-antiresiduo-prime-process-1l' target="_blank" rel="noopener noreferrer">
                            <button>Primer</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='productlayout_third'>
                <div className='text_blockproducts_third'>
                    <h1>Grow Up</h1>
                    <p>A Linha de Crescimento Capilar Grow Up da My Dream é composta por 3 passos sendo eles o shampoo para crescimento, condicionador para crescimento e tônico para crescimento. A Linha para crescimento foi desenvolvimento a partir da sinergia entre aminoácidos como cisteína e extratos de ervas.</p>
                    <div className='button_product_third'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/grow-up' target="_blank" rel="noopener noreferrer">
                            <button>Grow Up</button>
                        </a>
                    </div>
                </div>
                <div className='product6_img'>
                    <img src={product8} alt='product8' />
                </div>
            </div>
            <div className='title_sectionformen'>
                <h1>Nossa linha de produtos masculinos é a escolha certa para quem busca praticidade e eficiência!</h1>
            </div>
            <div className='logo_container_productsformen'>
                <img src={mydreamformenlogo} alt='mydreamformenlogo' />
            </div>
            <div className='productlayout_fourth'>
                <div className='product4_img'>
                    <img src={product4} alt='product4' />
                </div>
                <div className='text_blockproducts_fourth'>
                    <h1>Linha Shampoo for men</h1>
                    <p>O Shampoo For Men foi desenvolvido para reparar e tratar os cabelos danificados e coloridos, limpando delicadamente os fios enquanto protege e hidrata. Promove hidratação, recupera a maciez, força e o brilho. A formulação é livre de sal e parabenos garantem segurança e desempenho nos seus cabelos.</p>
                    <div className='button_product_fourth'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/for-men/shampoo-for-men-240ml' target="_blank" rel="noopener noreferrer">
                            <button>Shampoo for men</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='productlayout_eight'>
                <div className='text_blockproducts_eight'>
                    <h1>Pomada Modeladora</h1>
                    <p>A Pomada Modeladora Alto Brilho For Men é Indicada para cabelos secos, cacheados ou crespos, ela oferece altíssima fixação o dia todo, sem deixar resíduos após a lavagem. Valorizando muito bem os penteados que pedem um efeito molhado, a pomada promove um brilho elegante, distante daquele aspecto de óleo tão indesejado.</p>
                    <div className='button_product_fourth'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/for-men/pomada-modeladora-efeito-matte-100g' target="_blank" rel="noopener noreferrer">
                            <button>Pomada Modeladora</button>
                        </a>
                    </div>
                </div>
                <div className='product8_img'>
                    <img src={product9} alt='product9' />
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
export default Products;