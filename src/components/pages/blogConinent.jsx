import { Content } from "../content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export const BlogContinentComponent = ({ data, list }) => {
  return (
    <main className="main main-alldestinations">
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
      <section className="main-alldestinations-countryListContinent">
        <h2 className="main-alldestinations-countryListContinent-title">
          <span></span>
          Nos destinations
          <span></span>
        </h2>
        <div className="main-alldestinations-countryListContinent-list">
          {list
            ?.filter((item) => item.node.frontmatter.continent === data.title)
            .map((item, key) => {
              return (
                <Link
                  className="main-alldestinations-countryListContinent-list-item"
                  to={`/blog/pays/${item.node.frontmatter.title
                    .replace(" ", "-")
                    .toLowerCase()}/`}
                  key={key}
                >
                  <GatsbyImage
                    image={getImage(
                      item.node.frontmatter.featuredImage.picture
                    )}
                    alt={item.node.frontmatter.featuredImage.altPicutre}
                    className="main-alldestinations-countryListContinent-list-item-img"
                  />
                  <h4 className="main-alldestinations-countryListContinent-list-item-title">
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
