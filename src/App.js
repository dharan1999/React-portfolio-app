import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PROJECTS from './data/projects';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
import Title from './Title';

class App extends Component {
    state = {displayBio : false};
    // constructor(){
    //     super();
    //     this.state = { displayBio: false};
    //     console.log("Component this",this);
    //      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render(){
        return(
            <div>
                  <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Dharan</p>
                <Title />
                <p>I am always looking forward on working on new projects</p>
                { 
                this.state.displayBio ? (
                <div>
                <p> I live in Montreal, code every day</p>
                <p>My favourite language is Javascript, and I really like React</p>
                <p>Besides coding I like coding and trading</p>
                <p>I am also a music lovesdefr</p>
                <button onClick={ this.toggleDisplayBio }>Read less</button> 
                </div>
                ) : (
                    <div>
                        <button onClick={ this.toggleDisplayBio }>Read more</button>    
                    </div>
                )
                }
                <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            </div>
            
        )
    }
}

export default App;