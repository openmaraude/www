import styles from '../styles/components/StyledNumberedList.module.css';

export default function StyledNumberedList({ elements }) {
  return (
    <ul className={styles.list}>
      {elements.map((el) => <li>
        <span className={styles.border} />
        {el}
      </li>)}
    </ul>
  );
}
