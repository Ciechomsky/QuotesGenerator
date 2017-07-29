import React from 'react';
import ReactDOM from 'react-dom';

require('../scss/main.scss')

class App extends React.Component {



    render () {
        // fetch('https://random-quote-generator.herokuapp.com/api/quotes/random').then( resp => {
        //     resp.text().then(value => {
        //         console.log(value);
        //     });
        // }).catch(err => {
        //     consol.log(err);
        // });

                fetch('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', {
                    mode: 'no-cros'
                }).then( resp => {
            resp.text().then(value => {
                console.log(value);
            });
        }).catch(err => {
            consol.log(err);
        });

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