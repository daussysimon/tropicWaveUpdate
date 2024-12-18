import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout, BlogCountryComponent } from "../components";

// eslint-disable-next-line

const BlogCountry = ({ data }) => {
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
      <BlogCountryComponent data={{ ...frontmatter, html: html }} list={list} />
    </Layout>
  );
};

export default BlogCountry;

export const pageQuery = graphql`
  query BlogContry($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        seo {
          description
          title
        }
        title
        subtitle

        continent
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
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slugPerso
            featuredImage {
              altPicutre
              picture {
                childImageSharp {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            seo {
              description
              title
            }
            title
            templateKey
            subtitle
            pays
          }
        }
      }
    }
  }
`;
