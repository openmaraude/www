import React from 'react';

import TextContentLayout, { Content, Menu } from '@/layouts/TextContentLayout';

import styles from '@/styles/Partners.module.css';

const SECTIONS = [
  { title: "Application chauffeur" },
  { title: "Application client" },
  { title: "Éditeur logiciel" },
];

function Card() {
  return (
    <div className="fr-card fr-enlarge-link">
      <div className="fr-card__body">
        <h4 className="fr-card__title">
          <a href="#" className="fr-card__link">Paris Taxis</a>
        </h4>
        <p className="fr-card__desc">Zone Parisienne</p>
      </div>
      <div className="fr-card__img">
        <img src="/images/partners/paris-taxis.png" className="fr-responsive-im" alt="" />
      </div>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <TextContentLayout>
      <Menu title="Sommaire" items={SECTIONS} />

      <Content>
        <h1>Choissisez une de nos application partenaire</h1>

        <h5 id={SECTIONS[0].title}>{SECTIONS[0].title}</h5>
        <h6>
          Taxis, téléchargez une application partenaire pour recevoir les
          courses en maraude électronique
        </h6>

        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col"><Card /></div>
          <div className="fr-col"><Card /></div>
        </div>

        <h5 id={SECTIONS[1].title}>{SECTIONS[1].title}</h5>
        <h6>
          Vos clients pourront vous trouver dans toutes ces applications
          partenaires
        </h6>

        <h5 id={SECTIONS[2].title}>{SECTIONS[2].title}</h5>
        <h6>
          Les partenaires ci-dessous peuvent intégrer l’API à votre application
          et faire bénéficier votre flotte du service
        </h6>
      </Content>
    </TextContentLayout>
  );
}
