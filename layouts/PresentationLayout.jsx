/*
 * This layout is used by the presentation pages for the different types of
 * partners.
 */

import PropTypes from 'prop-types';

import Image from 'next/image';

import ButtonLink from '@/components/ButtonLink';

import stylesLanding from '@/styles/layouts/Presentation.landing.module.css';
import stylesCards from '@/styles/layouts/Presentation.cards.module.css';

export function LandingSection({
  title,
  boxContent,
  backgroundImage,
  subtitle,
  bulletPoints,
  enableCTA,
  enableFlyer,
}) {
  return (
    <section className={stylesLanding.section}>
      <div className={`fr-container ${stylesLanding.boxContainer}`}>
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-6">
            <h1>{title}</h1>
            <div className={`${stylesLanding.box} fr-text--lead`}>
              {boxContent}
            </div>
          </div>

          <div className="fr-col-12 fr-col-md-6 fr-pl-3w fr-mb-3w">
            <div className={stylesLanding.illustration}>
              <div className={stylesLanding.illustrationContainer}>
                <Image src={backgroundImage} alt="Illustration" fill />
              </div>
            </div>

            <h2 className="highlight">{subtitle}</h2>

            <ul>
              {bulletPoints.map((elem) => <li key={elem}><strong>{elem}</strong></li>)}
            </ul>

            <div className="fr-container">
              <div className="fr-grid-row">
                {enableCTA && (
                  <div className={stylesLanding.CTA}>
                    <ButtonLink href="https://api.gouv.fr/les-api/le-taxi/demande-acces">S'inscrire</ButtonLink>
                  </div>
                )}
                {enableFlyer && (
                  <>
                    <div className="fr-ml-1w fr-mr-1w ">
                      <ButtonLink href="/assets/documents/22016_TAXI_maraude_flyerA5_BATweb.pdf?20230313" variant="secondary">Télécharger le flyer</ButtonLink>
                    </div>
                    <div className="fr-mt-1w">
                      <ButtonLink href="/assets/documents/22077_TAXI-livretA5-chauffeur_BATweb.pdf?20230313" variant="secondary">Télécharger le livret chauffeur</ButtonLink>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LandingSection.defaultProps = {
  enableCTA: true,
  enableFlyer: false,
};

LandingSection.propTypes = {
  title: PropTypes.node.isRequired,
  boxContent: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.node).isRequired,
  enableCTA: PropTypes.bool,
  enableFlyer: PropTypes.bool,
};

export function CardsSection({
  title,
  cards,
}) {
  return (
    <section className={stylesCards.section}>
      <div className="fr-container">
        <h2 className="highlight">{title}</h2>

        <div className="fr-grid-row fr-mt-5w">
          {cards.map((card) => (
            <div key={card.backgroundImage} className="fr-col-12 fr-col-md-4 fr-mb-5w">
              <div className={stylesCards.illustration}>
                <div className={stylesCards.illustrationContainer}>
                  <Image src={card.backgroundImage} fill />
                </div>
              </div>
              <div className={stylesCards.text}>
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

CardsSection.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
