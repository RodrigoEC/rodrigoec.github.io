import React from "react";

import { ReactComponent as GuySeated } from "../../assets/guy_seated.svg";
import { ReactComponent as EmailIcon } from "../../assets/email.svg";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg";

import { LinkSocialMedia } from "../../components/LinkSocialMedia";
import { contact } from "../../text/en.json";

import { ContactWrapper, Links, Text, Link } from "./styles";

export const Contact = () => {
  const links = [
    {
      title: "Instagram",
      body: "@rodrigoeloyc",
      Icon: InstagramIcon,
      link: "https://www.instagram.com/rodrigoeloyc",
    },
    {
      title: "Github",
      body: "@RodrigoEC",
      Icon: GithubIcon,
      link: "https://github.com/RodrigoEC",
    },
    { title: "e-mail", body: "rodrigoecavalcanti@gmail.com", Icon: EmailIcon },
    {
      title: "Linkedin",
      body: "Rodrigo Eloy Cavalcanti",
      Icon: LinkedinIcon,
      link: "https://www.linkedin.com/in/rodrigo-eloy/",
    },
  ];

  return (
    <ContactWrapper>
      <section>
        <Text>
          <h1>{contact.title}</h1>
          {contact.text.map((text, id) => (
            <p key={id} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
          <Links>
            {links.map((link) => (
              <li key={link.title}>
                <LinkSocialMedia info={link} />
              </li>
            ))}
          </Links>
          <p>{contact.cv}</p>
        </Text>
        <p>
          <Link to="/files/cv-rodrigo-eloy.pdf" target="_blank" download>
            Download CV
          </Link>
        </p>
      </section>
      <GuySeated />
    </ContactWrapper>
  );
};
