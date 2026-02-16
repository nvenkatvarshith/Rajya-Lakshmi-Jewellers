function SingleCollection(){
    const content = {
        imgUrl: 'https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibraryAESA-BGTJ/default/dw2c8ee6cc/homepage/2026/February/W1/IND-TUR/Bags_all_2048x864.jpg',
        title: 'Cartier leather goods',
        description: 'Through these creations, Cartier celebrates the elegance and precious nature of details.'
    }
    return ( 
        <div className="container-fluid text-center d-flex justify-content-center align-items-end mt-2" style={{height: '100vh', backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%),url(${content.imgUrl})`,backgroundSize: 'cover'}}>
            <div className="content text-light mb-5" >
                <h2 className="text-uppercase fw-semibold">{content.title}</h2>
                <h6 className="fw-normal my-4">{content.description}</h6>
                <button className="btn btn-outline-dark text-light border-light text-uppercase px-3 rounded-0">Discover</button>
            </div>
        </div>
    )
}

export default SingleCollection;