import Image from 'next/image';

import BaseLayout from '../layouts/BaseLayout';

import styles from '../styles/Homepage.module.css';

export default function Home() {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.topSectionContent}>
            <h1>le.taxi accélère <span class="highlight">la rencontre</span> entre usagers et taxis</h1>

            <div>
              <h4>Nos objectifs</h4>

              <div className={styles.topSectionGoals}>
                <ul>
                  <li>Accompagner <span class="highlight">la modernisation</span> de l’offre de taxis</li>
                  <li />
                  <li>Mieux <span class="highlight">accéder aux taxis dans toute la France</span></li>
                </ul>

                <ul>
                  <li>Permettre <span class="highlight">aux usagers</span> et <span class="highlight">aux taxis</span> de se trouver facilement</li>
                  <li />
                  <li>Trouver les taxis dans toutes les <span class="highlight">applications clients</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.topSectionIllustration}>
            <div className={styles.topSectionIllustrationContainer}>
              <Image src="/images/illustration-customer.svg" alt="Illustration commande de taxi" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
