import React, { Component } from 'react';
import me from '../../assets/img/eu.jpeg'
import './estilo.css'

export default class InstaPost extends Component {
    render() {
        return (
            <div>
                <div class='insta-post-header'>
                    <img src={me} alt="" />
                    <svg aria-label="Mais opções" class="_8-yf5 " fill="white" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                </div>
                <img src={this.props.image} alt="Insta Post" />
            </div>
        )
    }
}