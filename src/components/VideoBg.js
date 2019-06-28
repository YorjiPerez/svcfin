import React, { Component } from 'react';

class VideoBg extends Component {
    render() {
        return (
            <section className="bg-light pt-5 pb-5 border-style">
                <video autoplay muted loop id="myVideo">
                    <source src="https://youtu.be/MVPzDDnaq0c" type="video/mp4" />
                </video>
            </section>
        )
    }
}

export default VideoBg;