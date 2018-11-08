import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Columns from "../components/Columns";
import CMSImage from "../components/CMSImage";

export const HistoryPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      description,
                                      intro,
                                      main,
                                      testimonials,
                                      fullImage,
                                      columns
                                    }) => (
  <>
    <section className="hero is-medium is-bold">
      <CMSImage
        className="hero-image"
        imageInfo={image}
      />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white is-size-2">
            {title}
          </h1>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs}/>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile">
                      <div className="tile is-parent is-vertical">
                        <article className="tile is-child">
                          <CMSImage
                            imageInfo={main.image1}
                          />
                        </article>
                      </div>
                      <div className="tile is-parent">
                        <article className="tile is-child">
                          <CMSImage
                            imageInfo={main.image2}
                          />
                        </article>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <CMSImage
                          imageInfo={main.image3}
                        />
                      </article>
                    </div>
                  </div>
                </div>
                <Testimonials testimonials={testimonials}/>
                <div
                  className="full-width-image-container"
                  style={{ backgroundImage: `url(${fullImage.childImageSharp ? fullImage.childImageSharp.fluid.src : fullImage})` }}

                />
                <h2 className="has-text-weight-semibold is-size-2">
                  {columns.heading}
                </h2>
                <p className="is-size-5">{columns.description}</p>
                <Columns data={columns.columns}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const HistoryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HistoryPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        columns={frontmatter.columns}
      />
    </Layout>
  );
};

HistoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default HistoryPage;

export const HistoryPageQuery = graphql`
  query HistoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        intro {
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        columns {
          heading
          description
          columns {
            description
            items
            title
            big
          }
        }
      }
    }
  }
`;
