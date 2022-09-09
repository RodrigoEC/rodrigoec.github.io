import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { useTheme } from "../../context/theme.context";

import { DarkSwitch } from "../DarkSwitch";

import { HeaderWrapper, Logo, Links } from "./styles";
import { header } from "../../text/en.json";

export const Header = () => {
  const { isActive } = useTheme();
  const pages = [
    { text: header.about, path: "/" },
    { text: header.experiences, path: "/exp" },
    { text: header.contact, path: "/contact" },
  ];

  return (
    <HeaderWrapper>
      <Logo isActive={isActive}>
        <Link to="/">
          <LogoIcon />
        </Link>
      </Logo>
      <Links>
        {pages.map((page) => {
          return (
            <li key={page.text}>
              <Link to={page.path}>{page.text}</Link>
            </li>
          );
        })}
      </Links>
      <DarkSwitch />
    </HeaderWrapper>
  );
};
