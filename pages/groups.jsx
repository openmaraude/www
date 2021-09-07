import Image from 'next/image';

import BaseLayout from '../layouts/BaseLayout';
import ButtonLink from '../components/ButtonLink';
import PresentationLayout, {
  LandingSection,
  CardsSection,
} from '../layouts/PresentationLayout';

export default function GroupsPage() {
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

          backgroundImage="/images/groupspage/illustration-customers.svg"
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
            backgroundImage: "/images/groupspage/illustration-client-app.svg",
            content: <><span className="highlight">Un taxi à moins de 500m</span> sans frais d’approche</>,
          },
          {
            backgroundImage: "/images/groupspage/illustration-clock.svg",
            content: <><span className="highlight">Optimiser le temps</span> entre 2 réservations</>,
          },
          {
            backgroundImage: "/images/groupspage/illustration-map.svg",
            content: <><span className="highlight">Un meilleur accès aux taxis</span> dans toute la France</>,
          },
        ]}
      />
    </PresentationLayout>
  );
}
