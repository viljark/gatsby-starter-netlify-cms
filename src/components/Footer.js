import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";

class Footer extends Component {
  render() {
    const { footer } = this.props;
    const getFooter = (data) => {
      return data.allMarkdownRemark.edges[0].node.frontmatter.footer;
    };
    return (
      footer
        ? <FooterTemplate {...footer}/>
        : <StaticQuery
          query={graphql`
          query FooterQuery {
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
        `}
          render={data => (
            <FooterTemplate {...getFooter(data)}/>
          )}
        />
    );
  }
}

export class FooterTemplate extends Component {
  render() {
    const {
      text,
      email,
      telephone,
      telephoneName,
      telephone2,
      telephone2Name,
      address
    } = this.props;
    return (
      <div className="">
        <footer className="footer">
          <div className="content is-small has-text-centered">
            <div>
              <strong>{text}</strong>
              <p className="is-marginless">tel: <a href={`tel:${telephone}`}>{telephoneName}</a></p>
              <p className="is-marginless">tel: <a href={`tel:${telephone2}`}>{telephone2Name}</a></p>
              <p className="is-marginless">e-mail: <a href={`mailto:${email}`}>{email}</a></p>
              <p className="is-marginless">{address}</p>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}

export default Footer;
