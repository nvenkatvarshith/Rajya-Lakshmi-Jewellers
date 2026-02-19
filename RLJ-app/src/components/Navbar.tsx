import './../styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from './../assets/rlj_logo.png'
import { useState } from 'react';

function Navbar() {

    interface NavItem{
        label: string;
        url: string;
        type: string;
    }

    const navbarData = {
        logo: {
            src: logo,
            alt: "Rajya Lakshmi Silver Jewellery",
            link: "/"
        },
        menuItems: [
            { label: "NECKLACE", url: "/necklace", type: "link" },
            { label: "EARRINGS", url: "/earrings", type: "link" },
            { label: "BANGLES", url: "/bangles", type: "link" },
            { label: "PEARLS", url: "/pearls", type: "link" },
            { label: "BEADS", url: "/beads", type: "link" },
            {
                label: "MORE CATEGORIES",
                url: "#",
                type: "dropdown",
                sections: [
                    {
                        title: "Other Categories",
                        links: [
                            "Bracelets",
                            "Souffle Pearl Pendant CZ Beads",
                            "Coral Necklace",
                            "Pearl Combination",
                            "Tharmala",
                            "Back Chains",
                            "Nalla Pusalu",
                            "925 Silver"
                        ]
                    },
                    {
                        title: "925 Silver",
                        links: [
                            "Rings",
                            "Bracelets",
                            "Chain with pendant"
                        ]
                    },
                    {
                        title: "Pendants",
                        links: [
                            "Pendant+Earrings"
                        ]
                    }
                ]
            }
        ],
    };

    interface product{
        id: number;
        title: string;
        imageUrl: string;
        description: string;
    }

    interface SubCategories {
        name: string;
        isActive: boolean;
        products: product[]
    }

    const rljNavigationCatalog = [
        {
            category: "HOME",
            isActive: false,
            subCategories: []
        },
        {
            category: "NECKLACE",
            isActive: true,
            subCategories: [
            {
                name: "ALL CREATIONS",
                isActive: true,
                products: [
                {
                    id: 1,
                    title: "INDOMPTABLES BY CARTIER",
                    imageUrl: "https://www.cartier.com/on/demandware.static/-/Sites-cartier-storefront-IND/default/dw5951140f/MegaMenu/HJ_2022/07_PIECES%20DISPO%20EN%20LIGNE/HAUTE-JO_VIGNETTES_400x400_CAR_CRH6038815.png",
                    description: "A dual-head bracelet featuring a zebra and a panther."
                },
                {
                    id: 2,
                    title: "PANTHER",
                    imageUrl: "https://www.cartier.com/on/demandware.static/-/Sites-cartier-storefront-IND/default/dwd777a46b/MegaMenu/HJ_2022/07_PIECES%20DISPO%20EN%20LIGNE/La%20panthere%20animal%20emblematique.png",
                    description: "The iconic Cartier Panthère in a diamond-paved brooch or figure."
                },
                {
                    id: 3,
                    title: "FLORA AND FAUNA",
                    imageUrl: "https://www.cartier.com/on/demandware.static/-/Sites-cartier-storefront-IND/default/dwcd8bd957/MegaMenu/HJ_2022/07_PIECES%20DISPO%20EN%20LIGNE/Faune%20et%20Flore.png",
                    description: "Intricate floral designs with emeralds and rubies."
                },
                {
                    id: 4,
                    title: "ARCHITECTURE AND PURITY",
                    imageUrl: "https://www.cartier.com/on/demandware.static/-/Sites-cartier-storefront-IND/default/dwa00e581e/MegaMenu/HJ_2022/07_PIECES%20DISPO%20EN%20LIGNE/Architecture%20de%20lumi%C3%A8re.png",
                    description: "A multi-layered diamond necklace with geometric precision."
                },
                {
                    id: 5,
                    title: "GEOMETRY AND CONTRASTS",
                    imageUrl: "https://www.cartier.com/on/demandware.static/-/Sites-cartier-storefront-IND/default/dwb364225d/MegaMenu/HJ_2022/07_PIECES%20DISPO%20EN%20LIGNE/Geometrie%20et%20contrastes.png",
                    description: "Art-deco inspired ring featuring coral and onyx accents."
                },
                {
                    id: 6,
                    title: "FINE JEWELLERY WATCHES",
                    imageUrl: "https://www.cartier.com/on/demandware.static/-/Sites-cartier-storefront-IND/default/dw988eb922/MegaMenu/HJ_2022/07_PIECES%20DISPO%20EN%20LIGNE/Montres%20precieuses.png",
                    description: "A luxury timepiece integrated into a high-jewellery gold bracelet."
                }
                ]
            },
            {
                name: "LATEST COLLECTIONS",
                isActive: false,
                products: []
            },
            {
                name: "MARKERS OF STYLE",
                isActive: false,
                products: []
            },
            {
                name: "ICONIC PANTHERE",
                isActive: false,
                products: []
            },
            {
                name: "LIVING LEGACY",
                isActive: false,
                products: []
            },
            {
                name: "EXCEPTIONAL STONES",
                isActive: false,
                products: []
            }
            ]
        },
        {
            category: "EARRINGS",
            isActive: false,
            subCategories: []
        },
        {
            category: "BANGLES",
            isActive: false,
            subCategories: []
        },
        {
            category: "PEARLS",
            isActive: false,
            subCategories: []
        },
        {
            category: "BEADS",
            isActive: false,
            subCategories: []
        },
        {
            category: "MORE CATEGORIES",
            isActive: false,
            hasDropdown: true,
            subCategories: []
        }
        ];

    const navBarMobileHtml = (deviceType:string) => {
        return  navbarData.menuItems.map((navItem) => {
                if(navItem.type === "link"){
                    if(deviceType === "mobile"){
                        return (   
                            <li className="nav-item" key={navItem.label}>
                                <Link className="nav-link" to={`collections\\${navItem.label}`}>{navItem.label}</Link>
                            </li>
                        )
                    }else if(deviceType === "desktop"){
                        return (   
                            <li className="nav-item" key={navItem.label}>
                                <Link className="nav-link category" onMouseOver={() => showSubCategories(navItem)} to={`collections\\${navItem.label}`}>{navItem.label}</Link>
                            </li>
                        )
                    }
                }else if(navItem.type === "dropdown"){
                    return (
                        <li className="nav-item dropdown" key={navItem.label}>
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {navItem.label}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-light">
                                {
                                    navItem.sections?.map((section) =>{
                                        return (
                                            <li className="nav-item ms-2" key={section.title}>
                                                <strong>{section.title}</strong>
                                                <ul className="list-unstyled">
                                                    {subCategories(section)}
                                                </ul>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                }
            }
        )
    };

    let [currentDisplayCat, setCurrentDisplayCat] = useState<SubCategories[]>([]);
    let [currentSubSubProds, setCurrentSubSubProds] = useState<product[]>();
    const showSubCategories = (navItem:NavItem) => {
        document.getElementById("subsubcat")?.classList.remove("d-none");
        //subsubcat?.classList.contains('d-none')?subsubcat.classList.remove("d-none"):subsubcat?.classList.add("d-none");
        rljNavigationCatalog.map((catalog)=>{
            if(catalog.category === navItem.label){
                setCurrentDisplayCat(catalog.subCategories);
            }else{
                console.log("no catalog");
            }
        });
    };

    const hideSubCat = () => {
        document.getElementById("subsubcat")?.classList.add("d-none");
    }

    const subCategories = (section:any) => {
        return section.links.map((link:any) =>{
                return (
                    <li key={link}><Link className="dropdown-item" to={`collections\\${link}`}>{link}</Link></li>
                )
            }
        )
    }

    const showSubProducts = (products:product[]) => {
        document.getElementById('subProducts')?.classList.remove('d-none');
        setCurrentSubSubProds(products);
    }

    const showProducts = () => {
        
        return (
            <div className='container-fluid d-none' id='subProducts'>
                <div className='row'>
                    {currentSubSubProds?.map((product) => {
                        return (
                            <div className='col-lg-2 text-center'>
                                <img src={product.imageUrl} alt={product.title} className='w-100' />
                                <div className='content mt-1'>
                                    <h6>{product.title}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const showSupercat = () => {
        return currentDisplayCat.map((current) => {
            return (   
                <li className="nav-item" key={current.name}>
                    <Link className="nav-link category" onMouseOver={()=>showSubProducts(current.products)} to={`collections\\${current.name}`}>{current.name}</Link>
                </li>
            )
        });
    }

    return (
        <div className='small'>
            <div className="container navbar-container">
                <div className="row align-items-center">
                    <div className="col-2 col-lg-3">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-start text-bg-light d-lg-none" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" tabIndex={-1}>
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-break" id="offcanvasDarkNavbarLabel">Rajya Lakshmi Jewellers</h5>
                                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link className="nav-link category text-uppercase" to='/'>Home</Link>
                                        </li>
                                       {navBarMobileHtml("mobile")}
                                    </ul>
                                </div>
                            </div>
                            <div className='d-none d-lg-flex'>
                                <ul className="navbar-nav top-nav mb-2 mb-lg-0">
                                    <li className="nav-item me-2">
                                        <a className="nav-link active" aria-current="page" href="#">India</a>
                                    </li>
                                    <li className="nav-item me-2">
                                        <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                                    </li>
                                    <li className="nav-item me-2">
                                        <a className="nav-link active" aria-current="page" href="#">Services</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-8 col-lg-6 text-center mt-3">
                        <a className="navbar-brand" href={navbarData.logo.link}><img src={navbarData.logo.src} alt={navbarData.logo.alt} className='img-fluid' width="150px"/></a>
                    </div>
                    <div className="col-2 col-lg-3 text-end top-icons fs-6">
                        <i className="fa-regular fa-heart mx-2"></i>
                        <Link to='/login' className='text-dark'><i className="fa-regular fa-user mx-2 d-none d-md-inline"></i></Link>
                        <i className="fa-solid fa-location-dot mx-2 d-none d-md-inline"></i>
                    </div>
                </div>
                <div className="container-fluid mt-2">
                    <nav className="navbar navbar-expand-lg d-none d-lg-flex justify-content-center align-items-center">
                        <ul className="navbar-nav gap-4"> 
                            <li className="nav-item">
                                <Link className="nav-link category text-uppercase" to='/'>Home</Link>
                            </li>
                            {navBarMobileHtml("desktop")}
                        </ul>
                    </nav>
                </div>

                <div className='container-fluid d-none' id='subsubcat' onMouseLeave={hideSubCat}>
                    <nav className="navbar navbar-expand-lg d-none d-lg-flex justify-content-center align-items-center">
                        <ul className="navbar-nav gap-4"> 
                            {showSupercat()}
                        </ul>
                    </nav>
                    {showProducts()}
                </div>
            </div>
        </div>
    );
}

export default Navbar;