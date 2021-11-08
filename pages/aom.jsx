import Link from 'next/link';

import PresentationLayout, {
  LandingSection,
  CardsSection,
  BoxSection,
} from '@/layouts/PresentationLayout';

import ButtonLink from '@/components/ButtonLink';

import QuestionSection from '@/components/QuestionSection';
import StyledNumberedList from '@/components/StyledNumberedList';

function HowToSection() {
  return (
    <section>
      <div className="fr-container">
        <h4 className="fr-mt-3w fr-mb-5w">Comment connecter votre application à le.taxi ?</h4>
        <StyledNumberedList
          elements={[
            <>Inscrivez-vous<br />au programme</>,
            <>Intégrez<br /><strong>l'API le.taxi</strong></>,
            <><strong>Testons le service ensemble</strong></>,
            <>Les taxis disponibles pour<br /><strong>tous vos usagers</strong></>,
          ]}
        />

      </div>
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--center fr-mb-3w">
          <Link href="https://api.gouv.fr/les-api/le-taxi/demande-acces" passHref>
            <ButtonLink>S'inscrire</ButtonLink>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AOMPage() {
  const pageTitle = (
    <>
      Complétez votre offre de services publics avec les taxis
    </>
  );

  const presentationBoxContent = (
    <>
      Le.taxi permet aux usagers de héler un taxi en un clic partout en France.
      <br />
      Vous pouvez l’ajouter à vos services Maas.
    </>
  );

  return (
    <PresentationLayout>
      <LandingSection
        title={pageTitle}
        boxContent={presentationBoxContent}
        backgroundImage="/images/page_aom/illustration-city.svg"
        subtitle="Les avantages pour les acteurs publics"
        bulletPoints={[
          "Vos usagers peuvent trouver des taxis plus facilement",
          "Un service simple à intégrer dans le MaaS",
          "Tous les taxis de votre territoire dans vos services",
        ]}
      />

      <CardsSection
        title="L’intérêt de le.taxi pour vos usagers"
        cards={[
          {
            backgroundImage: "/images/page_aom/illustration-client-app.svg",
            content: <><span className="highlight">Les taxis disponibles à moins de<br />500m</span> dans vos services</>,

          },
          {
            backgroundImage: "/images/page_aom/illustration-client-waiting.svg",
            content: <><span className="highlight">Compléter votre offres de<br />transports</span> avec les taxis</>,
          },
          {
            backgroundImage: "/images/page_aom/illustration-map.svg",
            content: <>Un meilleur accès aux taxis<br /><span className="highlight">dans votre territoire</span></>,
          },
        ]}
      />

      <BoxSection
        content={[
          <>Disponibilité des taxis sur tout le territoire (loi LOM / Open data)</>,
          <>Accès gratuit</>,
          <>Service public 100% Taxis</>,
        ]}
      />

      <HowToSection />

      <QuestionSection />
    </PresentationLayout>
  );
}
