import React from "react";
import styled from "styled-components";

import configs from "configs";

import { media, style } from "helpers/styledComponents.js";

import { translate } from "helpers/translate.js";
import { transparentize } from "polished";

import { Link } from "/routes";

import PageContainerComponent from "components/PageContainerComponent";

import Head from "next/head";

import classNames from "classnames";

// const pagePadding = {
//   xSmall: style.dimension.normal.pagePadding.xSmall,
//   small: style.dimension.normal.pagePadding.small,
//   medium: style.dimension.normal.pagePadding.medium,
//   large: style.dimension.normal.pagePadding.large,
//   xLarge: style.dimension.normal.pagePadding.xLarge,
//   xxLarge: style.dimension.normal.pagePadding.xxLarge
// }

const ThisPageContainerComponent = styled(PageContainerComponent)``;

export default class extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  translate = t => translate(t, "contact", this.props.query.locale);

  componentWillMount() {
    let communitiesInfo = [];
    this.translate("officialCommunitiesInfo").forEach((info, index) => {
      if (index % 2 === 0) {
        communitiesInfo.push([
          this.translate("officialCommunitiesInfo")[index],
          this.translate("officialCommunitiesInfo")[index + 1]
        ]);
      }
    });
    this.setState({ communitiesInfo: communitiesInfo });

    this.setState({ XBCOLContactInfo: this.translate("XBCOL.headInfo") });

    this.setState({
      schoolChapContactInfo: this.translate("schoolChapter.schoolInfo")
    });
  }

  render() {
    const name = {
      marginTop: "40px",
      marginBottom: "0px",
      color: "#3b78d8",
      fontSize: "24px"
    };

    const position = {

      marginBottom: "40px",
      fontSize: "18px"
    };

    const getXBCOLContactInfo = this.state.XBCOLContactInfo.map(function(
      info,
      index
    ) {
      console.log(info, index);
      return (
        <li className="col-block" key={index}>
          <h4 className="list-title">{info.title}:</h4>
          <h4 className="item-title">
            {info.linkedInUrl.length > 0 ? (
              <a href={info.linkedInUrl} target="_blank">
                {info.name}
              </a>
            ) : (
              <a>{info.name}</a>
            )}
          </h4>
        </li>
      );
    });
    const getSchoolChapContactInfo = this.state.schoolChapContactInfo.map(
      function(info, index) {
        console.log(info, index);
        return (
          <li className="col-block sm" key={index}>
            <h4 className="list-title">{info.fName}:</h4>
            {info.facebookUrl.length > 0 && (
              <a href={info.facebookUrl} target="_blank" className="sm-icon">
                <img className="png-fb-icon" src="/static/sm/fb-blue.png" />
              </a>
            )}
            {info.facebookUrl.length > 0 && (
              <a href={info.telegramUrl} target="_blank" className="sm-icon">
                <img className="png-tg-icon" src="/static/sm/tg-blue.png" />
              </a>
            )}
            <br />
            <h4>
              <a
                href={info.head1.linkedInUrl}
                target="_blank"
                className="list-item"
              >
                {info.head1.name}
              </a>
              {info.head2.name.length > 0 && (
                <a href={info.head2.linkedInUrl} target="_blank">
                  , {info.head2.name}
                </a>
              )}
            </h4>
          </li>
        );
      }
    );

    return (
      <ThisPageContainerComponent>
        <Head>
          <title>
            {this.translate("siteTitle")} {this.translate("titleSeparator")}{" "}
            {this.translate("pageTitle")}
          </title>
          <meta name="description" content={this.translate("seoDescription")} />
          <meta name="keywords" content={this.translate("keywords")} />
          <meta
            property="og:image"
            content={`${configs.url}${this.translate("ogImage")}`}
          />
          <meta property="og:type" content="website" />
        </Head>

        <section className="s-section target-section first">
          <div className="row section-header">
            <div className="col-full">
              <h3 className="subhead">{this.translate("subhead")}</h3>
            </div>
          </div>
        </section>

        <section className="s-section target-section">
          <div className="row">
            <div className="block-1-2 block-tab-full">
              <div className="col-block">
                <div className="item-process__text">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: this.translate("mailingAddressHTML")
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
         </section>





         <section className="s-section target-section last">
         <div className="row">
            <h3>HK-BCOL OC20</h3>
            <p>Hong Kong Blockchain Olympiad 2020 Organising Committee</p>
            <div className="block-1-2 block-tab-full">
              <div className="col-block">


                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/1.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Mr. Kavis Cho</p>
                    <p style={position}>President</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/2.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Mr. Jacky Chan</p>
                    <p style={position}>Secretary General</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/3.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joyce Wang</p>
                    <p style={position}>Student Relations</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/4.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joanne Lan</p>
                    <p style={position}>Public Relations</p>
                  </div>
                </div>

                <div className="row" style={{marginTop:"20px"}}>
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/5.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Mr. Kavis Cho</p>
                    <p style={position}>President</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/6.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Mr. Jacky Chan</p>
                    <p style={position}>Secretary General</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/7.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joyce Wang</p>
                    <p style={position}>Student Relations</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/8.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joanne Lan</p>
                    <p style={position}>Public Relations</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/9.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joyce Wang</p>
                    <p style={position}>Student Relations</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/10.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joanne Lan</p>
                    <p style={position}>Public Relations</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/11.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joyce Wang</p>
                    <p style={position}>Student Relations</p>
                  </div>
                </div>

                <div className="row">
                  <img
                    style={{ width: "150px" }}
                    src="/static/images/hkcontact/12.png"
                  ></img>

                  
                  <div className="col-block"   style={{ width: "200px" }}>
                    <p style={name}>Ms. Joanne Lan</p>
                    <p style={position}>Public Relations</p>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </section>
      </ThisPageContainerComponent>
    );
  }
}
