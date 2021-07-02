/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import axios from 'axios'
import React from 'react';

export default class  App extends React.Component {
    
    constructor(){
        super()
        this.state ={
            news: ""
        }
    }
    
    componentDidMount(){
        // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then( (res) => {
            console.log('This is your data', res)
            const hnData = res.data
            console.log(`This is the data, ${hnData[1]}`)
            for(var i= 0; i<10; i++){
                console.log(`This is the data, ${hnData[i]}`)
                axios.get(`https://hacker-news.firebaseio.com/v0/item/${hnData[i]}.json?print=pretty`)
                // eslint-disable-next-line no-loop-func
                .then((res) =>{
                    console.log('This is the data', res)
                    if(i===49){
                        this.setState({
                            news : res
                        })
                    }
                })
            }
             
        })
    }

    render(){
    return (
        <div className="App">
        <div class="container"> 
            <div class="header">
                <div class="header-section">
                    <div class="header-image-section">
                        <img class="header-image" src="y18.gif"/>
                    </div>
                    <div class="header-text-section">
                        <div class="header-text-content">
                            <p  class="header-text">
                                Hacker News
                            </p>
                        </div>
                        <div class="header-menu">
                            <p class="menu-item">
                                new |
                            </p>
                            <p class="menu-item">
                                past |
                            </p>
                            <p class="menu-item">
                                comments |
                            </p>
                            <p class="menu-item">
                                ask |
                            </p>
                            <p class="menu-item">
                                show |
                            </p>
                            <p class="menu-item">
                                jobs | 
                            </p>
                            <p class="menu-item">
                                submit
                            </p>
                        </div>
                    </div>
                </div>
                <div class="login-section">
                    <p>
                        login
                    </p>
                </div>
            </div>

            <div class="lists-of-headline">
                <div class="headline">
                <div class="headline-no">
                        <p>1.</p> 
                        <div class="grayarrow" title="upvote"></div>
                    </div>
                    <div class="headline-content">
                        <div class="headline-section">
                            <p class="main-headline">
                                MIT and Harvard agree to transfer edX to ed-tech firm 2U
                            </p>
                            <p class="headline-website">
                                (news.mit.edu)
                            </p>
                        </div>
                        <div class="headline-comments">
                            <p>83 points</p>
                            <p>by razin </p>
                            <p>58 minutes ago</p>
                            <p>| hide</p>
                            <p>| 62 comments</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    );
}

}