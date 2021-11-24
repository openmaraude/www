import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink';

import styles from '@/styles/components/QuestionSection.module.css';

export default function QuestionSection() {
  return (
    <section className={styles.section}>
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--middle fr-grid-row--center">
          <h5>Vous avez des questions ?</h5>
          <div className="fr-ml-3w">
            <Link href="/faq" passHref>
              <ButtonLink variant="secondary">Consultez la FAQ</ButtonLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
