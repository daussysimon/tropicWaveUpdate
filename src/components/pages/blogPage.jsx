import React from "react";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "../../assets/styles/blogPage.scss";

export const BlogPageTemplate = ({ ...props }) => {
  const { aboutUs, travel, agency } = props.data;

  console.log(travel);

  return (
    <main className="main main-blog">
      <section className="main-blog-aboutUs">
        <div className="main-blog-aboutUs-container">
          <div className="main-blog-aboutUs-container-imgContainer">
            <span className="main-blog-aboutUs-container-imgContainer-imgDeco"></span>
            <GatsbyImage
              image={getImage(aboutUs.picture.img)}
              alt={aboutUs.picture.alt}
              className="main-blog-aboutUs-container-imgContainer-img"
            />
          </div>

          <div className="main-blog-aboutUs-container-content">
            <h2>{aboutUs.title}</h2>
            <p>{aboutUs.description}</p>
          </div>
        </div>
      </section>
      <section className="main-blog-allDestinations">
        <div className="main-blog-allDestinations-container">
          <div className="main-blog-allDestinations-container-imgContainer">
            <GatsbyImage
              image={getImage(travel.picture.img)}
              alt={travel.picture.alt}
              className="main-blog-allDestinations-container-imgContainer-img"
            />
          </div>
          <div className="main-blog-allDestinations-container-content">
            <h2>{travel.title}</h2>
            <p>{travel.description}</p>
            <Link
              className="main-blog-allDestinations-container-content-link"
              to={`"/blog/${travel.button.link}/`}
            >
              {travel.button.title}
            </Link>
          </div>
        </div>
      </section>
      <section className="main-blog-favoriteDestination">
        <h2 className="main-blog-favoriteDestination-title">
          <span /> Nos destinations favorites
        </h2>
        {/* <div className="main-blog-favoriteDestination-selection">
          {props?.country?.slice(0, 4).map((item, key) => {
            return (
              <Link
                className="main-blog-favoriteDestination-selection-cart"
                to={`./pays/${item.node.frontmatter.title
                  .toLowerCase()
                  .replaceAll(" ", "-")}/`}
                key={key}
              >
                <GatsbyImage
                  image={getImage(item.node.frontmatter.featuredImage.picture)}
                  alt={item.node.frontmatter.featuredImage.altPicutre}
                  className="main-blog-favoriteDestination-selection-cart-img"
                />
                <h4 className="main-blog-favoriteDestination-selection-cart-title">
                  {item.node.frontmatter.title}
                </h4>
              </Link>
            );
          })}
        </div> */}
      </section>
      <section className="main-blog-agency">
        <div className="main-blog-agency-container">
          <div className="main-blog-agency-container-imgContainer">
            <GatsbyImage
              image={getImage(agency.picture.img)}
              alt={agency.picture.alt}
              className="main-blog-agency-container-imgContainer-img"
            />
            <span className="main-blog-agency-container-imgContainer-imgDeco" />
          </div>
          <div className="main-blog-agency-container-content">
            <h2>{agency.title}</h2>
            <p>{agency.description}</p>
            <Link
              className="main-blog-agency-container-content-link"
              to={`${agency.button.link}`}
            >
              {agency.button.title}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
