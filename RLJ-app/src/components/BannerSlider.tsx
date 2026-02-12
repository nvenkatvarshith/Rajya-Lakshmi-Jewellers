import banner1 from './../assets/banners/1.png'
import banner2 from './../assets/banners/2.png'
import banner3 from './../assets/banners/3.png'
import banner4 from './../assets/banners/4.png'

function BannerSlider(){
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="1st Banner"/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="2nd Banner"/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="3rd Banner"/>
                    </div>
                    <div className="carousel-item">
                        <img src={banner4} className="d-block w-100" alt="4th Banner"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default BannerSlider;