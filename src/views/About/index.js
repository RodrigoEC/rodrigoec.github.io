import React from "react";

import Coffee from "../../assets/posts/coffee.png";
import Cake from "../../assets/posts/cake.png";
import Foot from "../../assets/posts/foot.png";
import Jar from "../../assets/posts/jar.png";
import Woman from "../../assets/posts/woman.png";

import { ReactComponent as Heart } from "../../assets/heart.svg";
import { Post } from "../../components/Post";
import { aboutMe } from "../../text/en.json";

import {
  AboutMeWrapper,
  Profile,
  Text,
  Title,
  Posts,
  LoveWrapper,
} from "./styles";

export const About = () => {
  const posts = [
    {
      name: "woman",
      link: "https://www.instagram.com/p/B6ssVdphu2G/?utm_source=ig_web_copy_link",
      photo: Woman,
      alt: "Photo of a woman with distorted colors",
    },
    {
      name: "coffee",
      link: "https://www.instagram.com/p/B5xnZh1A88G/",
      photo: Coffee,
      alt: "Photo of a coffee taked from above",
    },
    {
      name: "cake",
      link: "https://www.instagram.com/p/CM8bS5ChwG_/",
      photo: Cake,
      alt: "Photo of a driver from the back seat perspective",
    },
    {
      name: "Jar",
      link: "https://www.instagram.com/p/B51XK8NgVq9/",
      photo: Jar,
      alt: "Photo of a Jar that has flowers inside",
    },
    {
      name: "Foot",
      link: "https://www.instagram.com/p/CIv3kDlhfcq/",
      photo: Foot,
      alt: "Photo of the foot of a little baby",
    },
  ];

  return (
    <div>
      <AboutMeWrapper>
        <Profile
          href="https://github.com/rodrigoec"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/42751604?v=4"
            alt="The avatar of my github profile"
          />
        </Profile>
        <Text>
          <Title>
            <h2>{aboutMe.helloTitle}</h2>
          </Title>
          {aboutMe.intro.map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </Text>
      </AboutMeWrapper>
      <LoveWrapper>
        <Text>
          <Title>
            <h2>{aboutMe.loveTitle}</h2>
            <Heart />
          </Title>
          {aboutMe.loveParagraph.map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </Text>
        <Posts>
          {posts.map((post) => (
            <li key={post.name}>
              <Post post={post} />
            </li>
          ))}
        </Posts>
      </LoveWrapper>
    </div>
  );
};
