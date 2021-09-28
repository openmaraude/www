import ButtonLink from '@/components/ButtonLink';

import styles from '@/styles/components/QuestionSection.module.css';

export default function QuestionSection() {
  return (
    <section className={styles.section}>
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--middle fr-grid-row--center">
          <h5>Vous avez des questions ?</h5>
          <a className="fr-ml-3w" href="/faq">
            <ButtonLink>Consltez la FAQ</ButtonLink>
          </a>
        </div>
      </div>
    </section>
  );
}
