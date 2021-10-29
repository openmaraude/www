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
      Le.taxi est la brique publique des taxis pour le Maas qui permet aux usagers de héler un taxi
      en un clic partout en France et sans frais d’approche
    </>
  );

  return (
    <PresentationLayout>
      <LandingSection
        title={pageTitle}
        boxContent={presentationBoxContent}
        backgroundImage="/images/page_maas/illustration-application-customer.svg"
        subtitle="Les avantages pour les applications de mobilité"
        bulletPoints={[
          "Vos utilisateurs voient les taxis dans un rayon de 500m",
          "Pas de frais d’approche",
          "Le tout dans votre service",
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
