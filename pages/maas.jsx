import PresentationLayout, {
  LandingSection,
  BoxSection,
} from '@/layouts/PresentationLayout';

import QuestionSection from '@/components/QuestionSection';
import StyledNumberedList from '@/components/StyledNumberedList';

import stylesHowto from '@/styles/MaaS.howto.module.css';

function HowToSection() {
  return (
    <section className={stylesHowto.section}>
      <h4>Connectez simplement l’API le.taxi à votre application</h4>
      <StyledNumberedList elements={[
        <>Valider le formulaire de demande d'accès</>,
        <>Intégrez l’API à  à partir des docs transmis</>,
        <>Test et validation</>,
        <>Taxis disponibles dans votre application</>,
      ]}
      />
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
