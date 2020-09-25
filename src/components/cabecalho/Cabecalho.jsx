import React, { Component } from 'react';
import Logo from '../Logo'
import githubIcon from '../../assets/img/github-icon.svg';
import emailIcon from '../../assets/img/e-mail-icon.png';
import linkedinIcon from '../../assets/img/linkedin-icon.svg';
import instagramIcon from '../../assets/img/instagram-icon.svg';
import './estilo.css'


class Cabecalho extends Component {

   render() {
      return (
         <section className="cabecalho">
            <Logo/>
            <div className="cabecalho-social-media-container">
               <img src={instagramIcon} className="cabecalho-social-media-item"/>
               <img src={githubIcon} className="cabecalho-social-media-item"/>
               <img src={linkedinIcon} className="cabecalho-social-media-item"/>
               <img src={emailIcon} className="cabecalho-social-media-item"/>
            </div>
         </section>
      );
   }
}

export default Cabecalho;
