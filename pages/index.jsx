import Image from 'next/image';
import Link from 'next/link';

import BaseLayout from '@/layouts/BaseLayout';

import LogoLyon from '@/public/images/partners/logo-metropole-grand-lyon-1040x364.png';
import LogoRouen from '@/public/images/partners/logo-rouen-metropole-630x630.jpg';
import LogoGrenoble from '@/public/images/partners/logo-grenoble-alpes-metropole-630x630.jpg';
import LogoAppsolu from '@/public/images/partners/appsolu.png';
import LogoCourseDeRue from '@/public/images/partners/coursederue.png';
import LogoG7 from '@/public/images/partners/G7.png';
import LogoMob1taxi from '@/public/images/partners/mob1taxi.png';
import LogoMyCloudTaxi from '@/public/images/partners/Logo_myCloudTaxi.png';
import LogoAta from '@/public/images/partners/logo_ata.png';

import Modal from '@/components/Modal';
import QuestionSection from '@/components/QuestionSection';
import Tile from '@/components/Tile';

import TileCity from '@/public/images/page_aom/illustration-city.svg';
import TileCustomer from '@/public/images/page_partners/customer.svg';
import TileMarker from '@/public/images/homepage/marker.svg';
import TileTaxi from '@/public/images/page_partners/taxi.svg';
import NewsIllustration from '@/public/images/homepage/news.jpg';

import stylesGoals from '@/styles/Homepage.goals.module.css';
import stylesChallenges from '@/styles/Homepage.challenges.module.css';
import stylesAPIDescription from '@/styles/Homepage.api_description.module.css';

function ChampagneSection() {
  return (
    <>
      <Modal title="Notre mission">
        <p>
          le.taxi est un service du Ministère des Transports à destination
          des chauffeurs de taxis en activité, des éditeurs de logiciel
          et des collectivités en charge des transports.
        </p>
        <p>Nous ne nous adressons pas aux particuliers.</p>
      </Modal>
    </>
  );
}

