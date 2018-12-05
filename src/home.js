import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
=======
import { Grid, Row, Col, Thumbnail, Carousel } from 'react-bootstrap';
>>>>>>> 79e1d188c68c3430c1de6085380e2c8850670fe2



class Home extends Component {
    render() {
        return (
          
            <div className="body">  
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
            
                <div className="whiteBox3" >
                    <p  id="webDev" className="mainFont">Web</p>
                    <p id="webDev" className="mainFont2">Development.</p>
                    {/* <Carousel id="carousel">
                        <Carousel.Item  >
                            <img className="c1" alt="" src="/carousel.png" />
                            <Carousel.Caption>
                            <h3>High </h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="c2" alt="900x500" src="/carousel.png" />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/carousel.png" />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>; */}
                    <div>
                        <div className="inline">
                        <p className="whiteBoxFont">UX</p>
                        <p className="whiteBoxFont2">Design.</p>
                        <p className="paragraphFont">
                            I aim to design websites that enable clients to establish
                            their brand presence online while making use of the latest tools and
                            technologies to ensure their website delivers results. The goal is to develop
                            cutting-edge sites that reflect the brand and help reach more customers
                            while also driving growth. 
                        </p> 
                        </div>    
                    </div>
                    <div className="image1"></div>
                    <div className="image2"></div> 
                </div>
                
                <div className="white"> 
                    <div className="whiteMiniBox">
                        <p id="colorWhite1" className="whiteBoxFont">Web</p>
                        <p id="colorWhite2" className="whiteBoxFont2">Development.</p> 
                        <p className="paragraphFont2">
                        I have developed a deep understanding of responsive design, grounded in years of
                        experience designing for mobile screens, tablets and desktop, and everything
                        in between. I can develop apps on every platform that perform seamlessly
                        across devices and create content for e-commerce and social experiences and much more.
                        </p>
                    </div>
                        <div className="image3"></div> 
                        



                        <div>
                            <p className="subFont">Artist.</p>
                            <p className="subFont">Developer.</p>
                            <p className="subFont">UX Designer.</p>
                            <p className="subFont">Marketing.</p>
                            <p className="subFont">Real.</p>
                        </div>
                </div> 
                            
                
                    {/* <div className="whiteBox">
                        <div className="whiteBoxFont">
                            <p className="mainFont">UX</p>
                            <p className="mainFont2">Design.</p> 
                        </div>
                    </div> */}
                



                <div className="bodyFont1"> 
                    <p className="mainFont" id="contactMe">Contact</p>
                    <p className="mainFont2">Danny</p>
                    <ul>
                    <p className="subFonts"> Tel: (310)-438-9516</p>
                    <p className="subFonts"> Email: Dannymorris188@gmail.com</p>
                    <a className="subFonts" href="" alt="">Resume</a>
                    <a className="subFonts" href="https://github.com/raisedproper" target="_blank" rel="noopener noreferrer"> GitHub </a>
                    </ul>

                        

                    <div id="links">
                        <p> All Rights Reseved. Site made from scratch by Danny Morris </p>
                       
                    </div>
               </div>
                   
                    
        </div>   
                
        )
    }

}

export default Home;