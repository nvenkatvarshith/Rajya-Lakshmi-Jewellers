import './../styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from './../assets/rlj_logo.png'

function Navbar() {

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

    const navBarMobileHtml = (deviceType:string) => {
        return  navbarData.menuItems.map((navItem) => {
                if(navItem.type === "link"){
                    if(deviceType === "mobile"){
                        return (   
                            <li className="nav-item">
                                <Link className="nav-link" to={`collections\\${navItem.label}`}>{navItem.label}</Link>
                            </li>
                        )
                    }else if(deviceType === "desktop"){
                        return (   
                            <li className="nav-item">
                                <Link className="nav-link category" to={`collections\\${navItem.label}`}>{navItem.label}</Link>
                            </li>
                        )
                    }
                }else if(navItem.type === "dropdown"){
                    return (
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {navItem.label}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-light">
                                {
                                    navItem.sections?.map((section) =>{
                                        return (
                                            <li className="nav-item ms-2">
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

    const subCategories = (section:any) => {
        return section.links.map((link:any) =>{
                return (
                    <li><Link className="dropdown-item" to={`collections\\${link}`}>{link}</Link></li>
                )
            }
        )
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
                        <i className="fa-regular fa-user mx-2 d-none d-md-inline"></i>
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
            </div>
        </div>
    );
}

export default Navbar;