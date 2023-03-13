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
            <Link href="/assets/documents/22016_TAXI_maraude_flyerA5_BATweb.pdf?20230313" passHref>
              <ButtonLink variant="secondary">Télécharger le flyer</ButtonLink>
            </Link>
          </div>
          <div className="fr-ml-1w">
            <Link href="/assets/documents/22077_TAXI-livretA5-chauffeur_BATweb.pdf?20230313" passHref>
              <ButtonLink variant="secondary">Télécharger le livret chauffeur</ButtonLink>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
