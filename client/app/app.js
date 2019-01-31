//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader/root';

// Libraries
import React from 'react';
import moment from 'moment';
import { parse, stringify } from 'flatted/esm';

// Services
import { getEntries } from './services/data';

// Content
import { bg as bgLabels, en as enLabels } from '../labels.json';

// Styles
import styles from './app.scss';

// Organisms
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';

// Sections
import Experience from './sections/experience';
import Education from './sections/education';
import TechsAndTools from './sections/techs-and-tools';
import MostProudOf from './sections/most-proud-of';
import Strengths from './sections/strengths';
import Languages from './sections/languages';
import Certificates from './sections/certificates';
import References from './sections/references';


//--------------------------| Section Router

const SectionRouter = ({ data }) => {
  const router = () => {
    switch (data.fields.id) {
      default: return (<div />);
      case 'experience': return Experience;
      case 'education': return Education;
      case 'technologiesAndTools': return TechsAndTools;
      case 'mostProudOf': return MostProudOf;
      case 'strengths': return Strengths;
      case 'languages': return Languages;
      case 'certificates': return Certificates;
      case 'references': return References;
    }
  };

  const Section = router();

  return <Section data={data} />;
};


//--------------------------| Component

class App extends React.PureComponent {
  state = { lang: this.props.bilingual ? this.props.lang : 'en' };

  render() {
    const content = parse(localStorage.getItem('cv_content'));
    const labels = this.state.lang === 'en' ? enLabels : bgLabels;

    localStorage.setItem('cv_data', stringify(content[this.state.lang]));
    localStorage.setItem('cv_labels', stringify(labels));

    if (this.props.bilingual) {
      moment.locale(this.state.lang);
      window.location.hash = this.state.lang;
    }

    const identity = getEntries('identity')[0].fields;
    const { cv } = identity;

    return (
      <div className={styles.root}>
        {
          this.props.bilingual && (
            <span className={styles.language}>
              <a
                onClick={() => {
                  this.setState(prevState => ({ lang: prevState.lang === 'en' ? 'bg' : 'en' }));
                }}
              >
                {this.state.lang === 'en' ? 'bg' : 'en'}
              </a>
            </span>
          )
        }

        <Header {...identity} />
        <main>
          {
            cv.map(section => (<SectionRouter key={section.sys.id} data={section} />))
          }
        </main>
        <Footer />
      </div>
    );
  }
}


//--------------------------| Export

export default hot(App);