function GoalsSection() {
  return (
    <section className={stylesGoals.section}>
      <div className="fr-container">
        <div className="fr-grid-row">
          <div className="fr-col fr-col-md-6 fr-col-offset-md-6">
            <h1 className="highlight">le.taxi&nbsp;: un service de l'État qui facilite<br />la commande immédiate de taxis</h1>
            <div className="fr-container">
              <div className="fr-grid-row fr-grid-row--gutters fr-my-3w">
                <div className="fr-col-12 fr-col-md-6">
                  <Tile
                    title="Je suis chauffeur taxi"
                    description="Inscrivez-vous au registre le.taxi"
                    href="/taxi/"
                    img={TileTaxi}
                    size="sm"
                    orientation="horizontal"
                  />
                </div>
                <div className="fr-col-12 fr-col-md-6">
                  <Tile
                    title="Je recherche un taxi"
                    description="Faites appel à un taxi tout de suite"
                    href="/client"
                    img={TileCustomer}
                    size="sm"
                    orientation="horizontal"
                  />
                </div>
                <div className="fr-col-12 fr-col-md-6">
                  <Tile
                    title="Je souhaite faciliter l'accès au taxi"
                    description="Vous développez une app&nbsp;? un site&nbsp;? Contactez l'équipe le.taxi"
                    href="/aom"
                    img={TileCity}
                    size="sm"
                    orientation="horizontal"
                  />
                </div>
                <div className="fr-col-12 fr-col-md-6">
                  <Tile
                    title="J'ai un autre besoin à préciser"
                    description="Vous êtes professionnel et présentez un cas spécifique&nbsp;? Contactez l'équipe le.taxi"
                    href="/contact"
                    img={TileMarker}
                    size="sm"
                    orientation="horizontal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection() {
  return (
    <section className={`${stylesChallenges.section} fr-py-8w fr-background-action-high--blue-ecume`}>

      <div className="fr-container">
        <h2>La dernière actualité le.taxi</h2>

        <div className="fr-card fr-enlarge-link fr-card--horizontal fr-card--horizontal-half">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h3 className="fr-card__title">
                <Link href="?">le.taxi arrive dans l'Appli&nbsp;M de Grenoble&nbsp;!</Link>
              </h3>
              <p className="fr-card__desc">C'est une première nationale&nbsp;: l'offre taxis vient s'ajouter aux autres mobilités déjà disponibles (bus, tramway, vélo&hellip;).</p>
              <p className="fr-card__desc">Il sera maintenant possible de commander un taxi directement depuis l'Appli&nbsp;M.</p>
              <p className="fr-card__desc">Première métropole à intégrer le service, nous vous dévoilons les coulisses de notre partenariat.</p>
            </div>
          </div>
          <div className="fr-card__header">
            <div className="fr-card__img">
              <Image src={NewsIllustration} alt="" aria-hidden="true" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function APIDescriptionSection() {
  return (
    <section className={`${stylesAPIDescription.section} fr-py-8w fr-background-alt--blue-ecume`}>
      <div className="fr-container">
        <div className="fr-grid-row">
          <div className="fr-col-12">
            <h2><span className="highlight">le.taxi</span>, une API qui facilite la rencontre entre l'usager et le taxi</h2>
          </div>
          <div className="fr-col-12">
            <img src="/images/homepage/api_schema.svg" alt="Illustration fonctionnement API" className={`fr-responsive-img ${stylesAPIDescription.schemaHorizontal}`} />
            <img src="/images/homepage/api_schema_vertical.svg" alt="Illustration fonctionnement API" className={`fr-responsive-img ${stylesAPIDescription.schemaVertical}`} />
          </div>

          <div className={`fr-mt-5w ${stylesAPIDescription.link}`}>
            <span className="fr-fi-information-fill fr-pr-1w" aria-hidden="true" />
            Voir aussi&nbsp;:&nbsp;
            <Link href="https://api.gouv.fr/guides/api-definition">Qu'est-ce qu'une API ?</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="fr-pt-9w fr-pb-12w">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--center">
          <h2>Nos partenaires publics et privés</h2>
        </div>

        <div className="fr-grid-row fr-grid-row--middle" style={{ textAlign: 'center' }}>
          <div className="fr-col-12 fr-col-md-5 fr-col-xl-3 fr-col-offset-1"><Image src={LogoLyon} alt="Métropole Grand Lyon" sizes="50vw" style={{ width: '100%', height: 'auto' }} /></div>
          <div className="fr-col-12 fr-col-md-5 fr-col-xl-3 fr-col-offset-1"><Image src={LogoRouen} alt="Métropole Rouen Normandie" sizes="50vw" style={{ width: '100%', height: 'auto' }} /></div>
          <div className="fr-col-12 fr-col-md-4 fr-col-xl-2 fr-col-offset-1"><Image src={LogoGrenoble} alt="Grenoble Alpes Métropole" sizes="50vw" style={{ width: '100%', height: 'auto' }} /></div>
        </div>

        <div className="fr-grid-row fr-grid-row--middle" style={{ textAlign: 'center' }}>
          <div className="fr-col-12 fr-col-md-6 fr-col-xl-3 fr-col-offset-1"><Image src={LogoAta} alt="ATA" sizes="50vw" style={{ width: '100%', height: 'auto' }} /></div>
          <div className="fr-col-12 fr-col-md-6 fr-col-xl-3 fr-col-offset-1"><Image src={LogoMyCloudTaxi} alt="MyCloudTaxi" sizes="50vw" style={{ width: '100%', height: 'auto' }} /></div>
          <div className="fr-col-12 fr-col-md-6 fr-col-xl-3 fr-col-offset-1"><Image src={LogoAppsolu} alt="Appsolu" sizes="50vw" style={{ width: '100%', height: 'auto' }} /></div>
        </div>

        <div className="fr-grid-row fr-grid-row--middle" style={{ textAlign: 'center' }}>
          <div className="fr-col-12 fr-col-md-6 fr-col-xl-3 fr-col-offset-1"><Image src={LogoCourseDeRue} alt="Course de rue" sizes="50vw" style={{ width: '100%', height: 'auto' }} /></div>
          <div className="fr-col-12 fr-col-md-6 fr-col-xl-3 fr-col-offset-1"><Image src={LogoMob1taxi} alt="Mob1Taxi" sizes="50vw" style={{ width: '50%', height: 'auto' }} /></div>
          <div className="fr-col-12 fr-col-md-6 fr-col-xl-3 fr-col-offset-1"><Image src={LogoG7} alt="G7" sizes="50vw" style={{ width: '50%', height: 'auto' }} /></div>
        </div>

      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <BaseLayout title="le.taxi, le registre de disponibilité des taxis">
      <ChampagneSection />
      <GoalsSection />
      <ChallengesSection />
      <APIDescriptionSection />
      <PartnersSection />
      <QuestionSection />
    </BaseLayout>
  );
}
