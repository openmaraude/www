/* eslint max-len: ["error", { "code": 9999 }] */

import React from 'react';

import BaseLayout from '@/layouts/BaseLayout';

import styles from '@/styles/FAQ.module.css';

const SECTIONS = [
  {
    title: 'Maraude électronique',
    questions: [
      {
        q: <>Si je me connecte à le.taxi, dans quelles applications suis-je visible ?</>,
        a: <>Vous pouvez consulter la liste (non exhaustive) des applications clients qui proposent les taxis en maraude électronique. Toutes les applications partenaires font l’objet d'un agrément délivré par le ministère des Transports.</>,
      },
      {
        q: <>Peut-on choisir le rayon dans lequel on souhaite être visible en maraude électronique ?</>,
        a: <>Oui. Conformément à l'arrêté du xx juillet 2021, il est possible de définir une distance de 150 à 500m. Vous pouvez la régler dans votre application chauffeur.</>,
      },
      {
        q: <>Quel est l'intérêt pour les taxis ?</>,
        a: <>Avec le.taxi, on facilite l’accès aux taxis pour les usagers sur tout le territoire. le.taxi contribue à réinventer la maraude en utilisant les bénéfices des technologies actuelles.</>,
      },
      {
        q: <>Comment sont distribuées les courses ?</>,
        a: <>Les applications ont pour obligation d’afficher tous les taxis connectés à le.taxi en toute impartialité. De plus, le choix du chauffeur est fait par le client final ou en fonction de la proximité avec le client.</>,
      },
    ],
  },
  {
    title: 'Connexion',
    questions: [
      {
        q: <>Est-il nécessaire de télécharger une nouvelle application pour se connecter à le.taxi ?</>,
        a:
  <ul>
    <li>Vous ne travaillez pas avec une application ? Choisissez un service partenaire.</li>
    <li>Vous travaillez déjà avec une application ? Contactez le responsable de votre groupement, pour vérifier qu’il est connecté à le.taxi. Sinon, vous pouvez choisir une autre application dans la liste de nos partenaires.</li>
  </ul>,
      },
      {
        q: <>Est-ce que je peux choisir mon application de connexion à le.taxi, même si je suis dans un groupement ?</>,
        a: <>Oui, vous n’avez aucune obligation. Les artisans taxi sont libres de choisir l’application avec laquelle ils/elles souhaitent travailler.</>,
      },
      {
        q: <>Faut-il s’inscrire sur plusieurs services pour avoir plus de courses ?</>,
        a: <>Non. Quel que soit le système que vous choisissez, vous serez visible et bénéficierez de la même expérience. Les usagers pourront vous trouver sur toutes les applications clients.</>,
      },
    ],
  },
  {
    title: 'Frais',
    questions: [
      {
        q: <>Est-ce que je dois facturer des frais d’approche avec le.taxi ?</>,
        a: <>Non. La maraude électronique est comme la maraude physique. Il n’y a aucun frais d’approche.</>,
      },
      {
        q: <>Comment s’effectue le paiement ?</>,
        a: <>Le paiement s’effectue en voiture, comme lors d’une course classique.</>,
      },
    ],
  },
  {
    title: 'Obligation',
    questions: [
      {
        q: <>Est-ce que je dois accepter les courses qui me sont attribuées par le.taxi ?</>,
        a:
  <>
    <p>Le principe est le même que pour la maraude physique. En tant qu’artisan taxi, vous devez accepter une course en maraude électronique, si vous êtes disponible dans votre zone de prise en charge (article R.3121-23 du code des transports).</p>
    <p>Toutefois, il existe des cas de refus légitimes pour prendre en compte les spécificités de la maraude électronique :</p>
    <ul>
      <li>La destination du client est en dehors de votre Autorisation de stationnement (ADS)</li>
      <li>La course est incompatible avec votre emploi du temps</li>
      <li>Fin de service</li>
      <li>En pause</li>
      <li>Réservation à proximité.</li>
      <li>Vous êtes déjà en course ou quelqu’un d’autre vous hèle dans la rue</li>
      <li>Vous êtes en station</li>
      <li>Le lieu de prise en charge est inaccessible</li>
      <li>Le client ou la cliente est absente</li>
      <li>Autre cas légitime défini localement par arrêté préfectoral.</li>
    </ul>
  </>,
      },
      {
        q: <>Est-ce que je dois être visible sur le.taxi ?</>,
        a: <>Un artisan taxi doit être visible sur le.taxi lorsqu’il ou elle disponible sur sa zone de prise en charge, c’est-à-dire lorsque son voyant est vert.</>,
      },
    ],
  },
  {
    title: 'Réglementation taxi',
    questions: [
      {
        q: <>Est-ce que le système le.taxi respecte les zones de prise en charge définies par les ADS ?</>,
        a: <>Oui, chaque artisan taxi enregistré sur la plateforme doit renseigner son ADS. Le taxi est visible uniquement dans la zone rattachée à son ADS (commune ou ZUPC).</>,
      },
      {
        q: <>Quelles informations sont nécessaires pour m’inscrire ?</>,
        a:
  <>
    <p>
      Lors de votre inscription sur le.taxi, vous devrez renseigner des informations comme vos :
    </p>
    <ul>
      <li>Identité</li>
      <li>Numéro d’ADS</li>
      <li>Numéro de carte professionnelle</li>
      <li>Numéro d’immatriculation.</li>
    </ul>
  </>,
      },
    ],
  },
  {
    title: 'Sécurité',
    questions: [
      {
        q: <>Est-ce qu’un chauffeur VTC peut se connecter à le.taxi et recevoir des courses ?</>,
        a: <>Non, le.taxi est réservé aux taxis. Il s’agit de la version électronique de la maraude des taxis.</>,
      },
      {
        q: <>Quelle utilisation est faite de mes données personnelles lorsque je suis sur le.taxi ?</>,
        a: <>Les données personnelles transmises à le.taxi (identité, géolocalisation, numéro d’ADS, etc.) sont utilisées par le.taxi et les applicatifs clients agréés. Elles le sont dans le but de permettre aux clients de commander un taxi en maraude électronique. L’utilisation de ces données pour une autre finalité est passible d’une sanction de  cinq ans d'emprisonnement et de 300 000 euros d'amende en application de l’article 226-21 du code pénal.</>,
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h6>Sommaire</h6>
          <ul>
            {SECTIONS.map((section) => <li key={section.title}><a href={`#${section.title}`}>{section.title}</a></li>)}
          </ul>
        </nav>

        <div className={styles.content}>
          <h1>Questions fréquentes</h1>

          {SECTIONS.map((section) => (
            <section key={section.title} className={styles.section}>
              <h5 id={section.title}>{section.title}</h5>
              <dl>
                {section.questions.map((question, idx) => (
                  <React.Fragment key={String(idx)}>
                    <dt>{question.q}</dt>
                    <dd>{question.a}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}
