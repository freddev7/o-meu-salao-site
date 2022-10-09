import './styles.css'
import product from '../../assets/img/product.png'
import product2 from '../../assets/img/product2.png'
import product3 from '../../assets/img/product3.png'
import product4 from '../../assets/img/product4.png'
import product5 from '../../assets/img/product5.png'
import mdlogogold from '../../assets/img/mydream_logogold.svg'
import mydreamformenlogo from '../../assets/img/mydreamformenlogo.svg'

function Products() {
    return (
        <div>
            <div className='firstcontainer_products'>
                <div className='title_container_products'>
                    <h1>Com a linha certa de produtos você pode mais!</h1>
                    <p>Conheça a My Dream uma linha de produtos desenvolvida pensando na maior durabilidade dos resultados adquiridos na realização de todos e qualquer procedimento.</p>
                </div>
            </div>
            <div className='logo_container_products'>
                <img src={mdlogogold} alt='mdlogogold' />
            </div>
            <div className='productlayout'>
                <div className='text_blockproducts'>
                    <h1>Linha Dream Gloss</h1>
                    <p>Enriquecido com Ácido Hialurônico,Silsoft Ax e Lumini System. Previnem o frizz Doa brilho tridimensional, Maleabilidade superior,Cabelos mais leves e suaves.</p>
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
                    <p>Enriquecido com Ácido Hialurônico,Silsoft Ax e Lumini System. Previnem o frizz Doa brilho tridimensional, Maleabilidade superior,Cabelos mais leves e suaves.</p>
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
                    <p>Enriquecido com Ácido Hialurônico,Silsoft Ax e Lumini System. Previnem o frizz Doa brilho tridimensional, Maleabilidade superior,Cabelos mais leves e suaves.</p>
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
                    <h1>Máscara Invisible Slim</h1>
                    <p>Enriquecido com Ácido Hialurônico,Silsoft Ax e Lumini System. Previnem o frizz Doa brilho tridimensional, Maleabilidade superior,Cabelos mais leves e suaves.</p>
                    <div className='button_product_fifth'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/linha-blond' target="_blank" rel="noopener noreferrer">
                            <button>Máscara Invisible Slim</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='productlayout'>
                <div className='text_blockproducts'>
                    <h1>Linha Dream Gloss</h1>
                    <p>Enriquecido com Ácido Hialurônico,Silsoft Ax e Lumini System. Previnem o frizz Doa brilho tridimensional, Maleabilidade superior,Cabelos mais leves e suaves.</p>
                </div>
                <div className='product_img'>
                    <img src={product} alt='product' />
                </div>
            </div>
            <div className='logo_container_productsformen'>
                <img src={mydreamformenlogo} alt='mydreamformenlogo' />
            </div>
            <div className='productlayout_fourth'>
                <div className='product4_img'>
                    <img src={product4} alt='product4' />
                </div>
                <div className='text_blockproducts_fourth'>
                    <h1>Linha Pós-Química</h1>
                    <p>Enriquecido com Ácido Hialurônico,Silsoft Ax e Lumini System. Previnem o frizz Doa brilho tridimensional, Maleabilidade superior,Cabelos mais leves e suaves.</p>
                    <div className='button_product_fourth'>
                        <a href='https://www.mydreamcosmetic.com.br/linhas/pos-quimica' target="_blank" rel="noopener noreferrer">
                            <button>Pós-Química</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Products;