import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

class IconNav extends Component {
    render() {
        return (
            <div className="icon-bar shadow">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="//itunes.apple.com/us/app/service-finance-dealer-app/id962933342" className="apple" data-tip data-for='appIos'><i className="fa fa-apple"></i></a>
                <ReactTooltip id='appIos' place="left" type="dark">
                    <span>Download ios Service Finance Dealer app for free</span>
                </ReactTooltip>
                <a href="//play.google.com/store/apps/details?id=com.msi.servicefinance" className="android" data-tip data-for='appAndroid'><i className="fa fa-android"></i></a>
                <ReactTooltip id='appAndroid' place="left" type="dark">
                    <span>Download Android Service Finance Dealer app for free</span>
                </ReactTooltip>
                <a href="//www.youtube.com/watch?v=MVPzDDnaq0c" target="_blank" className="video-play" data-tip data-for='video'><i className="fa fa-youtube"></i></a>
                <ReactTooltip id='video' place="left" type="dark">
                    <span>Watch a Preview SVC Mobile App</span>
                </ReactTooltip>
            </div>
        )
    }
}

export default IconNav;