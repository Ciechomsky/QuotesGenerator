import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/main.scss')

class App extends React.Component {



    render () {
        fetch('https://crossorigin.me/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en').then( resp => {
            console.log(resp);
        }).catch(err => {
            consol.log(err);
        });

            let myRequest = "http://api.forismatic.com/"

    //   fetch('').then(resp => {
    //   if(resp.ok) {
    //     return resp.json();
    //   } else {
    //     console.log('Błąd');
    //   }
    // }).catch(error => {
    //   console.log('Problem');
    // });

        return <h1> test </h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});