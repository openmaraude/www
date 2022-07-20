import PropTypes from 'prop-types';

import styles from '@/styles/components/StyledNumberedList.module.css';

export default function StyledNumberedList({ elements }) {
  return (
    <ul className={styles.list}>
      {elements.map((el) => (
        <li>
          <span className={styles.border} />
          {el}
        </li>
      ))}
    </ul>
  );
}

StyledNumberedList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.node).isRequired,
};
