import React from 'react';
import styled from 'styled-components';
import configs from 'configs';
import _ from 'lodash';
import { translate } from 'helpers/translate.js';
import translations from 'translations';
import { transparentize } from 'polished'
import { Link } from '/routes';
import PageContainerComponent from 'components/PageContainerComponent';
import Head from 'next/head';
import Countdown from 'react-countdown-now';
import jQuery from 'jquery';
import { Collapse } from 'react-collapse';

const $ = jQuery;

const getLocaleObject = (requestedLocale) => {
    const requestedLocaleObject = _.find(translations, {
        _locale: {
            id: requestedLocale
        }
    });

    if (requestedLocaleObject !== undefined) {
        if (process.env.ENV === 'production') {
            // check to see if requestedLocaleObject has been disabled
            if (requestedLocaleObject._locale.disabled === true) {
                return undefined
            }
        }
    }

    return requestedLocaleObject;
}

const renderer = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
    return <span>{days} Days, {hours} Hrs, {minutes} Mins, {seconds} Secs</span>;

};

const ThisPageContainerComponent = styled(PageContainerComponent)`

`;

export default class extends React.Component {
    static async getInitialProps({ req, res, query }) {
        console.log(query);
        return { query }
    }

    translate = (t) => translate(t, 'home', this.props.query.locale);

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
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.state = { collapse: false, collapse2: false, collapse3: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    toggle2() {
        this.setState(state => ({ collapse2: !state.collapse2 }));
    }

    toggle3() {
        this.setState(state => ({ collapse3: !state.collapse3 }));
    }
    render() {
        const locale = this.props.query.locale;

        return (
            <ThisPageContainerComponent>
                <Head>
                    <title>{this.translate('siteTitle')} {this.translate('titleSeparator')} {this.translate('pageTitle')}</title>
                    <meta name="description" content={this.translate('seoDescription')} />
                    <meta name="keywords" content={this.translate('keywords')} />
                    <meta property="og:image" content={`${configs.url}${this.translate('ogImage')}`} />
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
                                {this.translate('mainHeading')}
                            </h1>
                            <br />
                            <br />
                            <h3 style={{ "fontSize": "2.6rem" }}>
                                {this.translate('subHeading')}
                            </h3>
                            <div className="home-content__button">
                                <a href="../program" className="btn btn--primary btn--large">
                                    {this.translate('leftBtn')}
                                </a>
                                <a href="../rules" className="btn btn--large">
                                    {this.translate('rightBtn')}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="block-1-3">
                            <div className="col-block">
                                <a href={this.translate('section05.link1')} target="_blank">
                                    <img style={{"max-height":"450px"}} src={this.translate('section05.icon1')}/>
                                </a>
                            </div>
                             <div className="col-block">
                                 <a href={this.translate('section05.link2')} target="_blank">
                                    <img style={{"max-height":"450px"}} src={this.translate('section05.icon2')}/>
                                </a>
                            </div>
                            <div className="col-block">
                                <a href={this.translate('section05.link3')} target="_blank">
                                    <img style={{"max-height":"450px"}} src={this.translate('section05.icon3')}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s-section target-section">
                    <div className="row section-header">
                        <h1>{this.translate('section01.title')}</h1>
                    </div>
                    <div className="row">
                    <p dangerouslySetInnerHTML={{ __html: this.translate('section01.contentHTML') }} />
                        <div className="block-1-3 icon">
                            <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section01.icon1') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section01.heading1')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section01.desc1') }}/>
                                        </div>
                                </div>
                            </div>
                             <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section01.icon2') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section01.heading2')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section01.desc2') }}/>
                                        </div>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                         <div dangerouslySetInnerHTML={{ __html: this.translate('section01.icon3') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section01.heading3')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section01.desc3') }}/>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s-section target-section">
                    <div className="row section-header">
                        <h1>{this.translate('section02.title')}</h1>
                    </div>
                    <div className="row">
                        <div className="block-1-3 icon">
                            <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section02.icon1') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section02.heading1')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section02.desc1') }}/>
                                        </div>
                                </div>
                            </div>
                             <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section02.icon2') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section02.heading2')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section02.desc2') }}/>

                                        </div>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                         <div dangerouslySetInnerHTML={{ __html: this.translate('section02.icon3') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section02.heading3')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section02.desc3') }}/>

                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                        
                <section className="s-section target-section">
                    <div className="row section-header">
                            <h1>{this.translate('section03.title')}</h1>
                        <div className="row">
                            <img src={this.translate('section03.mainImage')}/>
                            <br />
                            <br />
                            <div className="historyBtn">
                                 <a className="btn btn--primary center" href="program">{this.translate('section03.btnText')} </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="s-section target-section">
                    <div className="row section-header">
                        <h1>{this.translate('section04.title')}</h1>
                    </div>
                    <div className="row">
                        <div className="block-1-3 icon">
                            <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section04.icon1') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section04.heading1')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section04.desc1') }}/>
                                        </div>
                                </div>
                            </div>
                             <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section04.icon2') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section04.heading2')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section04.desc2') }}/>
                                        </div>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                         <div dangerouslySetInnerHTML={{ __html: this.translate('section04.icon3') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section04.heading3')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section04.desc3') }}/>
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="historyBtn">
                                 <a className="btn btn--primary center" href={this.translate('section04.btnLink')}>{this.translate('section04.btnText')} </a>
                         </div> */}
                    </div>
                </section>
                <section className="s-section target-section last">
                    <div className="row section-header">
                        <h1>{this.translate('section06.title')}</h1>
                    </div>
                    <div className="row">
                        <div className="block-1-3 icon">
                            <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section06.icon1') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section06.heading1')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section06.desc1HTML') }}/>
                                        </div>
                                </div>
                            </div>
                             <div className="col-block">
                                <div className="countries">
                                        <div dangerouslySetInnerHTML={{ __html: this.translate('section06.icon2') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section06.heading2')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section06.desc2HTML') }}/>
                                        </div>
                                </div>
                            </div>
                            <div className="col-block">
                                <div className="countries">
                                         <div dangerouslySetInnerHTML={{ __html: this.translate('section06.icon3') }} />
                                        <div className="countriesName">
                                            <h5 style={{ "margin-top": "1.2rem" }}>{this.translate('section06.heading3')}</h5>
                                            <p dangerouslySetInnerHTML={{ __html: this.translate('section06.desc3HTML') }}/>
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="historyBtn">
                                 <a className="btn btn--primary center" href={this.translate('section06.btnLink')}>{this.translate('section06.btnText')} </a>
                         </div> */}
                    </div>
                </section>


            </ThisPageContainerComponent>
        )
    }
}

