import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Layout, BlogPostComponent } from "../components";

// eslint-disable-next-line

const BlogPost = ({ data }) => {
  const { frontmatter, fields, html } = data?.markdownRemark;

  return (
    <Layout type="article">
      <Helmet>
        <title>{`Tropicwave | ${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields?.slug}`} />
      </Helmet>
      <BlogPostComponent data={{ ...frontmatter, html, ...fields }} />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        seo {
          description
          title
        }
        title
        subtitle
        description
        informations {
          title
          valeur
        }
        templateKey
        date
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
        pays
      }
      html
      fields {
        slug
      }
    }
  }
`;
