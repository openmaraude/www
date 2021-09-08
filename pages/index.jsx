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

import stylesGoals from '../styles/Homepage.goals.module.css';
import stylesChallenges from '../styles/Homepage.challenges.module.css';
import stylesAPIDescription from '../styles/Homepage.api_description.module.css';
import stylesPartners from '../styles/Homepage.partners.module.css';

function GoalsSection() {
  return (
    <section className={stylesGoals.section}>
      <div className={stylesGoals.content}>
        <h1>le.taxi accélère <span className="highlight">la rencontre</span> entre usagers et taxis</h1>

        <h4>Nos objectifs</h4>

        <ul className={stylesGoals.goals}>
          <li>Accompagner <span className="highlight">la modernisation</span> de l’offre de taxis</li>
          <li>Mieux <span className="highlight">accéder aux taxis dans toute la France</span></li>
          <li>Permettre <span className="highlight">aux usagers</span> et <span className="highlight">aux taxis</span> de se trouver facilement</li>
          <li>Trouver les taxis dans toutes les <span className="highlight">applications clients</span></li>
        </ul>
      </div>

      <div className={stylesGoals.illustration}>
        <div className={stylesGoals.illustrationContainer}>
          <Image src="/images/homepage/illustration-customer.svg" alt="Illustration commande de taxi" layout="fill" />
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section className={stylesChallenges.section}>
      <h4>Comment le.taxi répond à vos enjeux ?</h4>

      <div className={stylesChallenges.cards}>
        <div className={stylesChallenges.card}>
          <div>
            <div className={stylesChallenges.illustrationContainer}>
              <Image src="/images/homepage/taxi.svg" alt="Illustration artisan taxi" layout="fill" />
            </div>
          </div>

          <h5>Artisan taxi</h5>

          <p>
            Recevez de nouvelles courses lorsque vous êtes en maraude
          </p>
          <p className={stylesChallenges.CTA}><a href="#">&#8594;</a></p>
        </div>

        <div className={stylesChallenges.card}>
          <div>
            <div className={stylesChallenges.illustrationContainer}>
              <Image src="/images/homepage/taxis_group.svg" alt="Illustration groupement de taxis" layout="fill" />
            </div>
          </div>

          <h5>Groupement de taxis</h5>

          <p>
            Connectez vos taxis à tous les usagers
          </p>
          <p className={stylesChallenges.CTA}><a href="#">&#8594;</a></p>
        </div>

        <div className={stylesChallenges.card}>
          <div>
            <div className={stylesChallenges.illustrationContainer}>
              <Image src="/images/homepage/trip_planning_application.svg" alt="Illustration application transport" layout="fill" />
            </div>
          </div>

          <h5>Application de mobilité</h5>

          <p>
            Proposez aussi les taxis dans votre application grand public
          </p>
          <p className={stylesChallenges.CTA}><a href="#">&#8594;</a></p>
        </div>

        <div className={stylesChallenges.card}>
          <div>
            <div className={stylesChallenges.illustrationContainer}>
              <Image src="/images/homepage/public_mobility.svg" alt="Illustration mobilité publique" layout="fill" />
            </div>
          </div>

          <h5>Mobilité publique</h5>

          <p>
            Intégrez le service public des  taxis, à votre offre locale
          </p>
          <p className={stylesChallenges.CTA}><a href="#">&#8594;</a></p>
        </div>
      </div>
    </section>
  );
}

function APIDescriptionSection() {
  return (
    <section className={stylesAPIDescription.section}>
      <h4>Avec le.taxi : nous roulons ensemble !</h4>

      <div>
        <div className={stylesAPIDescription.illustrationContainer}>
          <Image src="/images/homepage/api_schema.svg" alt="Illustration fonctionnement API" layout="fill" />
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className={stylesPartners.section}>
      <h4>Nos partenaires</h4>

      <div className={stylesPartners.logos}>
        <div className={stylesPartners.logoContainer}><Image src={LogoAlphaTaxi} /></div>
        <div className={stylesPartners.logoContainer}><Image src={LogoG7} /></div>
        <div className={stylesPartners.logoContainer}><Image src={LogoGrenobleMobilite} /></div>
        <div className={stylesPartners.logoContainer}><Image src={LogoMoovit} /></div>
        <div className={stylesPartners.logoContainer}><Image src={LogoOnlyMoov} /></div>
        <div className={stylesPartners.logoContainer}><Image src={LogoParisTaxis} /></div>
        <div className={stylesPartners.logoContainer}><Image src={LogoTako} /></div>
        <div className={stylesPartners.logoContainer}><Image src={LogoTaxisMarseille} /></div>
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
  )
}
