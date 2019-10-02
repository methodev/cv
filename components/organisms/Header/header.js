// ===================================================|
// Organisms: HEADER

import { mapState } from 'vuex';

// Components
import Avatar from '@/node_modules/mm-atomic-pack/components/atoms/Avatar';
import Heading from '@/node_modules/mm-atomic-pack/components/atoms/Heading';
import ContactGroup from '@/components/molecules/ContactGroup';

// Graphics
import AtSVG from '@/assets/graphics/at.svg';
import HomeSVG from '@/assets/graphics/home.svg';
import PhoneSVG from '@/assets/graphics/phone.svg';
import PinSVG from '@/assets/graphics/pin.svg';
import PortfolioSVG from '@/assets/graphics/portfolio.svg';

export default {
  components: { Avatar, Heading, ContactGroup },

  computed: {
    ...mapState({
      identity: ({ contentful }) => contentful.data.identity.fields,
      accounts: ({ contentful }) => contentful.data.accounts
    }),
    fullName() {
      const { firstName, lastName } = this.identity;
      return `${firstName} ${lastName}`;
    },
    meta() {
      const { email, phone, city, country } = this.identity;

      return [
        {
          id: 'email',
          icon: AtSVG,
          value: email,
          link: `mailto:${email}`
        },
        {
          id: 'phone',
          icon: PhoneSVG,
          value: phone
        },
        {
          id: 'location',
          icon: PinSVG,
          value: `${city}, ${country}`,
          link: `https://www.google.com/maps/search/?query=${city}+${country}`
        }
      ];
    },
    links() {
      const { homePage, portfolio } = this.identity;
      const links = [];

      if (homePage) {
        links.push({
          id: 'homepage',
          icon: HomeSVG,
          value: homePage.replace('http://', ''),
          link: homePage
        });
      }

      if (portfolio) {
        links.push({
          id: 'portfolio',
          icon: PortfolioSVG,
          value: 'portfolio',
          printValue: `portfolio.${homePage.replace('http://', '')}`,
          link: portfolio
        });
      }

      this.accounts.forEach((acc) => {
        const { id, username, url, icon } = acc.fields;

        links.push({
          id,
          icon: icon.fields.file.url,
          value: username,
          printValue: url.replace('https://', ''),
          link: url
        });
      });

      return links;
    }
  }
};
