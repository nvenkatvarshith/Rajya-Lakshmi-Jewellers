import './../styles/HomeProduct.css'
import FavoriteCollection from './FavoriteCollection';
import BannerSlider from './BannerSlider';
import { Link } from 'react-router-dom';
import SingleCollection from './SingleCollection';

function HomeProduct(){
    interface Product {
        id: string;
        name: string;
        category: string;
        details: string;
        price: string;
        currency: string;
        img: string;
    }

    const rljProducts: Product[] = [
    {
        id: "1",
        name: "CLASH DE CARTIER RING, SMALL MODEL",
        category: "Ring",
        details: "Rose gold",
        price: "242,000",
        currency: "INR",
        img:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw011ac7f0/images/large/ff2c5b2c364e51178613283712af09be.png?sw=350&sh=350&sm=fit&sfrm=png"
    },
    {
        id: "2",
        name: "JUSTE UN CLOU PENDANT, DIAMONDS",
        category: "Necklace",
        details: "Rose gold, diamonds",
        price: "418,000",
        currency: "INR",
        img:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw9463abc0/images/large/645430fc7e7a5ffd849820580a8da3ee.png?sw=350&sh=350&sm=fit&sfrm=png"
    },
    {
        id: "3",
        name: "SANTOS DE CARTIER WATCH",
        category: "Watch",
        details: "Small model, quartz movement, yellow gold, interchangeable metal and leather straps",
        price: "3,300,000",
        currency: "INR",
        img: "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwd2218d3d/images/large/458b3cba9a7c54fd95d019223bf4df82.png?sw=350&sh=350&sm=fit&sfrm=png"
    },
    {
        id: "4",
        name: "TANK LOUIS CARTIER WATCH",
        category: "Watch",
        details: "Large model, automatic movement, yellow gold",
        price: "1,600,000",
        currency: "INR",
        img:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0d29bfe5/images/large/a20353ecce4a5bd8a9e1411266a211dd.png?sw=350&sh=350&sm=fit&sfrm=png"
    }
    ];

    const cardCSSUpdate = (id:string) => {
        document.getElementById(id)?.classList.remove('border-0');
        document.getElementById("discover-"+id)?.classList.remove('invisible');
    };
    
    const cardCSSBtnRemove = (id:string) => {
        document.getElementById(id)?.classList.add('border-0');
        document.getElementById("discover-"+id)?.classList.add('invisible');
    };
    
    return (
        <div>
            <BannerSlider />
            <div className="row justify-content-center mt-4 me-0">
                {rljProducts.map((product)=>{
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-12 card border-0 p-2" id={product.id} onMouseOver={() => cardCSSUpdate(product.id)} onMouseOut={() => cardCSSBtnRemove(product.id)} style={{width: '21.5rem'}}>
                            <div className='overflow-hidden'>
                                <img src={product.img} className="card-img-top" alt="Ring"/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase">{product.name}</h5>
                                <p className="card-text">{product.details}</p>
                                <p className="card-text">{`${product.currency} ${product.price} `}</p>
                                <Link className='text-decoration-none text-light' to='/product-description'><button className='btn btn-dark rounded-0 w-100 text-uppercase invisible discover' id={`discover-${product.id}`}>discover</button></Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            <FavoriteCollection/>
            <SingleCollection />
        </div>
    );
}

export default HomeProduct;