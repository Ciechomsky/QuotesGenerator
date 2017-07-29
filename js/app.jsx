import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/main.scss')

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            quote: "",
            author: "",
            error: "",
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://random-quote-generator.herokuapp.com/api/quotes/random').then( resp => {
            resp.text().then(value => {
                let endingOfQoute = value.indexOf('"',10);
                let endingOfAuthor = value.indexOf('"', endingOfQoute + 12);

                this.setState({
                    quote: value.substring(10, endingOfQoute),
                    author: value.substring(endingOfQoute + 12, endingOfAuthor),
                    loading: false
                });  
                console.log(this.state.loading)          
            });
        }).catch(err => {
            this.setState({
                error: err
            });
        }); 
    }

    clickButton = () => {
        fetch('https://random-quote-generator.herokuapp.com/api/quotes/random').then( resp => {
            resp.text().then(value => {
                let endingOfQoute = value.indexOf('"',10);
                let endingOfAuthor = value.indexOf('"', endingOfQoute + 12);

                this.setState({
                    quote: value.substring(10, endingOfQoute),
                    author: value.substring(endingOfQoute + 12, endingOfAuthor),
                    loading: false
                });  
                console.log(this.state.loading)          
            });
        }).catch(err => {
            this.setState({
                error: err
            });
        }); 
    }

    render () {
        return <div className = "app">
                <h1 className = "header blockMouse"> Quotes Generator </h1>
                <h2 className = "quote"> Qoutes: {this.state.quote} </h2>
                <h3 className = "author"> Author: {this.state.author} </h3>
                <div className = "button blockMouse" onClick = {this.clickButton}> Generate </div>
            </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});