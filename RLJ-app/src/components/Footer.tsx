import './../styles/Footer.css'

function Footer() {
    const footerData = {
        sections: [
            {
                id: 1,
                headline: "CUSTOMER CARE",
                links: [
                    { text: "CONTACT US", path: "/contact" },
                    { text: "CALL NOW: +91 11 4678 8888", path: "tel:+911146788888" },
                    { text: "FAQ", path: "/faq" },
                    { text: "SITEMAP", path: "/sitemap" }
                ]
            },
            {
                id: 2,
                headline: "OUR COMPANY",
                links: [
                    { text: "FIND A BOUTIQUE", path: "/boutiques", hasExternalIcon: true },
                    { text: "CAREERS", path: "/careers", hasExternalIcon: true },
                    { text: "CARTIER AND CORPORATE SOCIAL RESPONSIBILITY", path: "/csr", hasExternalIcon: false }
                ]
            },
            {
                id: 3,
                headline: "LEGAL AREA",
                links: [
                    { text: "TERMS OF USE", path: "/terms" },
                    { text: "PRIVACY POLICY", path: "/privacy" },
                    { text: "CREDITS", path: "/credits" }
                ]
            }
        ]
    };

    const getFooterSections = () => {
        return footerData.sections.map((section) =>{
            return (
                <div className='col-lg-3'>
                    <h5>{section.headline}</h5>
                    <ul className='list-unstyled mt-4'>
                        {section.links.map((link) =>{
                                return (
                                    <li className='mb-3 fw-lighter'><a className='py-1' href={link.path}>{link.text}</a></li>
                                )
                            }
                        )}
                    </ul>
                </div>
            );
        });
    };

    return (
        <div className="newsletter mt-5 px-4 small">
            <div className='container'>
                <div className="d-flex text-center justify-content-center border border-start-0 border-end-0 py-5">
                    <div className="w-lg-25">
                        <h4 id='header-subscribe'>Subscribe to our Newsletter</h4>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="form-floating mb-3 w-75">
                                <input type="email" className="form-control border border-0 border-bottom border-dark rounded-0" id="email" placeholder="your@gmail.com" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="w-25 ms-1">
                                <button className="btn btn-dark rounded-0 px-lg-5 py-2" id="subscribe">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mt-5 footer'>
                    {getFooterSections()}

                    <div className='col-lg-3'>
                        <h4 className='mb-lg-4'>Follow Us</h4>
                        <span className='fs-4'>
                            <i className="fa-brands fa-instagram me-3"></i>
                            <i className="fa-brands fa-facebook-f me-3"></i>
                            <i className="fa-brands fa-x-twitter me-3"></i>
                            <i className="fa-brands fa-youtube me-3"></i>
                            <i className="fa-brands fa-pinterest me-3"></i>
                            <i className="fa-brands fa-whatsapp me-3"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;