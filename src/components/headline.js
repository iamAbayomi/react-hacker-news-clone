import React from 'react'

export default class Headline extends React.Component  {
    constructor(props) {
        super(props)
        console.log('This is the headline in the component' , this.props.headlines)
        // console.log('This is the headline in the component' , props.headlines)
    }
    
    
    render(){
    console.log('This is the headline in the component' , this.props.headlines)
    return(
        <div>
            {this.props.headlines.map((headline) =>(
            <div class="headline">
                <div class="headline-no">
                    <p>1..</p> 
                    <div class="grayarrow" title="upvote"></div>
                </div>
                <div class="headline-content">
                    <div class="headline-section">
                        <p class="main-headline">
                            {headline.title}
                        </p>
                        <p class="headline-website">
                            (news.mit.edu)
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