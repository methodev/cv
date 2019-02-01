//====================================================|
// HEADER


//--------------------------| Import

// Libraries
import React from 'react';

// Styles
import styles from './header.scss';

// Atoms
import Avatar from '../../atoms/avatar';
import Heading from '../../atoms/heading';

// Molecules
import ContactGroup from '../../molecules/contact-group';

// Graphics
import AtSVG from '../../../../assets/graphics/at.svg';
import BehanceSVG from '../../../../assets/graphics/behance.svg';
import GitHubSVG from '../../../../assets/graphics/github.svg';
import HomeSVG from '../../../../assets/graphics/home.svg';
import LinkedInSVG from '../../../../assets/graphics/linkedin.svg';
import PhoneSVG from '../../../../assets/graphics/phone.svg';
import PinSVG from '../../../../assets/graphics/pin.svg';
import PortfolioSVG from '../../../../assets/graphics/portfolio.svg';


//--------------------------| Supported accounts

const accIcons = {
  behance: <BehanceSVG />,
  github: <GitHubSVG />,
  linkedin: <LinkedInSVG />
};


//--------------------------| Component

const Header = ({ person, accounts }) => {
  const {
    firstName,
    lastName,
    headline,
    email,
    phone,
    city,
    country,
    homePage,
    portfolio,
    avatar
  } = person;

  const links = {};

  if (homePage) {
    links.homePage = {
      id: 'homepage',
      icon: <HomeSVG />,
      value: homePage.replace('http://', ''),
      link: homePage
    };
  }

  if (portfolio) {
    links.portfolio = {
      id: 'portfolio',
      icon: <PortfolioSVG />,
      value: 'portfolio',
      printValue: `portfolio.${homePage.replace('http://', '')}`,
      link: portfolio
    };
  }

  accounts.forEach((acc) => {
    links[acc.fields.id] = {
      id: acc.fields.id,
      icon: accIcons[acc.fields.id],
      value: acc.fields.username,
      printValue: acc.fields.url.replace('https://', ''),
      link: acc.fields.url
    };
  });

  return (
    <header className={styles.root}>
      <div className={styles.cell}>
        <div className={styles.main}>
          <Heading size={1} type={'title'}>{`${firstName} ${lastName}`}</Heading>
          <Heading type={'subtitle'}>{headline}</Heading>
          <div className={styles.contacts}>
            <ContactGroup contacts={{
              email: {
                id: 'email',
                icon: <AtSVG />,
                value: email,
                link: `mailto:${email}`
              },
              phone: {
                id: 'phone',
                icon: <PhoneSVG />,
                value: phone
              },
              location: {
                id: 'location',
                icon: <PinSVG />,
                value: `${city}, ${country}`,
                link: 'https://goo.gl/maps/jCo463mroTy'
              }
            }} />
          </div>
        </div>
      </div>
      <div className={styles.cell}>
        <div className={styles.links}>
          <ContactGroup contacts={links} />
        </div>
        <Avatar url={avatar} />
      </div>
    </header>
  );
};


//--------------------------| Export

export default Header;
