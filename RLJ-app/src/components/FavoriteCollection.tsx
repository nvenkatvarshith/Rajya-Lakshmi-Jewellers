import './../styles/FavoriteCollection.css';

function FavoriteCollection(){
    const collections = [
        {
            img: "https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibraryAESA-BGTJ/default/dw10158f67/homepage/2026/1%20January/Vday/DOUBLE_MODULE_JEWERLY_1680x1377.jpg",
            name: "Jewellery",
            description: "From LOVE Unlimited to Juste un Clou, Cartier jewellery is radically in love.",
        },
        {
            img: "https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibraryAESA-BGTJ/default/dwed9a9c45/homepage/2026/1%20January/Vday/DOUBLE_MODULE_WATCHES_SELECTION_1680x1377.jpg",
            name: "Watches",
            description: "From Santos to Panthère de Cartier, the Maison's watchmaking creations are the heroes of a timeless love story."
        }
    ];
    return (
        <div className="container-fluid mt-4">
            <div className="row p-2">
            {
                collections.map((collection) => {
                    return (
                        <div className='col-lg-6 col-12 mb-4 mb-md-0'>
                            <img src={collection.img} alt={collection.name} className="w-100" />
                            <div className="content text-center mt-3">
                                <h4 className="text-uppercase">{collection.name}</h4>
                                <p className="fw-normal my-3">{collection.description}</p>
                                <span className="discover-collection pb-1">Discover the collections</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

export default FavoriteCollection;