import ButtonLink from '../components/ButtonLink';
import styles from '../styles/components/QuestionSection.module.css';

export default function QuestionSection() {
  return (
    <section className={styles.container}>
      <h5>Vous avez des questions ?</h5>
      <ButtonLink href="https://le.taxi">Consultez la FAQ</ButtonLink>
    </section>
  );
}
