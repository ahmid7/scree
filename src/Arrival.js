const Arrival = () =>{
    return(
        <section className="arrival-section">
            <div className="section-width">
                <h2>Latest Arrivals</h2>
                <div className="arrival-container">
                    <div className="arrival-product">
                        <div className="arrival-image">
                            <img src="/images/unsplash_1P6AnKDw6S8.png" alt=""/>
                        </div>
                        <div className="arrival-details">
                            <p>white living room chair</p>
                            <div className="buy">
                                <p>$200.00 <span>usd</span></p>
                                <a href="#buy">buy now</a>
                            </div>
                        </div>
                    </div>
                    <div className="arrival-product">
                        <div className="arrival-image">
                            <img src="/images/unsplash_4uD9w-pxBTA.png" alt=""/>
                        </div>
                        <div className="arrival-details">
                            <p>Hand Crafted Wooden Table </p>
                            <div className="buy">
                                <p>$350.00 <span>usd</span></p>
                                <a href="#buy">buy now</a>
                            </div>
                        </div>
                    </div>
                    <div className="arrival-product">
                        <div className="arrival-image">
                            <img src="/images/unsplash_7-9SSmlVMcU.png" alt=""/>
                        </div>
                        <div className="arrival-details">
                            <p>Workspace Sofa</p>
                            <div className= "buy">
                                <p>$445.00 <span>usd</span></p>
                                <a href="#buy">buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Arrival;