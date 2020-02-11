import React from 'react';
import styled from 'styled-components';
import configs from 'configs';
import _ from 'lodash';
import { translate } from 'helpers/translate.js';
import translations from 'translations';
import PageContainerComponent from 'components/PageContainerComponent';
import Head from 'next/head';
import jQuery from 'jquery';
import { Link } from '/routes';
import classNames from 'classnames';
import { padding } from 'polished';


const $ = jQuery;

// const getLocaleObject = (requestedLocale) => {
//     const requestedLocaleObject = _.find(translations, {
//         _locale: {
//             id: requestedLocale
//         }
//     });

//     if (requestedLocaleObject !== undefined) {
//         if (process.env.ENV === 'production') {
//             // check to see if requestedLocaleObject has been disabled
//             if (requestedLocaleObject._locale.disabled === true) {
//                 return undefined
//             }
//         }
//     }

//     return requestedLocaleObject;
// }

const ThisPageContainerComponent = styled(PageContainerComponent)`

`;

export default class extends React.Component {
    state = { amCommitteesInfo: [
        {"key":"br","value":"BR-BCOL (Brazil)"},
        {"key":"ca","value":"CA-BCOL (Canada)"},
        {"key":"cl","value":"CL-BCOL (Chile)"},
        {"key":"mx","value":"MX-BCOL (Mexico)"},
        {"key":"us","value":"US-BCOL (United States)"}                
        ], 
        asiaCommitteesInfo: [
            {"key":"au","value":"AU-BCOL (Australia)","href":"/en-au/home"},
            {"key":"bd","value":"BD-BCOL (Bangladesh)","href":"https://bcolbd.org/"},
            {"key":"cn","value":"CN-BCOL (China)","href":"/en-cn/home"},
            {"key":"hk","value":"HK-BCOL (Hong Kong)","href":"/en-hk/home"},
            {"key":"id","value":"ID-BCOL (Indonesia)","href":"/en-id/home"},
            {"key":"in","value":"IN-BCOL (India)","href":"/en-in/home"},
            {"key":"jp","value":"JP-BCOL (Japan)","href":"/en-jp/home"},
            {"key":"kh","value":"KH-BCOL (Cambodia)","href":"/en-kh/home"},
            {"key":"kr","value":"KR-BCOL (South Korea)","href":"/en-kr/home"},
            {"key":"mn","value":"MN-BCOL (Mongolia)","href":"/en-mn/home"},
            {"key":"my","value":"MY-BCOL (Malaysia)","href":"/en-my/home"},
            {"key":"nz","value":"NZ-BCOL (New Zealand)","href":"/en-nz/home"},
            {"key":"ph","value":"PH-BCOL (Philippines)","href":"/en-ph/home"},
            {"key":"pk","value":"PK-BCOL (Pakistan)","href":"https://www.rnssol.com/PAK-BCOL"},
            {"key":"sg","value":"SG-BCOL (Singapore)","href":"/en-sg/home"},
            {"key":"th","value":"TH-BCOL (Thailand)","href":"/en-th/home"},
            {"key":"tw","value":"TW-BCOL (Taiwan)","href":"/en-tw/home"},
            {"key":"vn","value":"VN-BCOL (Vietnam)","href":"/en-vn/home"}            
        ], 
        euCommitteesInfo: [
            {"key":"ch","value":"CH-BCOL (Switzerland)"},
            {"key":"cz","value":"CZ-BCOL (Czechia)"},
            {"key":"de","value":"DE-BCOL (Germany)"},
            {"key":"ee","value":"EE-BCOL (Estonia)"},
            {"key":"et","value":"ET-BCOL (Ethiopia)"},
            {"key":"fr","value":"FR-BCOL (France)"},
            {"key":"gb","value":"GB-BCOL (United Kingdom)"},
            {"key":"hu","value":"HU-BCOL (Hungary)"},
            {"key":"ie","value":"IE-BCOL (Ireland)"},
            {"key":"nl","value":"NL-BCOL (Netherlands)"},
            {"key":"pl","value":"PL-BCOL (Poland)"},
            {"key":"ru","value":"RU-BCOL (Russia)"},
            {"key":"sk","value":"SK-BCOL (Slovakia)"},
            {"key":"ua","value":"UA-BCOL (Ukraine)"}            
        ] }
    static async getInitialProps({ req, res, query }) {
        return { query }
    }

