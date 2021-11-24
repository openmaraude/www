import Link from 'next/link';

import PresentationLayout, {
  LandingSection,
  CardsSection,
  BoxSection,
  TwoSidesSection,
} from '@/layouts/PresentationLayout';

import ButtonLink from '@/components/ButtonLink';
import QuestionSection from '@/components/QuestionSection';

import stylesTwoSides from '@/styles/Taxi.two_sides.module.css';

function TwoSidesLeft() {
  return (
    <>
      <h6 className={stylesTwoSides.subtitle}>
        Vous êtes membre d’un groupement ou d'une centrale radio
      </h6>

      <p>
        Renseignez son nom ainsi que votre email pour être tenu informé de sa connexion au registre
        le.taxi.
      </p>

      <Link href="https://4f5c450d.sibforms.com/serve/MUIEAD0z8iCpmGPojLy4HKONuV0_pX7WwN6XXdRD9HC7B8EZVubFYgX0eMHjCdAu4EBd42c0utm9cECGmiQ8Jso2mw1K25YCzedBMSlkFDeJ02y43vgYY_HkkC6sgZ_I7cx23gcrzWORhx_X02g9xYXZKZEw_9EWnoRKCsVN5xTUUKNQLq6PI0sidIzx_ryokIXKTgYBsRPsN2Yn" passHref>
        <ButtonLink>Recevoir les informations</ButtonLink>
      </Link>
    </>
  );
}

function TwoSidesRight() {
  return (
    <>
      <h6 className={stylesTwoSides.subtitle}>
        Vous êtes indépendant
      </h6>

      <p>Choisissez votre futur partenaire parmi les services agréés.</p>

      <Link href="/partners" passHref>
        <ButtonLink variant="secondary">Voir la liste</ButtonLink>
      </Link>
    </>
  );
}

export default function TaxiPage() {
  const pageTitle = (
    <>
      <span className="highlight">Un lien direct avec vos clients</span> grâce à la maraude électronique
    </>
  );

  const presentationBoxContent = (
    <>
      le.taxi, un service public numérique qui permet d’accéder à
      de <strong>nouvelles courses en maraude électronique.</strong>
    </>
  );

  return (
    <PresentationLayout>
      <LandingSection
        title={pageTitle}
        boxContent={presentationBoxContent}
        backgroundImage="/images/page_taxi/illustration-customer.svg"
        subtitle="Notre ambition pour les artisans taxis"
        bulletPoints={[
          "Accompagner la modernisation de l’offre de taxis",
          "Obtenir plus de courses",
          "Simplifier votre mise en conformité avec la legislation en quelques clics",
        ]}
        enableCTA={false}
      />

      <CardsSection
        title="Les avantages de la maraude électronique"
        cards={[
          {
            backgroundImage: "/images/page_taxi/illustration-clock.svg",
            content: <><span className="highlight">Optimiser le temps</span><br />entre 2 courses</>,
          },
          {
            backgroundImage: "/images/page_taxi/illustration-taxi-on-map.svg",
            content: <><span className="highlight">Les clients vous localisent</span><br />à moins de 500m</>,
          },
          {
            backgroundImage: "/images/page_taxi/illustration-client-waiting.svg",
            content: <>Paiement en voiture,<br /><span className="highlight">sans frais d’approche</span></>,
          },
        ]}
      />

      <BoxSection
        content={[
          <>Réduisez les temps d’attente aux<br />bornes</>,
          <>Plus de clients à proximité</>,
          <>Tous les taxis de France, dans 1<br />service</>,
        ]}
      />

      <TwoSidesSection
        title="Comment utiliser le.taxi ?"
        left={<TwoSidesLeft />}
        right={<TwoSidesRight />}
      />

      <QuestionSection />
    </PresentationLayout>
  );
}
