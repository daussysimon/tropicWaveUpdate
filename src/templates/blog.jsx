import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout, BlogPageTemplate } from "../components";

// eslint-disable-next-line

const BlogPage = ({ location, data }) => {
  const { frontmatter, fields } = data.markdownRemark;
  return (
    <Layout
      location={location}
      type="blog"
      fullHeight={true}
      backgroundImg={frontmatter.featuredImage}
    >
      <Helmet>
        <title>{`Tropicwave | ${frontmatter?.header?.title}`}</title>
        {/* <meta name="description" content={`${frontmatter?.seo?.description}`} /> */}
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.header?.title}`} />
        <meta property="og:url" content={`${fields.slug}`} />
      </Helmet>
      <BlogPageTemplate data={frontmatter} />
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
    markdownRemark(frontmatter: { templateKey: { eq: "blog" } }) {
      frontmatter {
        header {
          title
          subtitle
          backgroundImage {
            childImageSharp {
              gatsbyImageData(formats: WEBP)
            }
          }
        }
        aboutUs {
          title
          description
          picture {
            alt
            img {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
          }
        }
        travel {
          title
          description
          button {
            link
            title
          }
          picture {
            alt
            img {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
          }
        }
        agency {
          title
          description
          button {
            link
            title
          }
          picture {
            alt
            img {
              childImageSharp {
                gatsbyImageData(formats: WEBP)
              }
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
