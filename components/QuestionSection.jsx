import Link from 'next/link';

import ButtonLink from '@/components/ButtonLink';

import styles from '@/styles/components/QuestionSection.module.css';

export default function QuestionSection() {
  return (
    <section className={styles.section}>
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--middle fr-grid-row--center">
          <h5 className="fr-mt-2w">Vous avez des questions ?</h5>
          <div className="fr-ml-3w">
            <Link href="/faq" passHref>
              <ButtonLink variant="secondary">Consultez la FAQ</ButtonLink>
            </Link>
          </div>
          <div className="fr-ml-1w">
            <Link href="/assets/documents/le.taxi_ maraude_flyerA5_avril2022.pdf?20220421" passHref>
              <ButtonLink variant="secondary">Télécharger le flyer</ButtonLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
