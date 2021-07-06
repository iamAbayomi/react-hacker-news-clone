import React from 'react'

export default class Headline extends React.Component  {
    constructor(props) {
        super(props)
        this.headlineNo = 1
        this.headlineUrl = ''
        console.log('This is the headline in the component' , this.props.headlines)
        // console.log('This is the headline in the component' , props.headlines)
    }
    
    getWebsiteDomain(headlineUrl){
        if(headlineUrl){
            headlineUrl =headlineUrl.split('/')
            return `(${headlineUrl[2]})`
        }
        return ''
    }
    
    render(){
    console.log('This is the headline in the component' , this.props.headlines)
    return(
        <div>
            {this.props.headlines.map((headline) =>(
            <div class="headline">
                {}
                <div class="headline-no">
                    <p>{this.headlineNo++}</p> 
                    <div class="grayarrow" title="upvote"></div>
                </div>
                <div class="headline-content">
                    <div class="headline-section">
                        <a href={headline.url} class="main-headline link-style"
                         target="_blank" rel="noreferrer" >
                            {headline.title}
                        </a>
                        <p class="headline-website">
                            { this.getWebsiteDomain(headline.url) }
                        </p>
                    </div>
                    <div class="headline-comments">
                        <p>{headline.score} points</p>
                        <p>by {headline.by} </p>
                        <p>58 minutes ago</p>
                        <p>| hide</p>
                        <p>| {headline.descendents} comments</p>
                    </div>
                </div>
            </div> 
            ))}
        </div>
    )}
}