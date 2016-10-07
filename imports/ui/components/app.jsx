// Frontend
// imports / ui / layouts / app.jsx

import React from 'react';

import Header from '../components/common/header';
import Footer from '../components/common/footer';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />

                <hr />

                { this.props.children }

                <hr />

                <Footer />
            </div>
        );
    }
}

export default App;