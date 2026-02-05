import './../styles/Navbar.css'

function Navbar() {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <nav className="navbar navbar-expand-lg">
                        <div className="col-lg-3">
                                <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>             
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                        </div>
                        <div className="col-lg-6 text-center pt-lg-4">
                            <a className="navbar-brand fs-3" href="#">Rajya Lakshmi Jewellers</a>
                        </div>
                        <div className="col-lg-3 text-end">
                            <i className="fa-regular fa-heart mx-2"></i>
                            <i className="fa-regular fa-user mx-2"></i>
                            <i className="fa-solid fa-location-dot mx-2"></i>
                        </div>
                    </nav>
                </div>
                <div className="row mt-4 px-5">
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
    );
}

export default Navbar;