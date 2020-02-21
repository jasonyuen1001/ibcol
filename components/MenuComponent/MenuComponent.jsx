import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '/routes';
import { media, style } from 'helpers/styledComponents.js';
import NavLinkComponent from 'components/NavLinkComponent';
import styled from 'styled-components';
import { transparentize } from 'polished'
import { translate } from 'helpers/translate.js';
import { withRouter } from 'next/router';

const MenuHeader = styled.header`
  li.languageMenuHeaderTrigger,
  div.languageMenuHeaderTriggerMobile {
    cursor: pointer;
    background-color: #EEE;
    background-size: cover;
    background-position: center center;
    border: solid 1px #CCC;
    border-radius: 10rem;
  }

  li.languageMenuHeaderTrigger {
    width: 3rem;
    height: 3rem;
    margin-top: -0.25rem;
    @media only screen and (max-width:800px) {
      display: none;
    }
  }

  div.languageMenuHeaderTriggerMobile {
    @media only screen and (min-width:801px) {
      display: none;
    }
    position: fixed;
    right: 10rem;
    top: 3.5rem;
    width: 3.5rem;
    height: 3.5rem;
  }
  .dropbtn {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
  }

  .dropdown-content li {
    color: black;
    padding-top:  10px;
    text-decoration: none;
    display: block;
  }

  .dropbtn:hover .dropdown-content {
    display: block;
  }
  
  .dropbtn:hover .dropbtn {
    background-color: #3e8e41;
  }
`;

const MobileNavBackdrop = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  ${'' /* background: red; */}
`;

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpened: false,
      wasSticky: false
    }
  }

  translate = (t, locale = this.props.router.query.locale) => translate(t, '_global', locale);

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.isSticky === false && prevProps.isSticky === true) {
      this.setState({
        wasSticky: true
      })
    } else if (this.props.isSticky === true && prevProps.isSticky === false) {
      this.setState({
        wasSticky: false
      })
    }

    if (this.props.router !== undefined) {
      if (prevProps.router.asPath !== this.props.router.asPath) {
        this.setState({
          isMobileMenuOpened: false
        })
      }
    }

  }

  toggleMobileMenu = () => {
    this.setState({
      isMobileMenuOpened: !this.state.isMobileMenuOpened
    });
  }

  render() {
    const componentName = "MenuComponent";
    const locale = this.props.locale;
    const menuItems = <>
      <li>
        <NavLinkComponent prefetch route="home" params={{ locale }}>
          {this.translate('menu.home')}
        </NavLinkComponent>
      </li>
      <li>
        <NavLinkComponent prefetch route="program" params={{ locale }}>
          {this.translate('menu.program')}
        </NavLinkComponent>
      </li>
      {/* <li>
        <NavLinkComponent prefetch route="how" params={{ locale }}>
          {this.translate('menu.how')}
        </NavLinkComponent>
      </li> */}
      <li>
        <NavLinkComponent prefetch route="rules" params={{ locale }}>
          {this.translate('menu.rules')}
        </NavLinkComponent>
      </li>
      {/* <li>
        <NavLinkComponent prefetch route="supporters" params={{ locale }}>
          {this.translate('menu.supporters')}
        </NavLinkComponent>
      </li> */}
      <li>
        <NavLinkComponent prefetch route="contact" params={{ locale }}>
          {this.translate('menu.contact')}
        </NavLinkComponent>
      </li>
      {/* <li className="featured">
        <NavLinkComponent prefetch route="join-us" params={{ locale }}>
          Join Us
        </NavLinkComponent>
      </li> */}
      <li className="featured">
        <NavLinkComponent prefetch route="registration" params={{ locale }}>
          {this.translate('menu.registration')}
        </NavLinkComponent>
      </li>

      {/* <li className="featured">
        <NavLinkComponent prefetch route="submit project" params={{ locale }}>
          {this.translate('menu.submit')}
        </NavLinkComponent>
      </li> */}

      {/* <li>
        <NavLinkComponent prefetch route="schedule" params={{ locale }}>
          {this.translate('menu.schedule')}
        </NavLinkComponent>
      </li>

      <li className="dropbtn">
        <NavLinkComponent prefetch route="winners" params={{ locale }}>
          Winners
        </NavLinkComponent>
      </li>
      <li>
        <NavLinkComponent prefetch route="contact" params={{ locale }}>
          {this.translate('menu.contact')}
        </NavLinkComponent>
      </li>
      <li className="submissionTips">
        <NavLinkComponent prefetch route="https://www.hkbcs.org/dappcamp/courses.html" params={{ locale }} target="_blank">
          Training Courses
        </NavLinkComponent>
      </li>
      <li className="featured">
        <NavLinkComponent prefetch route="join-us" params={{ locale }}>
          Join Us
        </NavLinkComponent>
      </li> */}
    </>

    return (
      <MenuHeader className={classNames('s-header', this.props.className, {
        'menu-is-open': this.state.isMobileMenuOpened === true,
        wasSticky: this.state.wasSticky
      })} style={this.props.style}>

        <div className="header-logo">
          <Link prefetch route="home" params={{ locale }}>
            <a className="site-logo">
              <img src={this.translate('logoImage')} alt={this.translate('logoTag')} />
            </a>
          </Link>
        </div>

        <div className="desktop-nav">
          <ul className="nav_list">
            {menuItems}
          </ul>
        </div>

        {
          this.state.isMobileMenuOpened === true &&
          <nav className="header-nav">
            <a className="header-nav__close" onClick={this.toggleMobileMenu} title="close"><span>{this.translate('close')}</span></a>
            <h3>{this.translate('navigateTo')}</h3>
            <div className="header-nav__content">
              <ul className="header-nav__list">
                {menuItems}
              </ul>
            </div>
          </nav>
        }

        {
          this.state.isMobileMenuOpened === true &&
          <MobileNavBackdrop onClick={this.toggleMobileMenu}>

          </MobileNavBackdrop>
        }

        <a className="header-menu-toggle" onClick={this.toggleMobileMenu}>
          <span className="header-menu-icon"></span>
        </a>

      </MenuHeader>
    );
  }
}

MenuComponent.propTypes = {
  locale: PropTypes.string.isRequired,
  onToggleLanguageSelector: PropTypes.func.isRequired
}

MenuComponent.defaultProps = {
}


export default withRouter(MenuComponent);