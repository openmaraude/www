import ButtonLink from '../components/ButtonLink';
import PresentationLayout, {
  LandingSection,
  CardsSection,
  BoxSection,
  TwoSidesSection,
} from '../layouts/PresentationLayout';
import QuestionSection from '../components/QuestionSection';

import stylesTwoSides from '../styles/Taxi.two_sides.module.css';

function TwoSidesLeft() {
  return (
    <>
      <h6 className={stylesTwoSides.subtitle}>
        Vous êtes membre d’un groupement
      </h6>

      <p>
        Renseignez-vous après de votre groupement. Il pourra vous dire si son
        application est connectée.
      </p>
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

      <ButtonLink href="https://le.taxi" variant="light">Voir la liste</ButtonLink>
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
      le.taxi, un service public numérique qui permet d’accéder à de <strong>nouvelles courses en maraude électronique.</strong>
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
      />

      <CardsSection
        title="Les avantages de la maraude électronique"
        cards={[
          {
            backgroundImage: "/images/page_taxi/illustration-clock.svg",
            content: <><span className="highlight">Optimiser le temps</span> entre 2 courses</>,
          },
          {
            backgroundImage: "/images/page_taxi/illustration-taxi-on-map.svg",
            content: <><span className="highlight">Les clients vous localisent</span> à moins de 500m</>,
          },
          {
            backgroundImage: "/images/page_taxi/illustration-client-waiting.svg",
            content: <>Paiement en voiture, <span className="highlight">sans frais d’approche</span></>,
          },
        ]}
      />

      <BoxSection
        content={[
          <>
          Réduisez les temps d’attente aux bornes
          </>,
          <>Plus de clients à proximité</>,
          <>Tous les taxis de France, dans 1 service</>,
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
