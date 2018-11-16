import React, { Component } from 'react';
import './App.css';

class Home extends Component {
    render() {
        return (
          
            <body>  
                <div src="./public/assets/photos/dannyray.jpg" alt="photo"/>
            {/* this is the top of the page / intro  */}
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
                <div> 
                    <p className="pageLayout" id="leftAlign">About</p>
                    <p className="mainFont3">Me.</p>
                    
                        <div className="paragraphBox">
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris neque tortor, efficitur sit amet sem molestie, iaculis mollis tortor. Donec gravida lorem at nisl sodales egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer nec mollis ligula, vel consequat tortor. Pellentesque convallis laoreet sagittis. Integer fringilla egestas nisl aliquam tempor. Nunc vel facilisis sapien. Aenean eget nulla a dolor ultrices egestas.

                            Nulla euismod sem nec augue egestas, ut placerat libero cursus. Cras ut suscipit lectus. Proin a urna facilisis nunc luctus rhoncus. Sed pellentesque libero et finibus laoreet. Nullam lobortis iaculis lectus, eu pellentesque.</p>
                            
                        </div>
                </div> 


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
            </body>   
        )
    }

}

export default Home;