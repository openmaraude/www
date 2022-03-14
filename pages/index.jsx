import Image from 'next/image';
import Link from 'next/link';

import BaseLayout from '@/layouts/BaseLayout';

import LogoAppsolu from '@/public/images/partners/appsolu.png';
import LogoAxygest from '@/public/images/partners/axygest.png';
import LogoG7 from '@/public/images/partners/G7.png';
import LogoMob1taxi from '@/public/images/partners/mob1taxi.png';
import LogoOnlyMoov from '@/public/images/partners/only-moov.png';
import LogoTako from '@/public/images/partners/tako.png';
import LogoTaxisJaunes from '@/public/images/partners/taxis-jaunes.png';
import LogoTaxisLyonnais from '@/public/images/partners/taxis-lyonnais.png';
import LogoSimplyTaxi from '@/public/images/partners/simply-taxi.png';

import ButtonLink from '@/components/ButtonLink';
import QuestionSection from '@/components/QuestionSection';
import Modal from '@/components/Modal';

import stylesGoals from '@/styles/Homepage.goals.module.css';
import stylesChallenges from '@/styles/Homepage.challenges.module.css';
import stylesAPIDescription from '@/styles/Homepage.api_description.module.css';
import stylesPartners from '@/styles/Homepage.partners.module.css';

function ChampagneSection() {
  return (
    <>
      <Modal title="C'est en vigueur ⚖️">
        <p>Le décret relatif au <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044514743">registre de disponibilité des taxis</Link> ainsi que son <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044514795">arrêté d’application</Link> sont publiés au Journal Officiel.</p>
        <p><span className="fr-fi-arrow-right-line fr-fi--md" /> L’ensemble des conducteurs de taxis de France ont désormais l’obligation de se connecter au registre de disponibilité des taxis le.taxi.</p>
      </Modal>
    </>
  );
}

function GoalsSection() {
  return (
    <section className={stylesGoals.section}>
      <div className="fr-container">
        <div className="fr-grid-row">
          <div className="fr-col fr-col-md-7">
            <h1 className="fr-display-sm">le.taxi accélère <span className="highlight">la rencontre</span> entre usagers et taxis</h1>

            <h4>Nos objectifs</h4>

            <ul className={stylesGoals.goals}>
              <li className={stylesGoals.iconDiamond}>Accompagner <span className="highlight">la modernisation</span> de l’offre de taxis</li>
              <li className={stylesGoals.iconTripleArrows}>Mieux <span className="highlight">accéder aux taxis dans toute la France</span></li>
              <li className={stylesGoals.iconDoubleArrows}>Permettre <span className="highlight">aux usagers</span> et <span className="highlight">aux taxis</span> de se trouver facilement</li>
              <li className={stylesGoals.iconWatch}>Trouver les taxis dans toutes les <span className="highlight">applications clients</span></li>
            </ul>
          </div>

          <div className="fr-col fr-displayed-md">
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
          <div className="fr-col-12 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <Link href="/taxi" passHref>
                    <a href="/taxi" className="fr-card__link">Artisan taxi</a>
                  </Link>
                </h4>
                <p className="fr-card__desc">Recevez de nouvelles courses lorsque vous êtes en maraude</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/taxi.svg" className={`fr-responsive-img ${stylesChallenges.img}`} alt="" />
              </div>
            </div>
          </div>

          <div className="fr-col-12 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <Link href="/taxis_group" passHref>
                    <a href="/taxis_group" className="fr-card__link">Groupement de taxis</a>
                  </Link>
                </h4>
                <p className="fr-card__desc">Connectez vos taxis à tous les usagers</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/taxis_group.svg" className={`fr-responsive-img ${stylesChallenges.img}`} alt="" />
              </div>
            </div>
          </div>

          <div className="fr-col-12 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <Link href="/maas" passHref>
                    <a href="/maas" className="fr-card__link">Application de mobilité</a>
                  </Link>
                </h4>
                <p className="fr-card__desc">Proposez aussi les taxis dans votre application grand public</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/trip_planning_application.svg" className={`fr-responsive-img ${stylesChallenges.img}`} alt="" />
              </div>
            </div>
          </div>

          <div className="fr-col-12 fr-col-md-3">
            <div className="fr-card fr-enlarge-link fr-pt-3w">
              <div className="fr-card__body">
                <h4 className="fr-card__title">
                  <Link href="/aom" passHref>
                    <a href="/aom" className="fr-card__link">Mobilité publique</a>
                  </Link>
                </h4>
                <p className="fr-card__desc">Intégrez le service public des taxis à votre offre locale</p>
              </div>
              <div className="fr-card__img">
                <img src="/images/homepage/maas.svg" className={`fr-responsive-img ${stylesChallenges.img}`} alt="" />
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
        <div className="fr-grid-row">
          <div className="fr-col-12">
            <h2>Avec le.taxi : nous roulons ensemble !</h2>
          </div>
          <div className="fr-col-12">
            <img src="/images/homepage/api_schema.svg" alt="Illustration fonctionnement API" className="fr-responsive-img" />
          </div>

          <div className={`fr-mt-5w ${stylesAPIDescription.link}`}>
            <span className="fr-fi-information-fill fr-pr-1w" aria-hidden="true" />
            <Link href="https://api.gouv.fr/guides/api-definition" passHref>
              <a href="https://api.gouv.fr/guides/api-definition">Qu'est-ce qu'une API ?</a>
            </Link>
          </div>
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
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoTako} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoMob1taxi} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoG7} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoTaxisLyonnais} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoTaxisJaunes} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoOnlyMoov} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoAppsolu} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoAxygest} /></div>
          <div style={{ textAlign: 'center' }} className="fr-pb-5w fr-col-12 fr-col-md-6 fr-col-xl-3"><Image src={LogoSimplyTaxi} /></div>
        </div>

        <div className="fr-grid-row fr-grid-row--center">
          <Link href="/partners" passHref>
            <ButtonLink>Voir tous les partenaires</ButtonLink>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <BaseLayout>
      <ChampagneSection />
      <GoalsSection />
      <ChallengesSection />
      <APIDescriptionSection />
      <PartnersSection />
      <QuestionSection />
    </BaseLayout>
  );
}
