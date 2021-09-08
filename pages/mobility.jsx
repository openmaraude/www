import PresentationLayout, {
  LandingSection,
  CardsSection,
  BoxSection,
} from '../layouts/PresentationLayout';
import QuestionSection from '../components/QuestionSection';

export default function GroupsPage() {
  const pageTitle = (
      <>
        Complétez <span className="highlight">votre application Maas</span> avec le service public du taxi
      </>
    );

  const presentationBoxContent = (
    <>
      Le.taxi est la brique publique des taxis pour le Maas qui permet aux usagers de héler un taxi en un clic partout en France et sans frais d’approche
    </>
  );

  return (
    <PresentationLayout>
      <LandingSection
          title={pageTitle}
          boxContent={presentationBoxContent}

          backgroundImage="/images/page_mobility/illustration-city.svg"
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
            backgroundImage: "/images/page_mobility/illustration-client-app.svg",
            content: <><span className="highlight">Les taxis disponibles à moins de 500m</span> dans votre service</>,
          },
          {
            backgroundImage: "/images/page_mobility/illustration-client-waiting.svg",
            content: <><span className="highlight">Complémentarité</span> des offres de transports</>,
          },
          {
            backgroundImage: "/images/page_mobility/illustration-map.svg",
            content: <>Un meilleur accès aux taxis <span className="highlight">dans votre territoire</span></>,
          },
        ]}
      />

      <BoxSection
        content={[
          <>&nbsp;</>
        ]}
      />

      <QuestionSection />
    </PresentationLayout>
  );
}
