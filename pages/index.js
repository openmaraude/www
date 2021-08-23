import Image from 'next/image';

import BaseLayout from '../layouts/BaseLayout';

import LogoAlphaTaxi from '../public/images/partners/alpha-taxi.png';
import LogoG7 from '../public/images/partners/G7.png';
import LogoGrenobleMobilite from '../public/images/partners/grenoble-mobilite.png';
import LogoMoovit from '../public/images/partners/moovit.png';
import LogoOnlyMoov from '../public/images/partners/only-moov.png';
import LogoParisTaxis from '../public/images/partners/paris-taxis.png';
import LogoTako from '../public/images/partners/tako.png';
import LogoTaxisMarseille from '../public/images/partners/taxis-marseille.png';

import QuestionSection from '../components/QuestionSection';
import styles from '../styles/Homepage.module.css';


export default function Home() {
  return (
    <BaseLayout>
      <section className={styles.goalsSection}>
        <div className={styles.goalsSectionContent}>
          <h1>le.taxi accélère <span class="highlight">la rencontre</span> entre usagers et taxis</h1>

          <h4>Nos objectifs</h4>

          <ul className={styles.goalsSectionGoals}>
            <li>Accompagner <span class="highlight">la modernisation</span> de l’offre de taxis</li>
            <li>Mieux <span class="highlight">accéder aux taxis dans toute la France</span></li>
            <li>Permettre <span class="highlight">aux usagers</span> et <span class="highlight">aux taxis</span> de se trouver facilement</li>
            <li>Trouver les taxis dans toutes les <span class="highlight">applications clients</span></li>
          </ul>
        </div>

        <div className={styles.goalsSectionIllustration}>
          <div className={styles.goalsSectionIllustrationContainer}>
            <Image src="/images/homepage/illustration-customer.svg" alt="Illustration commande de taxi" layout="fill" />
          </div>
        </div>
      </section>

      <section className={styles.challengesSection}>
        <h4>Comment le.taxi répond à vos enjeux ?</h4>

        <div className={styles.challengeCards}>
          <div className={styles.challengeCard}>
            <div className={styles.challengeCardIllustration}>
              <div className={styles.challengeCardIllustrationContainer}>
                <Image src="/images/homepage/taxi.svg" alt="Illustration artisan taxi" layout="fill" />
              </div>
            </div>

            <h5>Artisan taxi</h5>

            <p>
              Recevez de nouvelles courses lorsque vous êtes en maraude
            </p>
            <p className={styles.challengeCardCTA}><a href="#">&#8594;</a></p>
          </div>

          <div className={styles.challengeCard}>
            <div className={styles.challengeCardIllustration}>
              <div className={styles.challengeCardIllustrationContainer}>
                <Image src="/images/homepage/taxis_group.svg" alt="Illustration groupement de taxis" layout="fill" />
              </div>
            </div>

            <h5>Groupement de taxis</h5>

            <p>
              Connectez vos taxis à tous les usagers
            </p>
            <p className={styles.challengeCardCTA}><a href="#">&#8594;</a></p>
          </div>

          <div className={styles.challengeCard}>

            <div className={styles.challengeCardIllustration}>
              <div className={styles.challengeCardIllustrationContainer}>
                <Image src="/images/homepage/trip_planning_application.svg" alt="Illustration application transport" layout="fill" />
              </div>
            </div>

            <h5>Application de mobilité</h5>

            <p>
              Proposez aussi les taxis dans votre application grand public
            </p>
            <p className={styles.challengeCardCTA}><a href="#">&#8594;</a></p>
          </div>

          <div className={styles.challengeCard}>
            <div className={styles.challengeCardIllustration}>
              <div className={styles.challengeCardIllustrationContainer}>
                <Image src="/images/homepage/public_mobility.svg" alt="Illustration mobilité publique" layout="fill" />
              </div>
            </div>

            <h5>Mobilité publique</h5>

            <p>
              Intégrez le service public des  taxis, à votre offre locale
            </p>
            <p className={styles.challengeCardCTA}><a href="#">&#8594;</a></p>
          </div>
        </div>
      </section>

      <section className={styles.APIDescriptionSection}>
        <h4>Avec le.taxi : nous roulons ensemble !</h4>

        <div className={styles.APIDescriptionIllustration}>
          <div className={styles.APIDescriptionIllustrationContainer}>
            <Image src="/images/homepage/api_schema.svg" alt="Illustration fonctionnement API" layout="fill" />
          </div>
        </div>
      </section>

      <section className={styles.partnersSection}>
        <h4>Nos partenaires</h4>

        <div className={styles.partnersLogos}>
          <div className={styles.partnersLogoContainer}><Image src={LogoAlphaTaxi} /></div>
          <div className={styles.partnersLogoContainer}><Image src={LogoG7} /></div>
          <div className={styles.partnersLogoContainer}><Image src={LogoGrenobleMobilite} /></div>
          <div className={styles.partnersLogoContainer}><Image src={LogoMoovit} /></div>
          <div className={styles.partnersLogoContainer}><Image src={LogoOnlyMoov} /></div>
          <div className={styles.partnersLogoContainer}><Image src={LogoParisTaxis} /></div>
          <div className={styles.partnersLogoContainer}><Image src={LogoTako} /></div>
          <div className={styles.partnersLogoContainer}><Image src={LogoTaxisMarseille} /></div>
        </div>
      </section>

      <QuestionSection />
    </BaseLayout>
  )
}
