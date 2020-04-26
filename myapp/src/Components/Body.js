import React, { Component } from 'react';
import Home from './Home';
import Images from './Images';
import Videos from './Videos';
import Projects from './Projects';

class Content extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab;
        if (activeTab === 1) {
            return <Home/>;
        }
        else if (activeTab === 2) {
            return <Images/>;
        } 
        else if (activeTab === 3) {
            return <Videos/>;
        }
        else if (activeTab === 4) {
            return <Projects/>;
        }
    }
    render() {
        return this.displayContent();
    }
}

export default Content;