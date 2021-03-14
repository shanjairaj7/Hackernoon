import React from "react";
import data from "../data.json";

import heart from "../assets/heart.png";
import light from "../assets/light.png";
import boat from "../assets/boat.png";
import money from "../assets/money.png";
import twitter from "../assets/twitter-new.png";
import github from "../assets/github-new.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/email.png";

import { BsBookmark, BsStarFill } from "react-icons/bs";
import moment from "moment";

const Blog = ({ isDarkTheme }) => {
  // ? I am accessing the Document because, the markup from the json does not have refs in order for me to use useRef in react to access the DOM

  const aTags = document.getElementsByTagName("a");
  console.log(aTags);
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].parentElement.className == "paragraph") {
      aTags[i].style.color = isDarkTheme ? "" : "rgb(60, 60, 59)";
    }
  }

  return (
    <div className="blog__section container">
      <div className="blog__header">
        <h1 className="title" style={{ color: isDarkTheme && "white" }}>
          {data.title}
        </h1>
        <div className="blog__stats">
          <div className="left" style={{ color: isDarkTheme && "white" }}>
            <h3>{moment(data.createdAt).format("MMMM dS yyyy")}</h3>
            <p style={{ backgroundColor: isDarkTheme && "rgb(60, 60, 59)" }}>
              <BsStarFill className="icon" /> <span>543 Reads</span>
            </p>
            <BsBookmark className="icon" />
          </div>

          <div className="right" style={{ color: isDarkTheme && "white" }}>
            <p>{data.reactions.total}</p>
            <img src={heart} className="reaction__icon" />
            <img src={light} className="reaction__icon" />
            <img src={boat} className="reaction__icon" />
            <img src={money} className="reaction__icon" />
          </div>
        </div>
      </div>

      <img src={data.mainImage} className="main__image" />
      <div className="blog__post" style={{ color: isDarkTheme && "white" }}>
        <div className="profile">
          <img src={data.profile.avatar} className="avatar" />
          <br />
          <a
            style={{ color: isDarkTheme && "white" }}
            href={`https://twitter.com/${data.profile.twitter}`}
            target="_blank"
            className="handle"
          >
            @{data.profile.handle}
          </a>
          <h2>{data.profile.displayName}</h2>
          <p style={{ color: isDarkTheme ? "white" : " rgb(60, 60, 59)" }}>
            {data.profile.bio}
          </p>
          <a
            href={`https://twitter.com/${data.profile.twitter}`}
            target="_blank"
          >
            <img src={twitter} className="social__icon" />
          </a>
          <a href={`https://github.com/${data.profile.github}`} target="_blank">
            <img src={github} className="social__icon" />
          </a>
        </div>

        <div
          className="blog"
          style={{ color: isDarkTheme ? "white" : "rgb(60, 60, 59)" }}
          dangerouslySetInnerHTML={{ __html: data.markup }}
        ></div>
      </div>

      <div className="blog__end" style={{ color: isDarkTheme && "white" }}>
        <div className="reactions">
          <p>{data.reactions.total}</p>
          <img src={heart} className="reaction__icon" />
          <img src={light} className="reaction__icon" />
          <img src={boat} className="reaction__icon" />
          <img src={money} className="reaction__icon" />
        </div>

        <div className="share">
          <h1>Share this story</h1>
          <img src={twitter} className="reaction__icon" />
          <img src={facebook} className="reaction__icon" />
          <img src={linkedin} className="reaction__icon" />
          <img src={gmail} className="reaction__icon" />
        </div>

        <div className="profile__banner">
          <div className="profile">
            <img src={data.profile.avatar} className="avatar" />
            <br />
            <h1 className="handle">@{data.profile.handle}</h1>
            <p>@{data.profile.displayName}</p>
          </div>
          <div className="ad__text">
            <a href={data.profile.adLink}>{data.profile.adText}</a>
          </div>
        </div>

        <div className="related__posts">
          <div className="title">
            <div
              style={{ backgroundColor: !isDarkTheme && "rgb(193, 202, 212)" }}
            ></div>
            <h1>Related</h1>
            <div
              style={{ backgroundColor: !isDarkTheme && "rgb(193, 202, 212)" }}
            ></div>
          </div>

          <div className="posts">
            {data.relatedStories.map((story) => (
              <>
                {story.profile && (
                  <div className="post">
                    <a className="title">{story?.title}</a>
                    <div
                      className="post__image"
                      style={{
                        backgroundImage: `url(${story.mainImage})`,
                      }}
                    >
                      <p>#{story?.tags[0]}</p>
                    </div>
                    <div className="info">
                      <div className="profile">
                        <img src={story?.profile?.avatar} />
                        <div>
                          <h1>@{story?.profile?.handle}</h1>
                          <p>{story?.profile?.displayName}</p>
                        </div>
                      </div>
                      <div className="details">
                        <p>{story?.estimatedTime}</p>
                        <p>{moment(story?.createdAt).format("dd/mm/yy")}</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>

          <div className="tags">
            <div className="title">
              <div
                style={{
                  backgroundColor: !isDarkTheme && "rgb(193, 202, 212)",
                }}
              ></div>
              <h1>Tags</h1>
              <div
                style={{
                  backgroundColor: !isDarkTheme && "rgb(193, 202, 212)",
                }}
              ></div>
            </div>
            <div className="tags__display">
              {data.tags.map((tag) => (
                <p style={{ backgroundColor: !isDarkTheme && "lightgray" }}>
                  #{tag}
                </p>
              ))}
            </div>
          </div>

          <div className="join">
            <a
              style={{
                backgroundColor: !isDarkTheme && "#212528",
                color: "#00ff00",
              }}
            >
              Join Hacker Noon 👓
            </a>
            <p>
              Create your free account to unlock your custom reading experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