    // translate = (t) => translate(t, 'home', this.props.query.locale);

    componentDidMount = () => {
        /*!
        * parallax.js v1.4.2 (http://pixelcog.github.io/parallax.js/)
        * @copyright 2016 PixelCog, Inc.
        * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
        */

        !function (t, i, e, s) { function o(i, e) { var h = this; "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this, e)), this.$element = t(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src")); var r = (this.position + "").toLowerCase().match(/\S+/g) || []; if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), this.positionX != s && (r[0] = this.positionX.toLowerCase()), this.positionY != s && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this; if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this; this.$mirror = t("<div />").prependTo("body"); var a = this.$element.find(">.parallax-slider"), n = !1; 0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }), this.$slider.addClass("parallax-slider").one("load", function () { h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o.isSetup || o.setup(), o.sliders.push(h), o.isFresh = !1, o.requestRender() }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load") } function h(s) { return this.each(function () { var h = t(this), r = "object" == typeof s && s; this == i || this == e || h.is("body") ? o.configure(r) : h.data("px.parallax") ? "object" == typeof s && t.extend(h.data("px.parallax"), r) : (r = t.extend({}, h.data(), r), h.data("px.parallax", new o(this, r))), "string" == typeof s && ("destroy" == s ? o.destroy(this) : o[s]()) }) } !function () { for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !i.requestAnimationFrame; ++s)i.requestAnimationFrame = i[e[s] + "RequestAnimationFrame"], i.cancelAnimationFrame = i[e[s] + "CancelAnimationFrame"] || i[e[s] + "CancelRequestAnimationFrame"]; i.requestAnimationFrame || (i.requestAnimationFrame = function (e) { var s = (new Date).getTime(), o = Math.max(0, 16 - (s - t)), h = i.setTimeout(function () { e(s + o) }, o); return t = s + o, h }), i.cancelAnimationFrame || (i.cancelAnimationFrame = function (t) { clearTimeout(t) }) }(), t.extend(o.prototype, { speed: .2, bleed: 0, zIndex: -100, iosFix: !0, androidFix: !0, position: "center", overScrollFix: !1, refresh: function () { this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight; var t = o.winHeight, i = o.docHeight, e = Math.min(this.boxOffsetTop, i - t), s = Math.max(this.boxOffsetTop + this.boxHeight - t, 0), h = this.boxHeight + (e - s) * (1 - this.speed) | 0, r = (this.boxOffsetTop - e) * (1 - this.speed) | 0; if (h * this.aspectRatio >= this.boxWidth) { this.imageWidth = h * this.aspectRatio | 0, this.imageHeight = h, this.offsetBaseTop = r; var a = this.imageWidth - this.boxWidth; this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -a : isNaN(this.positionX) ? -a / 2 | 0 : Math.max(this.positionX, -a) } else { this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0; var a = this.imageHeight - h; this.offsetBaseTop = "top" == this.positionY ? r : "bottom" == this.positionY ? r - a : isNaN(this.positionY) ? r - a / 2 | 0 : r + Math.max(this.positionY, -a) } }, render: function () { var t = o.scrollTop, i = o.scrollLeft, e = this.overScrollFix ? o.overScroll : 0, s = t + o.winHeight; this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({ transform: "translate3d(0px, 0px, 0px)", visibility: this.visibility, top: this.mirrorTop - e, left: this.mirrorLeft, height: this.boxHeight, width: this.boxWidth }), this.$slider.css({ transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: this.offsetTop, left: this.offsetLeft, height: this.imageHeight, width: this.imageWidth, maxWidth: "none" }) } }), t.extend(o, { scrollTop: 0, scrollLeft: 0, winHeight: 0, winWidth: 0, docHeight: 1 << 30, docWidth: 1 << 30, sliders: [], isReady: !1, isFresh: !1, isBusy: !1, setup: function () { if (!this.isReady) { var s = t(e), h = t(i), r = function () { o.winHeight = h.height(), o.winWidth = h.width(), o.docHeight = s.height(), o.docWidth = s.width() }, a = function () { var t = h.scrollTop(), i = o.docHeight - o.winHeight, e = o.docWidth - o.winWidth; o.scrollTop = Math.max(0, Math.min(i, t)), o.scrollLeft = Math.max(0, Math.min(e, h.scrollLeft())), o.overScroll = Math.max(t - i, Math.min(t, 0)) }; h.on("resize.px.parallax load.px.parallax", function () { r(), o.isFresh = !1, o.requestRender() }).on("scroll.px.parallax load.px.parallax", function () { a(), o.requestRender() }), r(), a(), this.isReady = !0 } }, configure: function (i) { "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this.prototype, i)) }, refresh: function () { t.each(this.sliders, function () { this.refresh() }), this.isFresh = !0 }, render: function () { this.isFresh || this.refresh(), t.each(this.sliders, function () { this.render() }) }, requestRender: function () { var t = this; this.isBusy || (this.isBusy = !0, i.requestAnimationFrame(function () { t.render(), t.isBusy = !1 })) }, destroy: function (e) { var s, h = t(e).data("px.parallax"); for (h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)this.sliders[s] == h && this.sliders.splice(s, 1); t(e).data("px.parallax", !1), 0 === this.sliders.length && (t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o.isSetup = !1) } }); var r = t.fn.parallax; t.fn.parallax = h, t.fn.parallax.Constructor = o, t.fn.parallax.noConflict = function () { return t.fn.parallax = r, this }, t(function () { t('[data-parallax="scroll"]').parallax() }) }(jQuery, window, document);
    }

    componentWillUnmount = () => {
        $('.parallax-mirror').remove();
    }

    render() {
        // const locale = this.props.query.locale;

        return (
            <ThisPageContainerComponent>
                <Head>
                    <title>International Blockchain Olympiad</title>
                    <meta name="description" content="International Blockchain Olympiad is a multidisciplinary design and building competition. IBCOL 2019 invites students from around the world to solve real-world challenges through decentralised applications." />
                    {/* <meta name="keywords" content={this.translate('keywords')} /> */}
                    {/* <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} /> */}
                    <meta property="og:type" content="website" />
                    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script> */}
                </Head>

                <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="/static/images/bg-international-blockchain-olympiad-(ibcol).jpg" data-natural-width="3000" data-natural-height="2000" data-position-y="center">
                    <div className="grid-overlay">
                        <div></div>
                    </div>
                    <div className="home-content">
                        <div className="row home-content__main">
                            <h1>
                                Will you sit on the sidelines or get in on the game?
                            </h1>
                            <br />
                            <br />
                            <h3 style={{ "fontSize": "2.6rem" }}>
                                Join the world’s largest gathering of budding and reigning experts in applied blockchain and cryptography across academia, industry, government 
                            </h3>
                            <h3 style={{ "fontSize": "2.6rem" }}>
                                WHAT IS YOUR BACKGROUND?
                            </h3>
                            <div className="home-content__button">
                                <a href="#sponsors" className="btn btn--primary btn--large">
                                    I'M A COMPANY
                                </a>
                                <a href="#committees" className="btn btn--large">
                                    I'M A STUDENT
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sponsors">
                    <div className="row">
                        <div className="block-1-3">
                            <div className="col-block">
                                <a href="https://www.hsbc.com.hk" target="_blank">
                                    <img style={{"max-height":"450px"}} src="/static/images/IBCOL-2020-Organiser-HSBC.png"/>
                                </a>
                            </div>
                             <div className="col-block">
                                 <a href="https://www.cb.cityu.edu.hk" target="_blank">
                                    <img style={{"max-height":"450px"}} src="/static/images/IBCOL-2020-Organiser-CityU-CoB.png"/>
                                </a>
                            </div>
                            <div className="col-block">
                                <a href="https://www.hkbcs.org" target="_blank">
                                    <img style={{"max-height":"450px"}} src="/static/images/IBCOL-2020-Organiser-HKBCS.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>    
                {/* Start of Vision & Mission Section */}
                <section className="s-section target-section" id="about">
                <div className="row section-header">
                        <h1>About IBCOL</h1>
                    </div>
                    <div className="row">
                    <p>The <b>I</b>nternational <b>B</b>lock<b>C</b>hain <b>OL</b>ympiad (<b>IBCOL</b>) invites current and recent students to solve real-world problems with decentralized applications, built with blockchain or distributed ledger technology. This year is the third edition of IBCOL, built on the momentum generated from <a href="/en-hk/ibcol/2018" target="_blank">IBCOL 2018</a> and <a href="/en-hk/ibcol/2019" target="_blank">IBCOL 2019</a></p>
                        <div className="block-1-3 icon">
                            <div className="col-block">
                                <div className="countries">
                                        <i class='material-icons blue'>work</i> <i class='material-icons black'>work</i> <i class='material-icons red'>work</i> <br/> <i class='material-icons yellow'>business_center</i> <i class='material-icons green'>business_center</i>
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>Business Case Competition</h5>
                                            <p>Contestants define their own problem scopes and develop plans to solve it</p>
                                        </div>
                                </div>
                            </div>
                             <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: "<!-- Academic Conference --> <i class='material-icons blue'>event_seat</i> <i class='material-icons black'>event_seat</i> <i class='material-icons red'>event_seat</i> <br> <i class='material-icons yellow'>airplay</i> <i class='material-icons green'>airplay</i>" }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>Academic Conference</h5>
                                            <p>Contestants are expected to submit a whitepaper proposing their solution</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                         <div dangerouslySetInnerHTML={{ __html: "<!-- Technical Hackathon (optional) --> <i class='material-icons blue'>laptop</i> <i class='material-icons black'>developer_mode</i> <i class='material-icons red'>laptop_chromebook</i> <br> <i class='material-icons yellow'>laptop_windows</i> <i class='material-icons green'>laptop_mac</i>"}} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>Technical Hackathon (optional)</h5>
                                            <p>Contestants may build something to impress investors and employers</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of Vision & Mission Section */}


                {/* Start of Objective Section */}
                <section className="s-section target-section">
                <div className="row section-header">
                        <h1>Why now</h1>
                    </div>
                    <div className="row">

                        <div className="block-1-3 icon">
                            <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: "<!-- Countless Use Cases --> <i class='material-icons blue'>developer_mode</i> <i class='material-icons yellow'>widgets</i> <i class='material-icons black'>devices</i> <br> <i class='material-icons green'>storage</i> <i class='material-icons red'>dock</i> <i class='material-icons purple'>laptop_mac</i>" }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>Countless Use Cases</h5>
                                            <p>Blockchain will generate over $24 trillion HKD by 2030 across industry verticals</p>
                                        </div>
                                </div>
                            </div>
                             <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: "<!-- Huge Demand for Talent --> <i class='material-icons blue'>face</i> <i class='material-icons yellow'>face</i> <i class='material-icons black'>face</i> <br> <i class='material-icons green'>face</i> <i class='material-icons red'>face</i> <i class='material-icons purple'>face</i>" }} />
                                        <div className="countriesName">
                                        <h5 style={{ "margin-top": "1.2rem" }}>Huge Demand for Talent</h5>
                                            <p>There is a lack of qualified blockchain professionals around the world</p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                         <div dangerouslySetInnerHTML={{ __html: "<!-- Renewed Interest in Blockchain --> <i class='material-icons blue'>show_chart</i> <i class='material-icons black'>account_balance</i> <i class='material-icons red'>local_hospital</i> <br> <i class='material-icons yellow'>local_shipping</i> <i class='material-icons green'>color_lens</i>"}} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>Renewed Interest in Blockchain</h5>
                                            <p>While cryptocurrencies waned, business and governments continued to explore</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End of Objective Section */}

                {/* Start of Countries Section */}
                <section className="s-section target-section" id="committees">
                    <div className="row section-header">
                            <h1>Blockchain Olympiad Committees</h1>
                    </div>
                    <div className="row">
                        <p>IBCOL 2020 is a competition among nominated delegates from around the world. If you would like to participate, find out more from the organizing committee of your region. If you would like to propose a new committee or join one, please <a href="mailto:pmo@ibcol.org?subject=X-BCOL">let us know</a> today!</p>
                        <div className="block-1-3 block-tab-full">
                            <div className="col-block">
                            <h5 style={{ "margin-top": "1.2rem" }}>Americas</h5>
                            {this.state.amCommitteesInfo.map((content, index) => {
                                return <div className="sm">
                                    <span className={classNames("flag-icon", `flag-icon-${content.key}`)}></span>
                                    {/*href={`/en-${content.key}/home`}*/}
                                <a style={{padding:"0 0 0 10px"}}  target="_blank" className="sm-title flag">{content.value}</a>
                                    </div>
                                })}
                            </div>
                            <div className="col-block">                            
                            <h5 style={{ "margin-top": "1.2rem" }}>Asia-Pacific</h5>
                            {this.state.asiaCommitteesInfo.map((content, index) => {
                                return <div className="sm">
                                    <span className={classNames("flag-icon", `flag-icon-${content.key}`)}></span>
                                    {/*href={`/en-${content.key}/home`}*/}
                                    {content.key =="hk" ||content.key =="in" || content.key =="pk" || content.key =="bd" ? (
                                    <a style={{padding:"0 0 0 10px"}} href={content.href} target="_blank" className="sm-title flag">{content.value}</a>
                                    ):(<a style={{padding:"0 0 0 10px"}} target="_blank" className="sm-title flag">{content.value}</a>
                                    )}
                                    </div>
                                })}
                            </div>
                            <div className="col-block">
                            <h5 style={{ "margin-top": "1.2rem" }}>Europe/Middle-East/Africa</h5>
                            {this.state.euCommitteesInfo.map((content, index) => {
                                return <div className="sm">
                                    <span className={classNames("flag-icon", `flag-icon-${content.key}`)}></span>
                                    {/*href={`/en-${content.key}/home`}*/}
                                <a style={{padding:"0 0 0 10px"}}  target="_blank" className="sm-title flag">{content.value}</a>
                                    </div>
                                })}
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/* End of Countries Section */}

                {/* Start of Download Section */}
                <section className="s-section target-section" id="download">
                    <div className="row section-header">
                        <div className="col-block">
                            <h1>Download</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <p>PR Kit</p>
                        </div>
                        <div className="col-block">
                            <a className="download">Download</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-block">
                            <p>Sponsorship Kit</p>
                        </div>
                        <div className="col-block">
                            <a className="download">Download</a>
                        </div>
                    </div>
                </section>
                {/* End of Download Section */}

                {/* Start of Contact Section */}
                <section className="s-section target-section" id="contact">
                    <div className="row section-header">
                        <div className="col-block">
                            <h1>Contact</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="block-1-2 block-tab-full">
                            <div className="col-block">
                                <div className="item-process__text">
                                    <p>IBCOL Organising Committee<br />International Blockchain Olympiad
                                    <br/>333A, 3/F, Core Building 2,<br />1W Science Park Avenue,<br />Hong Kong
                                    <br/>Email: <a href="mailto:pmo@ibcol.org?subject=IBCOL">pmo@ibcol.org</a></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                {/* End of Contact Section */}

                <section className="s-section target-section">

                </section>
            </ThisPageContainerComponent>

        )
    }
}