/*
 * This layout is used by the presentation pages for the different types of
 * partners.
 */

import Image from 'next/image';

import BaseLayout from './BaseLayout';
import ButtonLink from '../components/ButtonLink';

import styles from '../styles/layouts/Presentation.module.css';
import stylesLanding from '../styles/layouts/Presentation.landing.module.css';
import stylesCards from '../styles/layouts/Presentation.cards.module.css';
import stylesBox from '../styles/layouts/Presentation.box.module.css';
import stylesTwoSides from '../styles/layouts/Presentation.two_sides.module.css';

export function LandingSection({
  title,
  boxContent,
  backgroundImage,
  subtitle,
  bulletPoints,
}) {
  return (
    <section className={stylesLanding.section}>
      <div className={stylesLanding.sectionLeft}>
        <h2>{title}</h2>

        <div className={stylesLanding.box}>
          {boxContent}
        </div>
      </div>

      <div className={stylesLanding.sectionRight}>
        <div className={stylesLanding.illustration}>
          <div className={stylesLanding.illustrationContainer}>
            <Image src={backgroundImage} alt="Illustration" layout="fill" />
          </div>
        </div>

        <h4 className="highlight">{subtitle}</h4>

        <ul>
          {bulletPoints.map((elem) => <li key={elem}><strong>{elem}</strong></li>)}
        </ul>

        <div className={stylesLanding.CTA}>
          <ButtonLink href="#">S'inscrire</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function CardsSection({
  title,
  cards,
}) {
  return (
    <section className={stylesCards.section}>
      <h4 className="highlight">{title}</h4>

      <div className={stylesCards.cards}>
        {cards.map((card) => (
          <div key={card.backgroundImage} className={stylesCards.card}>
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
    </section>
  );
}

export function BoxSection({ content }) {
  return (
    <section className={stylesBox.section}>
      <ul>
        {content.map((elem, idx) => (
          <li key={idx}>{elem}</li>
        ))}
      </ul>
    </section>
  );
}

export function TwoSidesSection({ title, left, right }) {
  return (
    <section className={stylesTwoSides.section}>
      <div className={stylesTwoSides.left}>
        <h4>{title}</h4>
        <div className={stylesTwoSides.content}>
        {left}
        </div>
      </div>
      <div className={stylesTwoSides.right}>
        <h4></h4>
        <div className={stylesTwoSides.content}>
        {right}
        </div>
      </div>
    </section>
  );
}

export default function PresentationLayout({ children }) {
  return (
    <BaseLayout>
      <div className={styles.page}>
        {children}
      </div>
    </BaseLayout>
  );
}
