import './../styles/Navbar.css'

function Navbar() {

    const navbarData = {
        logo: {
            src: "rlj-logo.png",
            alt: "Rajya Lakshmi Silver Jewellery",
            link: "/"
        },
        menuItems: [
            { label: "HOME", url: "/", type: "link" },
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

    return (
        <div>
            <div className="container navbar-container">
                <div className="row align-items-center">
                    <div className="col-2 col-lg-3">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-start text-bg-light d-lg-none" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" tabIndex={-1}>
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Rajya Lakshmi Jewellers</h5>
                                    <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Necklace</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                More Categories
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-light">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-none d-lg-flex'>
                                <ul className="navbar-nav mb-2 mb-lg-0">
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
                    <div className="col-8 col-lg-6 text-center">
                        <a className="navbar-brand fs-3" href="#">Rajya Lakshmi Jewellers</a>
                    </div>
                    <div className="col-2 col-lg-3 text-end">
                        <i className="fa-regular fa-heart mx-2"></i>
                        <i className="fa-regular fa-user mx-2 d-none d-md-inline"></i>
                        <i className="fa-solid fa-location-dot mx-2 d-none d-md-inline"></i>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className="row mt-4 px-5 d-none d-lg-flex">
                        <div className="col-lg-2">
                            <span className='category pb-2'>Necklace</span>
                        </div>
                        <div className="col-lg-2">
                            <span className='category pb-2'>Earrings</span>
                        </div>
                        <div className="col-lg-2">
                            <span className='category pb-2'>Bangles</span>
                        </div>
                        <div className="col-lg-2">
                            <span className='category pb-2'>Pearls</span>
                        </div>
                        <div className="col-lg-2">
                            <span className='category pb-2'>Beads</span>
                        </div>
                        <div className="col-lg-2">
                            <span className='category pb-2'>More Categories</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;