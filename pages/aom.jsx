import Image from 'next/image';
import Link from 'next/link';

import BaseLayout from '@/layouts/BaseLayout';
import { CardsSection } from '@/layouts/PresentationLayout';

import ButtonLink from '@/components/ButtonLink';

import IllustrationCity from '@/public/images/page_aom/illustration-city.svg';

export default function AOMPage() {
  return (
    <BaseLayout title="Acteur public ou privé">
      <div className="fr-container">
        <div className="fr-callout fr-callout--blue-ecume">
          <h1 className="fr-callout__title"><span className="highlight">le.taxi&nbsp;: l'API qui permet d'ajouter l'offre taxis dans les applications de mobilité</span></h1>
          <div className="fr-grid-row fr-callout__text">
            <div className="fr-col">
              <Image src={IllustrationCity} className="fr-responsive-img" layout="responsive" />
            </div>
            <div className="fr-col fr-m-auto" style={{ textAlign: 'center' }}>
              <ButtonLink href="/contact">Je contacte l'équipe le.taxi</ButtonLink>
              <p className="fr-mt-6w fr-ml-6w">
                <Link href="/taxi">Je suis un chauffeur taxi</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <CardsSection
        title="L’intérêt de le.taxi pour vos usagers"
        cards={[
          {
            backgroundImage: "/images/page_aom/illustration-client-app.svg",
            content: <>Une mobilité qui comble <span className="highlight">les points de rupture</span> (territoires non-desservis, horaires spécifiques, grève...)</>,
          },
          {
            backgroundImage: "/images/page_aom/illustration-client-waiting.svg",
            content: <>Le taxi <span className="highlight">favorise l'inclusion sociale</span> (personnes en situation de handicap, seniors, femmes enceintes...)</>,
          },
          {
            backgroundImage: "/images/page_aom/illustration-map.svg",
            content: <>Un taxi <span className="highlight">à moins de 500&nbsp;m</span> à tout moment de la journée</>,
          },
        ]}
      />

      <div className="fr-container">
        <div className="fr-grid-row fr-callout__text">
          <div className="fr-col">
            <div className="fr-callout fr-callout--blue-ecume">
              <p className="fr-callout__text" style={{ textAlign: 'center' }}>
                <ButtonLink href="/contact">Je contacte l'équipe le.taxi</ButtonLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-container fr-background-alt--blue-france">
        <CardsSection
          title="Ce que le.taxi apporte à vos services"
          cards={[
            {
              backgroundImage: "/images/homepage/taxis_group.svg",
              content: (
                <>
                  Offre complète avec tous les taxis du territoire,
                  peu importe leur profil (artisan, salarié, affilié)
                </>
              ),
            },
            {
              backgroundImage: "/images/page_taxi/illustration-clock.svg",
              content: (
                <>
                  Intégration technique ultra-simple<br />
                  Appels à l'API gratuits et illimités
                </>
              ),
            },
            {
              backgroundImage: "/images/page_aom/illustration-map.svg",
              content: <>Un meilleur accès à vos territoires</>,
            },
          ]}
        />
      </div>
    </BaseLayout>
  );
}
