import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { OrderingForm } from "../components/OrderingForm";
import CMSImage from "../components/CMSImage";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Helmet from "react-helmet";

export class IndexPageTemplate extends React.Component {
  render() {
    const { heroImage, hero, picture1, html, isFormActive, notActiveDescription, formDescription, formTitle, contentComponent, footer, disabledWeeks } = this.props;
    const PageContent = contentComponent || Content;
    return (
      <>
		  <Helmet>
			  <link rel="canonical" href={`https://mesilasemad.ee`}/>
		  </Helmet>
        <section className="hero is-medium is-bold">
          <CMSImage className="hero-image" imageInfo={heroImage}/>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-white is-size-2 is-size-3-mobile">
                {hero}
              </h1>
            </div>
          </div>
        </section>
        <div className="container section">
          <div className="columns is-centered content">
            <div className="column is-clearfix">
              <CMSImage className="inline-image" imageInfo={picture1}/>
              <PageContent content={html}/>
            </div>
            <div className="column is-4">
              <OrderingForm
                active={isFormActive}
                notActiveDescription={notActiveDescription}
                description={formDescription}
                heading={formTitle}
				disabledWeeks={disabledWeeks}
              />
            </div>
          </div>
        </div>
        <Footer footer={footer}/>
      </>
    );
  }
}



const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        html={html}
        {...frontmatter}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
	    disabledWeeks
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages\\/index/"}}) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            footer {
              text
              telephone
              telephoneName
              telephone2
              telephone2Name
              email
              address
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;