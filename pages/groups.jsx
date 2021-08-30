import Image from 'next/image';

import BaseLayout from '../layouts/BaseLayout';
import ButtonLink from '../components/ButtonLink';

import styles from '../styles/Groups.module.css';


export default function GroupsPage() {
  return (
    <BaseLayout>
      <section className={styles.goalsSection}>
        <div className={styles.goalsSectionLeft}>
          <h2>
            <span class="highlight">Connectez vos taxis</span> à la maraude électronique
          </h2>

          <div className={styles.goalsPresentationBox}>
            le.taxi, le <strong>service public numérique</strong> qui permet de
            trouver de <strong>nouveaux clients</strong> avec
            la <strong>maraude électronique</strong>.
          </div>
        </div>

        <div className={styles.goalsSectionRight}>
          <div className={styles.goalsIllustration}>
            <div className={styles.goalsIllustrationContainer}>
              <Image src="/images/groupspage/illustration-customers.svg" alt="Illustration clients" layout="fill" />
            </div>
          </div>

          <h4 class="highlight">
            Nos ambitions pour les groupements de taxis
            <span className={styles.titleBorder} />
          </h4>

          <ul>
            <li><strong>Accompagner la modernisation de l’offre de taxis</strong></li>
            <li><strong>Encore plus de courses pour les taxis</strong></li>
            <li><strong>Votre clientèle trouve un taxi partout en France, via votre application</strong></li>
          </ul>

          <div className={styles.goalsCTA}>
            <ButtonLink href="#">S'inscrire</ButtonLink>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
