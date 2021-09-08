import ButtonLink from '../components/ButtonLink';
import PresentationLayout, {
  LandingSection,
  CardsSection,
  BoxSection,
  TwoSidesSection,
} from '../layouts/PresentationLayout';

import QuestionSection from '../components/QuestionSection';
import StyledNumberedList from '../components/StyledNumberedList';

import stylesTwoSides from '../styles/TaxisGroup.two_sides.module.css';

function TwoSidesLeft() {
  return (
    <>
      <h6 className={stylesTwoSides.subtitle}>
        Vous avez <span className="underline">déjà</span> une application
      </h6>

      <StyledNumberedList elements={[
        <><strong>Inscrivez-vous</strong> au programme le.taxi</>,
        <><strong>Intégrez l'API</strong> à votre application</>,
        <><strong>Vos chauffeurs</strong> reçoivent des courses</>,
      ]} />

      <ButtonLink href="https://le.taxi">Inscrivez-vous</ButtonLink>
    </>
  );
}

function TwoSidesRight() {
  return (
    <>
      <h6 className={stylesTwoSides.subtitle}>
        Vous n’avez <span className="underline">pas</span> d’application
        <small>Ou, ne souhaitez pas intégrer le.taxi à votre service.</small>
      </h6>

      <p className={stylesTwoSides.textContent}>
        Vos chauffeurs peuvent <strong>rejoindre l’un de nos partenaires.</strong>
      </p>

      <ButtonLink href="https://le.taxi" variant="light">Voir la liste des partenaires</ButtonLink>
    </>
  );
}

export default function TaxisGroupPage() {
  const pageTitle = (
      <>
        <span className="highlight">Connectez vos taxis</span> à la maraude électronique
      </>
    );

  const presentationBoxContent = (
    <>
      le.taxi, le <strong>service public numérique</strong> qui permet de
      trouver de <strong>nouveaux clients</strong> avec
      la <strong>maraude électronique</strong>.
    </>
  );

  return (
    <PresentationLayout>
      <LandingSection
          title={pageTitle}
          boxContent={presentationBoxContent}

          backgroundImage="/images/page_taxis_group/illustration-customers.svg"
          subtitle="Nos ambitions pour les groupements de taxis"
          bulletPoints={[
            "Accompagner la modernisation de l’offre de taxis",
            "Encore plus de courses pour les taxis",
            "Votre clientèle trouve un taxi partout en France, via votre application",
          ]}
      />

      <CardsSection
        title="Les avantages de la maraude électronique"
        cards={[
          {
            backgroundImage: "/images/page_taxis_group/illustration-client-app.svg",
            content: <><span className="highlight">Un taxi à moins de 500m</span> sans frais d’approche</>,
          },
          {
            backgroundImage: "/images/page_taxis_group/illustration-clock.svg",
            content: <><span className="highlight">Optimiser le temps</span> entre 2 réservations</>,
          },
          {
            backgroundImage: "/images/page_taxis_group/illustration-map.svg",
            content: <><span className="highlight">Un meilleur accès aux taxis</span> dans toute la France</>,
          },
        ]}
      />

      <BoxSection
        content={[
          <>
            75 % de Français utilisent un smartphone*
            <br />
            <br />
            <small>*Source : FranceNum.gouv.fr</small>
          </>,
          <>Les taxis disponibles dans les applications clients</>,
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
