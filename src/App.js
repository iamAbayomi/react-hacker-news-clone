/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import axios from 'axios'
import React from 'react';
import Headline from './components/headline'

export default class  App extends React.Component {

    state ={
        headlines :[]
    }
    
    componentDidMount(){
        let x =0, headlinesArray = []
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then( (res) => {
            console.log('This is your data', res)
            const hnData = res.data
            this.getAllHackerNewsItem(x, headlinesArray, hnData)
            console.log('This is your headlinesArray', headlinesArray)
             this.setState({
                 headlines : headlinesArray
             })
             console.log('This is your headlines in the state', this.state.headlines)
        })
    }

    async getAllHackerNewsItem ( x, headlinesArray, hnData){
        for(var i= 0; i<30; i++){
            console.log(' integer ', i)
           // console.log(`This is the data, ${hnData[i]}`)
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${hnData[i]}.json?print=pretty`)
            // eslint-disable-next-line no-loop-func
            .then((res) =>{
                // console.log('This is your data', res)
                headlinesArray[x] = res.data
                console.log('This is your headlinesArray', headlinesArray[x])
                if(x === 29){
                    this.forceUpdate()
                }
                x++
            })
        }
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
            <Headline headlines={this.state.headlines} /> 
        </div>
        </div>
        </div>
    );
}

}