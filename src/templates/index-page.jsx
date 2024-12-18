import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Layout, IndexPageTemplate } from "../components";

export default function IndexPage({ location, data }) {
  const { frontmatter, fields } = data.markdownRemark;

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${frontmatter?.seo?.title}`}</title>
        <meta name="description" content={`${frontmatter?.seo?.description}`} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={`${frontmatter.seo?.title}`} />
        <meta property="og:url" content={`${fields.slug}`} />
      </Helmet>
      <IndexPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        subtitle={frontmatter.subtitle}
        buttonValue={frontmatter.bouttonValue}
        imageSection1={frontmatter.imageSection1}
        imageSection2={frontmatter.imageSection2}
        imageSection3={frontmatter.imageSection3}
        webCreationContent={frontmatter.sitewebCreation}
        marketingContent={frontmatter.webMarketing}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      fields {
        slug
      }
      frontmatter {
        seo {
          title
          description
        }
        webMarketing {
          title
          description
        }
        sitewebCreation {
          title
          description
        }
        description
        imageSection1 {
          childImageSharp {
            gatsbyImageData(formats: WEBP)
          }
        }
        imageSection2 {
          childImageSharp {
            gatsbyImageData(formats: WEBP)
          }
        }
        imageSection3 {
          childImageSharp {
            gatsbyImageData(formats: WEBP)
          }
        }
        title
        subtitle
        bouttonValue
      }
    }
  }
`;
