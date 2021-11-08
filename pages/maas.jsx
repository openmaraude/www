import Link from 'next/link';

import PresentationLayout, {
  LandingSection,
  BoxSection,
} from '@/layouts/PresentationLayout';

import ButtonLink from '@/components/ButtonLink';

import QuestionSection from '@/components/QuestionSection';
import StyledNumberedList from '@/components/StyledNumberedList';

function HowToSection() {
  return (
    <section>
      <div className="fr-container">
        <h4 className="fr-mt-3w fr-mb-5w">Connectez simplement l’API le.taxi à votre application</h4>
        <StyledNumberedList elements={[
          <>Valider le formulaire de demande d'accès</>,
          <>Intégrez l’API à  à partir des docs transmis</>,
          <>Test et validation</>,
          <>Taxis disponibles dans votre application</>,
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

export default function MaaSPage() {
  const pageTitle = (
    <>
      <span className="highlight">Élargissez votre offre</span> en proposant aussi le taxi
    </>
  );

  const presentationBoxContent = (
    <>
      Avec le.taxi, vous permettez à vos utilisateurs de trouver le taxi le
      plus proche, gratuitement, en un clic.
      <br />
      <br />
      Disponible partout en France.
    </>
  );

  return (
    <PresentationLayout>
      <LandingSection
        title={pageTitle}
        boxContent={presentationBoxContent}
        backgroundImage="/images/page_maas/illustration-application-customer.svg"
        subtitle="Les avantages"
        bulletPoints={[
          "Vos utilisateurs voient les taxis dans un rayon de 500m",
          "Il n’y a aucun frais d’approche",
          "Toutes les offres de mobilité dans votre service",
        ]}
      />

      <BoxSection
        content={[
          <>Tous les taxis de France<br />dans votre service</>,
          <>Gratuit pour vous<br />et vos utilisateurs</>,
          <>Une offre proposée<br />par le service public</>,
        ]}
      />

      <HowToSection />
      <QuestionSection />
    </PresentationLayout>
  );
}
