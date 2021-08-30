import Image from 'next/image';

import BaseLayout from '../layouts/BaseLayout';
import ButtonLink from '../components/ButtonLink';

import styles from '../styles/Groups.module.css';


export default function GroupsPage() {
  return (
    <BaseLayout>
      <div className={styles.page}>
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

            <h4 class="highlight">Nos ambitions pour les groupements de taxis</h4>

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


        <section className={styles.advantagesSection}>
          <h4 class="highlight">Les avantages de la maraude électronique</h4>

          <div className={styles.advantageCards}>
            <div className={styles.advantageCard}>
              <div className={styles.advantageIllustration}>
                <div className={styles.advantageIllustrationContainer}>
                  <Image src="/images/groupspage/illustration-client-app.svg" alt="Illustration cliente utilisant une app" layout="fill" />
                </div>
              </div>
              <div className={styles.advantageText}>
                <span class="highlight">Un taxi à moins de 500m</span> sans frais d’approche
              </div>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIllustration}>
                <div className={styles.advantageIllustrationContainer}>
                  <Image src="/images/groupspage/illustration-clock.svg" alt="Illustration montre" layout="fill" />
                </div>
              </div>
              <div className={styles.advantageText}>
                <span class="highlight">Optimiser le temps</span> entre 2 réservations
              </div>
            </div>

            <div className={styles.advantageCard}>
              <div className={styles.advantageIllustration}>
                <div className={styles.advantageIllustrationContainer}>
                  <Image src="/images/groupspage/illustration-map.svg" alt="Illustration carte" layout="fill" />
                </div>
              </div>
              <div className={styles.advantageText}>
                <span class="highlight">Un meilleur accès aux taxis</span> dans toute la France
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
}
