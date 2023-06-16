import React from 'react';
import Nav from './Nav';
import Chakbox from './Chakbox';
import Footer from './Footer';
function Newsletter(props) {
    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="text-center heading py-5 m-auto">
                    <h1>Newsletter Subscriptions</h1>
                    <p className='para'>Sign up to receive free newsletters, curated by Flipboard</p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 sub_section">
                            <div className='inputtype'>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email"/>
                                {/* <input type='email' placeholder='Enter Your Email' /> */}
                            </div>
                            <div className='subscribe mt-3 mb-2 '>
                            <button className=' btn ' disabled>Subscribe</button>
                            </div>
                            <p>You can opt out at anytime. By signing up, you accept the Terms of Use and Privacy Policy</p>
                        </div>
                        <div className="col-6 ">
                            <Chakbox title='10 For Today' para="Ten stories to inform and inspire your day, selected by Flipboard's editorial team, Monday through Friday. On Saturdays, get a roundup of Storyboards from the week."/>
                            
                            <Chakbox title='Tech Briefing' para="Top tech headlines, deep dives and trends in the news. Selected by Flipboard every weekday."/>
                               
                            <Chakbox title='Politics Rundown' para="Trending political news, selected bi-weekly by Carl Sullivan, Flipboard's North America Managing Editor, or special guest curators."/>
                            <Chakbox title='Climate Briefing' para="Environmental news and views, selected by Flipboard's editorial team. Delivered every Tuesday."/>
                            <Chakbox title='Photo Desk' para="Striking photos depicting current events, curated by Flipboard editors. Delivered every Friday."/>
                            <Chakbox title='The Shot' para="Exploring the craft of photography, curated by photographers and filmmakers. Delivered every Wednesday."/>
                            <Chakbox title='Recipes of the Week' para="Just recipes so you never have to wonder what to eat, curated by Flipboard's Lifestyle Editor Aileen Lalor. Delivered every Monday."/>
                            <Chakbox title='The Tastiest' para="Inspiration for the home cook, curated for foodies, by foodies. Delivered every Thursday."/>
                            <Chakbox title='Wanderlust' para="Your virtual passport to travel the world, curated by experts. Delivered every Saturday."/>
                            <Chakbox title='$avvy' para="Personal finance, investing and crypto news, curated by money mavens. Delivered every Monday."/>
                            <Chakbox title='Science Briefing' para="The latest space, health, electric vehicle, archeology, paleontology, and other science-related news, selected by Flipboard's editorial team. Delivered every Friday."/>
                            <Chakbox title='The Good Life' para="Picks and products for a curated lifestyle. Delivered several times a year, particularly around the holidays. Curated by Lifestyle Editor Aileen Lalor."/>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    );
}

export default Newsletter;