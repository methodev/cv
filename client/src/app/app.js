//====================================================|
// APP


//--------------------------| Import

// Dev
import { hot } from 'react-hot-loader';

// Libraries
import React from 'react';

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


//--------------------------| Component

const App = ({ identity, sections }) => {
  const SectionRouter = ({ data }) => {
    const router = () => {
      switch (data.fields.id.en) {
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

  return (
    <div className={styles.root}>
      <Header {...identity} />
      <main>
        {
          sections.map(section => (<SectionRouter key={section.sys.id} data={section} />))
        }
      </main>
      <Footer />
    </div>
  );
};


//--------------------------| Export

export default hot(module)(App);
