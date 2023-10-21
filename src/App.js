import React from 'react';
import Header from './Components/Header'
import Typing from './Components/Typing';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div className='container'>
            <Header />
            {/* <ShowData pairagrap={pairagraph} /> */}
            <Typing />
            <Footer />
        </div>
    );
}

export default App;