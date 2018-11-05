import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { HTMLContent } from "../components/Content";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <Layout>
        <section className="hero is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-white">
                {data.markdownRemark.frontmatter.hero}
              </h1>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="card article">
            <div className="card-content">
              <div className="content article-body is-clearfix">
                <Img className="inline-image" fluid={data.imageOne.childImageSharp.fluid}/>
                <HTMLContent content={data.markdownRemark.html} />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    imageOne: file(relativePath: {eq: "DSC_0129.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid
          }
      }
    }
    markdownRemark(frontmatter: {templateKey: { eq: "index-page" }}) {
      html
      frontmatter {
        hero
      }
    }
  }
`;
