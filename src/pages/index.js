import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { OrderingForm } from "../components/OrderingForm";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <Layout>
        <section className="hero is-medium is-bold">
          <Img className="hero-image" fluid={data.markdownRemark.frontmatter.heroImage.childImageSharp.fluid}/>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-white is-size-2">
                {data.markdownRemark.frontmatter.hero}
              </h1>
            </div>
          </div>
        </section>
        <div className="container section">
          <div className="columns is-centered content">
            <div className="column is-clearfix">
              <div className="custom-box">
                <Img className="inline-image" fluid={data.markdownRemark.frontmatter.picture1.childImageSharp.fluid}/>
                <HTMLContent content={data.markdownRemark.html}/>
              </div>
            </div>
            <div className="column is-4">
              <OrderingForm
                active={data.markdownRemark.frontmatter.isFormActive}
                notActiveDescription={data.markdownRemark.frontmatter.notActiveDescription}
                description={data.markdownRemark.frontmatter.formDescription}
                heading={data.markdownRemark.frontmatter.formTitle}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: { eq: "index-page" }}) {
      html
      frontmatter {
        hero
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 351) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        picture1 {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        formTitle
        formDescription
        isFormActive
        notActiveDescription
      }
    }
  }
`;
