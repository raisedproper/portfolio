import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';


class Home extends Component {
    render() {
        return (
          
            <div>  
            {/* this is the top of the page / intro  */}
                <div className="whiteBox" id="aboutMe">
            
                <div className="bodyFont"> 
                    <p className="mainFont">Danny</p>
                    <p className="mainFont2">Morris</p>
                        <div>
                            <a className="subFont" href="www.google.com">Artist.</a>
                            <a className="subFont" href="www.google.com">Developer.</a>
                            <a className="subFont" href="www.google.com">UX Designer.</a>
                            <a className="subFont" href="www.google.com">Marketing.</a>
                            <a className="subFont" href="www.google.com">Real.</a>
                        </div>        
                </div>
            </div>    
            <div> 
                <div id="leftAlign">
                    <p className="pageLayout" >About</p>
                    <p className="mainFont3">Me.</p>
                </div>
                    <div className="paragraphBox">
                        <p > <div className="firstWord"> M</div>y name is Danny Morris, and from childhood, I have had the most creative imagination. This creativity has followed me into my adult life , and has sent me on a quest to find an outlet where I can be the most creative. Through design, coding, marketing and branding I have found my niche craft. 
                            As you will see in my designs, I have an impeccable eye for style and a seamless design aesthetic. Clean, professional, effective and impactful are all words that describe my work. 
                        </p>
                        <p>   
                            <div className="firstWord"> W</div>ith a background in business marketing, I have the talent to design an impactful user experience, while making sure the user knows they are dealing with an up-scale, premium brand. 
                            Throughout my career I have developed my talents to produce high impact concepts and campaigns that engage, inspire, and entertain. Danny Morris
                            does more than just change appearances -- I also drive action and results.
                        </p>
                        <p>
                            <div className="firstWord"> A</div>s a creatively-driven individual, I believe in creating work that solves problems and produces results.
                            Because of this, I have developed the skills needed to apply my ideas and talents in a way that feels productive, effective and up-scale. My skills are comprised of
                            Web Development,  UX and graphic design, photography, marketing, writting, video shooting and editing, illustrating and many more intagibles that allow me to 
                                thrive in working with clients to strengthen their brand value.
                        </p>
                    </div>
            </div> 
            
                <div className="whiteBox" id="webDev">
                    <p className="mainFont">Web</p>
                    <p className="mainFont2">Development.</p>
                    
                    <Grid>
                        <Row className="show-grid">
                            <Col id="thumbNail" md={6} mdPush={6}>
                                <Thumbnail id="thumbNail1" href="#" alt="171x180" src="/public/assets/photos/dannyray.png" img="/public/assets/photos/dannyray.png" />
                                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />

                                <code>{}</code>
                            </Col>
                            <Col id="thumbNail" md={6} mdPull={6}>
                                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />
                                <Thumbnail href="#" alt="171x180" src="/thumbnail.png" />

                                <code>{}</code>
                            </Col>
                        </Row>
                    </Grid>   
                </div>
                
                <div className="bodyFont"> 
                    <p className="mainFont">Web</p>
                    <p className="mainFont2">Development.</p>
                        <div>
                            <p className="subFont">Artist.</p>
                            <p className="subFont">Developer.</p>
                            <p className="subFont">UX Designer.</p>
                            <p className="subFont">Marketing.</p>
                            <p className="subFont">Real.</p>
                        </div>
                </div> 
                            
                <div className="whiteBox">
                    <div className="whiteBoxFont">
                        <p className="mainFont">UX</p>
                        <p className="mainFont2">Design.</p> 
                    </div>
                </div>
                
                <img src="/Users/totalbeauty/portfolio/finalportfolio/public/assets/photos/dannyray.png" alt=""></img>

                <div className="bodyFont"> 
                    <p className="mainFont">Danny</p>
                    <p className="mainFont2">Morris</p>
                        <div>
                            <p className="subFont">Artist.</p>
                            <p className="subFont">Developer.</p>
                            <p className="subFont">UX Designer.</p>
                            <p className="subFont">Marketing.</p>
                            <p className="subFont">Real.</p>
                        </div>
                </div>
                <div className="whiteBox">
                    <p className="mainFont" id="contactMe">Contact</p>
                    <p className="mainFont2">Me.</p>
                        <div>
                            <p className="subFont">stuff</p>
                            <p className="subFont">stuff.</p>
                            <p className="subFont">UX stuff.</p>
                            <p className="subFont">Marketing stuff.</p>
                            <p className="subFont">Real stuff.</p>
                        </div>

                    <a id="links" href="https://www.github.com" target="_blank" rel="noopener noreferrer">all rights reserved | github | dannymorris188@gmail.com</a>
                </div>   
             </div>   
        )
    }

}

export default Home;