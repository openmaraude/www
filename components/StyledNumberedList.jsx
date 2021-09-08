import styles from '../styles/components/StyledNumberedList.module.css';

export default function StyledNumberedList({ elements }) {
  return (
    <ul className={styles.list}>
      {elements.map((el, idx) => <li key={idx}>
        <span className={styles.border} />
        {el}
      </li>)}
    </ul>
  );
}
