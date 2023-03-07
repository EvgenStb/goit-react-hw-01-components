import PropTypes from 'prop-types';
import {
  Section,
  TitleStats,
  StatsList,
  StatListItem,
  StatsValue,
} from './Statistics.styled';
export default function Statistic({ title, data }) {
  const listItem = data.map(({ id, label, percentage }) => {
    const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    return (
      <StatListItem
        className="item"
        key={id}
        style={{ backgroundColor: randomColor }}
      >
        <span className="label">{label}</span>
        <StatsValue className="percentage">{percentage}</StatsValue>
      </StatListItem>
    );
  });
  return (
    <Section className="statistics">
      {title && <TitleStats className="title">{title}</TitleStats>}
      <StatsList className="stat-list">{listItem}</StatsList>
    </Section>
  );
}

Statistic.propTypes = {
  titel: PropTypes.string,
  data: PropTypes.array,
};
