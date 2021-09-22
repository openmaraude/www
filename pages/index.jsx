import Image from 'next/image';

import BaseLayout from '@/layouts/BaseLayout';

import LogoAlphaTaxi from '@/public/images/partners/alpha-taxi.png';
import LogoG7 from '@/public/images/partners/G7.png';
import LogoGrenobleMobilite from '@/public/images/partners/grenoble-mobilite.png';
import LogoMoovit from '@/public/images/partners/moovit.png';
import LogoOnlyMoov from '@/public/images/partners/only-moov.png';
import LogoParisTaxis from '@/public/images/partners/paris-taxis.png';
import LogoTako from '@/public/images/partners/tako.png';
import LogoTaxisMarseille from '@/public/images/partners/taxis-marseille.png';

import QuestionSection from '@/components/QuestionSection';

import stylesGoals from '@/styles/Homepage.goals.module.css';
import stylesChallenges from '@/styles/Homepage.challenges.module.css';
import stylesAPIDescription from '@/styles/Homepage.api_description.module.css';
import stylesPartners from '@/styles/Homepage.partners.module.css';

function GoalsSection() {
  return (
    <section className={stylesGoals.section}>
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-7">
            <h2>le.taxi accélère <span className="highlight">la rencontre</span> entre usagers et taxis</h2>

            <h4>Nos objectifs</h4>

            <ul className={stylesGoals.goals}>
              <li>Accompagner <span className="highlight">la modernisation</span> de l’offre de taxis</li>
              <li>Mieux <span className="highlight">accéder aux taxis dans toute la France</span></li>
              <li>Permettre <span className="highlight">aux usagers</span> et <span className="highlight">aux taxis</span> de se trouver facilement</li>
              <li>Trouver les taxis dans toutes les <span className="highlight">applications clients</span></li>
            </ul>
          </div>

          <div className={`fr-col`}>
            <div className={stylesGoals.illustrationContainer}>
              <Image src="/images/homepage/illustration-customer.svg" alt="Illustration commande de taxi" layout="fill" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section className={stylesChallenges.section}>

      <div className="fr-container">
        <h2>Comment le.taxi répond à vos enjeux ?</h2>

        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-6 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <a href="/taxi" className="fr-card__link">Artisan taxi</a>
                </h4>
                <p className="fr-card__desc">Recevez de nouvelles courses lorsque vous êtes en maraude</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/taxi.svg" className="fr-responsive-img" />
              </div>
            </div>
          </div>

          <div className="fr-col-6 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <a href="/taxis_group" className="fr-card__link">Groupement de taxis</a>
                </h4>
                <p className="fr-card__desc">Connectez vos taxis à tous les usagers</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/taxis_group.svg" className="fr-responsive-img" />
              </div>
            </div>
          </div>

          <div className="fr-col-6 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <a href="/maas" className="fr-card__link">Application de mobilité</a>
                </h4>
                <p className="fr-card__desc">Proposez aussi les taxis dans votre application grand public</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/trip_planning_application.svg" className="fr-responsive-img" />
              </div>
            </div>
          </div>

          <div className="fr-col-6 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <a href="/aom" className="fr-card__link">Mobilité publique</a>
                </h4>
                <p className="fr-card__desc">Intégrez le service public des taxis à votre offre locale</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/maas.svg" className="fr-responsive-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function APIDescriptionSection() {
  return (
    <section className={stylesAPIDescription.section}>
      <div className="fr-container">
        <h2>Avec le.taxi : nous roulons ensemble !</h2>

        <div className="fr-grid-row">
          <img src="/images/homepage/api_schema.svg" alt="Illustration fonctionnement API" className="fr-responsive-img" />
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className={stylesPartners.section}>
      <div className="fr-container">
        <h2>Nos partenaires</h2>

        <div className="fr-grid-row fr-grid-row--middle">
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoAlphaTaxi} /></div>
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoG7} /></div>
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoGrenobleMobilite} /></div>
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoMoovit} /></div>
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoOnlyMoov} /></div>
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoParisTaxis} /></div>
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoTako} /></div>
          <div style={{textAlign: 'center'}} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoTaxisMarseille} /></div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <BaseLayout>
      <GoalsSection />
      <ChallengesSection />
      <APIDescriptionSection />
      <PartnersSection />
      <QuestionSection />
    </BaseLayout>
  );
}
