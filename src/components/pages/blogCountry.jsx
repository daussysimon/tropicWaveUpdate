import React from "react";
import { Content } from "../content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import "../../assets/styles/blogCountry.scss";

export const BlogCountryComponent = ({ data, list }) => {
  return (
    <main className="main main-alldestinations">
      <nav className="main-blogPost-link">
        <a href="/blog/">Blog</a> &rsaquo;{" "}
        <a
          href={`/blog/continent/${data.continent
            .toLowerCase()
            .replaceAll(" ", "-")}/`}
        >
          {data.continent}
        </a>
      </nav>
      <section className="main-alldestinations-description">
        <h1 className="main-alldestinations-description-title">{data.title}</h1>
        <p className="main-alldestinations-description-subtitle">
          {data.subtitle}
        </p>
        <Content
          className="main-alldestinations-description-content"
          content={data.html}
        />
      </section>
      <section className="main-alldestinations-countryListPays">
        <h2 className="main-alldestinations-countryListPays-title">
          <span></span>
          Les articles
          <span></span>
        </h2>
        <div className="main-alldestinations-countryListPays-list">
          {list
            ?.filter((item) => item.node.frontmatter.pays === data.title)
            .map((item, key) => {
              return (
                <Link
                  className="main-alldestinations-countryListPays-list-item"
                  to={`/blog/articles/${item.node.frontmatter.slugPerso
                    ?.toLowerCase()
                    .replaceAll(" ", "-")}/`}
                  key={key}
                >
                  <GatsbyImage
                    image={getImage(
                      item.node.frontmatter.featuredImage.picture
                    )}
                    alt={item.node.frontmatter.featuredImage.altPicutre}
                    className="main-alldestinations-countryListPays-list-item-img"
                  />
                  <h4 className="main-alldestinations-countryListPays-list-item-title">
                    {item.node.frontmatter.title}
                  </h4>
                </Link>
              );
            })}
        </div>
        <div className="main-blog-favoriteDestination-selection"></div>
      </section>
    </main>
  );
};
