import { useEffect, useState } from 'react';
import './../styles/pages/Collection.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Collection(){
    const {category} = useParams();
    console.log(category);

    const rljProducts = [
        {
            id: "1",
            name: "CLASH DE CARTIER PENDANT, PINK CHALCEDONY",
            description: "Rose gold, pink chalcedony",
            price: 491000,
            currency: "INR",
            isNew: true,
            category: "Necklace",
            img: "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwff66a3f3/images/large/e34e6f9c872553bdaf93bf9c55ef65e0.png?sw=350&sh=350&sm=fit&sfrm=png"
        },
        {
            id: "2",
            name: "CLASH DE CARTIER EARRINGS, PINK CHALCEDONY",
            description: "Rose gold, pink chalcedony",
            price: 800000,
            currency: "INR",
            isNew: true,
            category: "Earrings",
            img:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw1969ea69/images/large/498be7f6124c56d0934862f545439fd6.png?sw=350&sh=350&sm=fit&sfrm=png"
        },
        {
            id: "3",
            name: "CLASH DE CARTIER RING, PINK CHALCEDONY",
            description: "Rose gold, pink chalcedony",
            price: 545000,
            currency: "INR",
            isNew: true,
            category: "Ring",
            img:"https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw3146d5c2/images/large/12e3d623f8955abea7676b29a1b04532.png?sw=350&sh=350&sm=fit&sfrm=png"
        },
        {
            id: "4",
            name: "CLASH DE CARTIER PENDANT, RED-DYED AGATE",
            description: "Rose gold, red-dyed agate",
            price: 491000,
            currency: "INR",
            isNew: true,
            category: "Necklace",
            img: "https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw925737c7/images/large/755f6cf88f9e54bbbd73c65d9354842a.png?sw=350&sh=350&sm=fit&sfrm=png"
        }
    ];

    interface Collection{
        img: string;
        name: string;
        description: string;
    }

    const [allCollectionInfo,setAllCollectionInfo] = useState<Collection[]>([]);
    const fetchCollectionInfo = async () => {
        try{
            const {data} = await axios.get("http://localhost:4000/rljCollections");
            setAllCollectionInfo(data);
        }catch(error){
            console.log(error);
        }
    }
    
    let collectionInfo = allCollectionInfo.find((collection:Collection) => {
            return collection.name.toLowerCase() === category?.toLowerCase();
        });

    useEffect(()=>{
        fetchCollectionInfo();
    },[]);

    const cardCSSUpdate = (id:string) => {
        document.getElementById(id)?.classList.remove('border-0');
        document.getElementById("discover-"+id)?.classList.remove('invisible');
    };
    
    const cardCSSBtnRemove = (id:string) => {
        document.getElementById(id)?.classList.add('border-0');
        document.getElementById("discover-"+id)?.classList.add('invisible');
    };

    const productHTML = () => {
        return rljProducts.map((product)=>{
                return (
                    <div className="col-lg-3 col-6 card border-0 p-2" id={product.id} onMouseOver={() => cardCSSUpdate(product.id)} onMouseOut={() => cardCSSBtnRemove(product.id)} >
                        <div className='overflow-hidden'>
                            <img src={product.img} className="card-img-top" alt="Ring"/>
                        </div>
                        <div className="card-body text-center">
                            <h6 className="card-title text-uppercase">{product.name}</h6>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text fw-semibold">{`${product.currency} ${product.price} `}</p>
                            <Link className='text-decoration-none text-light' to='/product-description'><button className='btn btn-dark rounded-0 w-100 text-uppercase invisible discover' id={`discover-${product.id}`}>discover</button></Link>
                        </div>
                    </div>
                );
            }
        )
    }

    return (
        <div className="container-fluid p-0">
            <div className="collection-description vh-100 text-center text-light d-flex justify-content-center align-items-end" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%), url('https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibraryAESA-BGTJ/default/dw6f2a7936/plp/2026/vday-2026/header-fullscreen/PLP-Fullscreen_VDAY2026_BI_jwl-must-haves-desktop-AR.jpg')`,}}>
                <div className='collection-content w-50 pb-4'>
                    <h3 className='text-uppercase py-2'>{collectionInfo?.name}</h3>
                    <p>{collectionInfo?.description}</p>
                </div>
            </div>
            
            <div className='row container-fluid mt-4'>
                <div className='col-lg-3 d-none d-md-block'>
                    <h3></h3>
                </div>
                <div className='col-lg-9'>
                    <h6 className='ms-3 fw-lighter'>{rljProducts.length} Models</h6>
                    <div className='row'>
                        {productHTML()}
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Collection;