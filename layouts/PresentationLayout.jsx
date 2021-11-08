/*
 * This layout is used by the presentation pages for the different types of
 * partners.
 */

import PropTypes from 'prop-types';

import Image from 'next/image';
import Link from 'next/link';

import BaseLayout from '@/layouts/BaseLayout';

import ButtonLink from '@/components/ButtonLink';

import styles from '@/styles/layouts/Presentation.module.css';
import stylesLanding from '@/styles/layouts/Presentation.landing.module.css';
import stylesCards from '@/styles/layouts/Presentation.cards.module.css';
import stylesBox from '@/styles/layouts/Presentation.box.module.css';
import stylesTwoSides from '@/styles/layouts/Presentation.two_sides.module.css';

export function LandingSection({
  title,
  boxContent,
  backgroundImage,
  subtitle,
  bulletPoints,
  enableCTA,
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
                <Image src={backgroundImage} alt="Illustration" layout="fill" />
              </div>
            </div>

            <h2 className="highlight">{subtitle}</h2>

            <ul>
              {bulletPoints.map((elem) => <li key={elem}><strong>{elem}</strong></li>)}
            </ul>

            {enableCTA && (
              <div className={stylesLanding.CTA}>
                <Link href="https://api.gouv.fr/les-api/le-taxi/demande-acces" passHref>
                  <ButtonLink>S'inscrire</ButtonLink>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

LandingSection.defaultProps = {
  enableCTA: true,
};

LandingSection.propTypes = {
  title: PropTypes.node.isRequired,
  boxContent: PropTypes.node.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  subtitle: PropTypes.node.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.node).isRequired,
  enableCTA: PropTypes.bool,
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
                  <Image src={card.backgroundImage} layout="fill" />
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

export function BoxSection({ content }) {
  return (
    <section className={stylesBox.section}>
      <div className="fr-container">
        <ul className="fr-grid-row">
          {content.map((elem, idx) => (
            <li className="fr-col-12 fr-mb-5w fr-mb-md-1w fr-col-sm fr-pl-2w fr-pr-2w" key={String(idx)}>{elem}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

BoxSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export function TwoSidesSection({ title, left, right }) {
  return (
    <section className={stylesTwoSides.section}>
      <div className="fr-container">
        <div className="fr-grid-row">
          <div className={`fr-col-12 fr-col-md-6 fr-pl-1w fr-pr-1w ${stylesTwoSides.leftSide}`}>
            <h2 className="fr-mt-3w">{title}</h2>
            <div className={stylesTwoSides.content}>
              {left}
            </div>
          </div>
          <div className={`fr-col-12 fr-col-md-6 fr-pl-1w fr-pr-1w ${stylesTwoSides.rightSide}`}>
            <h2 className="fr-mt-3w">{title}</h2>
            <div className={stylesTwoSides.content}>
              {right}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

TwoSidesSection.propTypes = {
  title: PropTypes.string.isRequired,
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default function PresentationLayout({ children }) {
  return (
    <BaseLayout>
      <div className={styles.page}>
        {children}
      </div>
    </BaseLayout>
  );
}

PresentationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
