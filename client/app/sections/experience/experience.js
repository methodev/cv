//====================================================|
// EXPERIENCE


//--------------------------| Import

// Libraries
import React from 'react';
import moment from 'moment';

// Services
import {
  checkPeriod,
  filterItemsTillNow,
  formatPeriod,
  formatDuration,
  getTotalExperience,
  getPeriod,
  splitPositionsByActuality,
  getLabel
} from '../../services/data';

// HOC
import Tooltip from '../../components/hoc/tooltip';

// Styles
import styles from './experience.scss';

// Molecules
import Item from '../../components/molecules/item';

// Organisms
import Section from '../../components/organisms/section';
import SectionItem from '../../components/organisms/section/section-item';

// Graphics
import CalSVG from '../../../assets/graphics/calendar.svg';
import PinSVG from '../../../assets/graphics/pin.svg';


//--------------------------| Component

class Experience extends React.PureComponent {
  state = {
    old: false
  };

  listPositions = positions => positions.map((item) => {
    const finalDate = item.fields.endDate ? item.fields.endDate : moment();
    const duties = item.fields.duties.replace(/\n/g, '').split('• ').slice(1);

    const details = [
      {
        type: 'calendar',
        value: formatPeriod(item.fields.startDate, item.fields.endDate),
        icon: <CalSVG />,
        tooltip: formatDuration(item.fields.startDate, finalDate),
        addon: checkPeriod(item.fields.startDate, item.fields.endDate)
      },
      {
        type: 'location',
        value: item.fields.employer.fields.location,
        icon: <PinSVG />
      }
    ];

    const stack = item.fields.stack ? `${getLabel('stack')}: ${item.fields.stack.map(tech => tech.fields.name).join(', ')}` : null;

    return (
      <SectionItem key={item.sys.id}>
        <Item
          title={item.fields.name}
          subtitle={item.fields.employer.fields.name}
          subtitleUrl={item.fields.employer.fields.homePage}
          details={details}
          text={duties}
          tooltip={stack}
        />
      </SectionItem>
    );
  });

  showOldPositions = () => {
    this.setState(prevState => ({ old: true }));
  };

  render() {
    const { data } = this.props;
    const { items } = data.fields;
    const actualAmount = 3;
    const itemsTillNow = filterItemsTillNow(items);
    const positions = splitPositionsByActuality(itemsTillNow, actualAmount);
    const tooltipForMore = positions.old.length > 0 ? `+${positions.old.length} ${getLabel('previousPositions')} ${getPeriod(positions.old)}` : null;

    return (
      <Section
        className={styles.root}
        name={data.fields.name}
        tooltip={getTotalExperience(items)}
      >
        {
          this.listPositions(positions.actual)
        }
        {
          this.state.old && this.listPositions(positions.old)
        }
        {
          !this.state.old && positions.old.length > 0 && (
            <div className={styles.more}>
              <span data-tip={tooltipForMore} data-for='more'>
                <a onClick={this.showOldPositions}>
                  <span>{`+${positions.old.length}`}</span>
                </a>
                <i>{tooltipForMore}</i>
              </span>
              <Tooltip
                id={'more'}
                place={'top'}
                effect={'solid'}
              />
            </div>
          )
        }
      </Section>
    );
  }
}


//--------------------------| Export

export default Experience;
