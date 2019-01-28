//====================================================|
// HEADER


//--------------------------| Import

// Libraries
import React from 'react';

// Services
import { getEntry } from '../../../services/content';

// Styles
import styles from './header.scss';

// Atoms
import Avatar from '../../atoms/avatar';
import Heading from '../../atoms/heading';

// Molecules
import ContactGroup from '../../molecules/contact-group';

// Graphics
import AtSVG from '../../../../assets/graphics/at.svg';
import GitHubSVG from '../../../../assets/graphics/github.svg';
import HomeSVG from '../../../../assets/graphics/home.svg';
import LinkedInSVG from '../../../../assets/graphics/linkedin.svg';
import PhoneSVG from '../../../../assets/graphics/phone.svg';
import PinSVG from '../../../../assets/graphics/pin.svg';
import PortfolioSVG from '../../../../assets/graphics/portfolio.svg';


//--------------------------| Component

const Header = ({
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
}) => {
  const linkedin = getEntry('accountProfile', 'linkedin')[0].fields;
  const github = getEntry('accountProfile', 'github')[0].fields;

  return (
    <header className={styles.root}>
      <div className={styles.cell}>
        <div className={styles.main}>
          <Heading size={1} type={'title'}>{`${firstName.en} ${lastName.en}`}</Heading>
          <Heading type={'subtitle'}>{headline.en}</Heading>
          <div className={styles.contacts}>
            <ContactGroup contacts={{
              email: {
                id: 'email',
                icon: <AtSVG />,
                value: email.en,
                link: `mailto:${email.en}`
              },
              phone: {
                id: 'phone',
                icon: <PhoneSVG />,
                value: phone.en
              },
              location: {
                id: 'location',
                icon: <PinSVG />,
                value: `${city.en}, ${country.en}`,
                link: 'https://goo.gl/maps/jCo463mroTy'
              }
            }} />
          </div>
        </div>
      </div>
      <div className={styles.cell}>
        <div className={styles.links}>
          <ContactGroup contacts={{
            homePage: {
              id: 'homepage',
              icon: <HomeSVG />,
              value: homePage.en.replace('http://', ''),
              link: homePage.en
            },
            portfolio: {
              id: 'portfolio',
              icon: <PortfolioSVG />,
              value: 'portfolio',
              printValue: `portfolio.${homePage.en.replace('http://', '')}`,
              link: portfolio.en
            },
            linkedin: {
              id: linkedin.id.en,
              icon: <LinkedInSVG />,
              value: linkedin.username.en,
              printValue: linkedin.url.en.replace('https://', ''),
              link: linkedin.url.en
            },
            github: {
              id: github.id.en,
              icon: <GitHubSVG />,
              value: github.username.en,
              printValue: github.url.en.replace('https://', ''),
              link: github.url.en
            }
          }} />
        </div>
        <Avatar url={avatar.en} />
      </div>
    </header>
  );
};


//--------------------------| Export

export default Header;
