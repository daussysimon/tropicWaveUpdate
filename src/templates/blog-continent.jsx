import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout, BlogContinentComponent } from "../components";

// eslint-disable-next-line

const BlogContinent = ({ data }) => {
  const { frontmatter, fields, html } = data.markdownRemark;
  const list = data.allMarkdownRemark.edges;
  return (
    <Layout type="blog" backgroundImg={frontmatter.featuredImage}>
      <Helmet>
        <title>{`Tropicwave | ${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields.slug}`} />
      </Helmet>
      <BlogContinentComponent
        data={{ ...frontmatter, html: html }}
        list={list}
      />
    </Layout>
  );
};

export default BlogContinent;

export const pageQuery = graphql`
  query BlogContinentByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        seo {
          description
          title
        }
        title
        subtitle
        featuredImage {
          altPicutre
          picture {
            childMarkdownRemark {
              id
            }
            childImageSharp {
              gatsbyImageData(formats: WEBP)
            }
          }
        }
      }
      html
      fields {
        slug
      }
    }
  }
`;
