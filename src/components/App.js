import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './App.css';

//Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import IconNav from './IconNav';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }
    componentDidMount() {
        $('[data-toggle="offcanvas"]').on('click', function () {
            $('.offcanvas-collapse').toggleClass('open')
        })
        $('.child-link').on('click', function () {
            $('.offcanvas-collapse').toggleClass('open')
        })
    }
    render () {
        const {children} = this.props;
        
        return (
            <div className="App">
                <Header />
                <Content body={children} />
                <Footer />
                <IconNav />
            </div>
        );
    }
}

export default App;
