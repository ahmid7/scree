
const Community = () =>{
    return(
       <section className="community-section">
           <div className="section-width">
                <h2>join our community</h2>
                <p>Subscribe to receive product updates and special offers from our team.</p>
                <form>
                    <label htmlFor="email">
                        <input 
                        id="email"
                        placeholder="Enter your email address"
                        />
                    </label>
                    <button>Subscribe</button>
                </form>
                <p>We’ll never share your details. View our <a href="#privacy-policy">Privacy Policy</a></p>
           </div>
       </section> 
    )
}


export default Community