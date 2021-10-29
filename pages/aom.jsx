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
            <>Inscrivez-vous au programme</>,
            <><strong>Intégrez l'API</strong> à partir des docs transmis</>,
            <strong>Testons le service ensemble</strong>,
            <>Les taxis disponibles dans votre application</>,
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
      Complétez <span className="highlight">votre application Maas</span> avec le service public du taxi
    </>
  );

  const presentationBoxContent = (
    <>
      Le.taxi est la brique publique des taxis pour le Maas qui permet aux usagers de héler un taxi
      en un clic partout en France et sans frais d’approche
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
          "Un accès facilité au service public du taxi pour vos usagers",
          "Un service facile à intégrer dans le MaaS",
          "Tous les taxis de votre territoire dans un service",
        ]}
      />

      <CardsSection
        title="L’intérêt de le.taxi pour vos usagers"
        cards={[
          {
            backgroundImage: "/images/page_aom/illustration-client-app.svg",
            content: <><span className="highlight">Les taxis disponibles à moins de 500m</span> dans votre service</>,
          },
          {
            backgroundImage: "/images/page_aom/illustration-client-waiting.svg",
            content: <><span className="highlight">Complémentarité</span> des offres de transports</>,
          },
          {
            backgroundImage: "/images/page_aom/illustration-map.svg",
            content: <>Un meilleur accès aux taxis <span className="highlight">dans votre territoire</span></>,
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
