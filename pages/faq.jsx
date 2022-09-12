/* eslint max-len: ["error", { "code": 9999 }] */

import React from 'react';

import TextContentLayout, { Content, Menu } from '@/layouts/TextContentLayout';

const SECTIONS = [
  {
    title: 'Général',
    categories: [
      {
        title: 'Maraude',
        questions: [
          {
            q: <>À quoi sert le.taxi ?</>,
            a: <>Le.taxi est une API qui permet de commander un taxi en maraude électronique depuis son smartphone dans toute la France.</>,
          },
          {
            q: <>Qu’est-ce qu’une API ?</>,
            a: <>Une API est une interface numérique qui permet d’intégrer facilement des données au sein d’un site internet ou d’une application. Pour le.taxi, l’API permet de mettre à disposition les données de localisation et de disponibilité des taxis dans les applications de mobilité.</>,
          },
          {
            q: <>Qu’est-ce que la maraude électronique ?</>,
            a: <>La maraude électronique consiste à arrêter un taxi au vert dans la rue depuis son smartphone : immédiat, à moins de 500m et sans frais d’approche.</>,
          },
        ],
      },
      {
        title: 'Frais',
        questions: [
          {
            q: <>Comment s’effectue le paiement ?</>,
            a: <>Le paiement s’effectue en voiture, comme lors d’une course classique.</>,
          },
          {
            q: <>La connexion à l’API le.taxi est elle payante ?</>,
            a: <>Non, le.taxi est un service 100% gratuit développé par l’Etat.</>,
          },
        ],
      },
    ],
  },

  {
    title: 'Artisans taxi',
    categories: [
      {
        title: 'Maraude',
        questions: [
          {
            q: <>Si je me connecte à le.taxi, dans quelles applications suis-je visible ?</>,
            a: <>Vous pouvez consulter la liste (non exhaustive) des applications clients qui proposent les taxis en maraude électronique. Toutes les applications partenaires font l’objet d'un agrément délivré par le ministère des Transports.</>,
          },
          {
            q: <>Peut-on choisir le rayon dans lequel on souhaite être visible en maraude électronique ?</>,
            a: <>Pas encore. Cette fonctionnalité sera disponible dans les prochains mois. Actuellement le chauffeur est visible dans un rayon de 500 mètres autours du véhicule.</>,
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
            a: (
              <ul>
                <li>Vous ne travaillez pas avec une application ? Choisissez un service partenaire.</li>
                <li>Vous travaillez déjà avec une application ? Contactez le responsable de votre groupement, pour vérifier qu’il est connecté à le.taxi. Sinon, vous pouvez choisir une autre application dans la liste de nos partenaires.</li>
              </ul>
            ),
          },
          {
            q: <>Est-ce que je peux choisir mon application de connexion à le.taxi, même si je suis dans un groupement ?</>,
            a: <>Oui, vous n’avez aucune obligation. Les artisans taxi sont libres de choisir l’application avec laquelle ils/elles souhaitent travailler.</>,
          },
          {
            q: <>Faut-il s’inscrire sur plusieurs systèmes pour recevoir plus de courses ?</>,
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
          {
            q: <>La connexion à Le.taxi est elle payante ?</>,
            a: <>Non, Le.taxi est un service 100% gratuit développé par l’Etat. Afin de s’y connecter le chauffeur doit nénmoins recourir à un applicatif client qui peut imposer des frais de service. Il est possible de connaitre les offres gratuites en consultant la page dédiée.</>,
          },
        ],
      },
      {
        title: 'Obligation',
        questions: [
          {
            q: <>Ai-je l’obligation de me connecter à Le.taxi ?</>,
            a: <>Dans quelques semaines, l'obligation de connexion à Le.taxi sera effective pour l’ensemble des artisans taxis de  France. Pour prendre de l’avance et me mettre en conformité avec cette future obligation je peux me connecter dès maintenant via un partenaire agréé.</>,
          },
          {
            q: <>Est-ce que je dois accepter les courses qui me sont attribuées par le.taxi ?</>,
            a: <>Le principe est le même que pour la maraude physique. En tant qu’artisan taxi, vous devez accepter une course en maraude électronique, si vous êtes disponible dans votre zone de prise en charge (article R.3121-23 du code des transports).</>,
          },
          {
            q: <>Est-ce que je dois être visible sur le.taxi ?</>,
            a: <>Un artisan taxi doit être visible sur le.taxi lorsqu’il ou elle disponible sur sa zone de prise en charge, c’est-à-dire lorsque son voyant est vert.</>,
          },
          {
            q: <>Je viens de recevoir une course via Le.taxi, un client me hèle dans la rue, que dois-je faire ?</>,
            a: <>Vous pouvez dans ce cas indiquer dans votre application que vous refusez à posteriori la demande de course.</>,
          },
        ],
      },
      {
        title: 'Réglementation taxi',
        questions: [
          {
            q: <>Est-ce que le système le.taxi respecte les zones de prise en charge définies par les ADS ?</>,
            a: <>Oui, chaque artisan taxi enregistré sur la plateforme doit renseigner son ADS. Le taxi est  visible uniquement dans la zone rattachée à son ADS (commune ou ZUPC).</>,
          },
          {
            q: <>Quelles informations sont nécessaires pour m’inscrire ?</>,
            a: (
              <>
                Lors de votre inscription sur le.taxi, vous devrez renseigner des informations comme votre :
                <ul>
                  <li>Identité</li>
                  <li>Numéro d’ADS</li>
                  <li>Numéro de carte professionnelle</li>
                  <li>Numéro d’immatriculation.</li>
                </ul>
              </>
            ),
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
            q: <>Quelle utilisation est faite de mes données personnelles lorsque je suis connecté à le.taxi ?</>,
            a: <>Les données personnelles transmises à le.taxi (identité, géolocalisation, numéro d’ADS, etc.) sont utilisées par le.taxi et les applicatifs clients agréés. Elles le sont dans le but de permettre aux clients de commander un taxi en maraude électronique. L’utilisation de ces données pour une autre finalité est passible d’une sanction de  cinq ans d'emprisonnement et de 300 000 euros d'amende en application de l’article 226-21 du code pénal. A ce titre, ces données ne sont pas non plus transmises aux autres services de l’Etat (fisc, ministère de la justice).</>,
          },
          {
            q: <>Qui développe et gère le.taxi ?</>,
            a: <>Le.taxi est un service 100% géré et financé par le ministère des Transports.</>,
          },
        ],
      },
    ],
  },

  {
    title: 'Groupements de taxis',
    categories: [
      {
        title: 'Maraude',
        questions: [
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
            q: <>Comment puis-je faire bénéficier de la connexion à le.taxi aux chauffeurs membres de mon groupement de taxis ?</>,
            a: (
              <>
                Vous fournissez déjà une application à vos chauffeurs ?

                <ul>
                  <li>1. Inscrivez-vous via le formulaire d’accès à l’API sur notre site.</li>
                  <li>2. Contactez le prestataire de votre application pour qu’ils vous active la connexion à l’API.</li>
                </ul>

                Vous n’utilisez pas d’application pour distribuer les courses à vos chauffeurs ?

                <ul>
                  <li>1. Les chauffeurs membres de votre groupement peuvent télécharger l’une des applications partenaires visible sur notre site.</li>
                  <li>2. Ou vous pouvez vous rapprochez d’un de nos partenaires “éditeur de logiciel” pour avoir votre propre application.</li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        title: 'Frais',
        questions: [
          {
            q: <>La connexion à Le.taxi est elle payante ?</>,
            a: <>Non, Le.taxi est un service 100% gratuit développé par l’Etat. Afin de s’y connecter le chauffeur doit néanmoins recourir à un applicatif client qui peut imposer des frais de service. Il est possible de connaitre les offres gratuites en consultant la page dédiée.</>,
          },
        ],
      },
      {
        title: 'Obligation',
        questions: [
          {
            q: <>Ai-je l’obligation de connecter mon application à Le.taxi ?</>,
            a: <>L’obligation de connexion repose sur les chauffeurs de taxis. Les radios / groupements de taxis n’ont pas l’obligation d’activer la connexion pour leur application.</>,
          },
        ],
      },
      {
        title: 'Réglementation taxi',
        questions: [
          {
            q: <>Est-ce que le système le.taxi respecte les zones de prise en charge définies par les ADS ?</>,
            a: <>Oui, chaque artisan taxi enregistré sur la plateforme doit renseigner son ADS. Le taxi est  visible uniquement dans la zone rattachée à son ADS (commune ou ZUPC).</>,
          },
        ],
      },
      {
        title: 'Sécurité',
        questions: [
          {
            q: <>Qui développe et gère le.taxi ?</>,
            a: <>Le.taxi est un service 100% géré et financé par le ministère des Transports.</>,
          },
        ],
      },
    ],
  },

  {
    title: 'Mobilité publique',
    categories: [
      {
        title: 'Offre',
        questions: [
          {
            q: <>Quel est l’intérêt de l’API le.taxi pour le MaaS ?</>,
            a: <> L’API le.taxi, permet à vos utilisateurs d’accéder à tous les taxis de France dans un service et sans frais d’approche grâce à maraude électronique.</>,
          },
          {
            q: <>L’API le.taxi permet-elle de réserver un taxi ?</>,
            a: <>Non, l’API concerne uniquement la maraude électronique, c’est-à-dire un taxi disponible à moins de 500m du client. Afin d’avoir une offre de taxi complète dans votre MaaS, vous pouvez par exemple compléter notre offre de maraude électronique avec un service de réservation de taxis (Karhoo, Tako, G7, etc.).</>,
          },
          {
            q: <>Est-ce que le paiement peut transiter par l’API le.taxi ?</>,
            a: <>Non, cette fonctionnalité n’est pas possible via l’API le.taxi. Le paiement s’effectue uniquement en voiture à la fin de la course. Cela s’explique par une volonté de privilégier la simplicité d’intégration de l’API. De plus, l’offre de taxi est moins adaptée au paiement à l’avance car un échange de consentements reste nécessaire à la fin de la course au moment de la fixation du prix définitif.</>,
          },
          {
            q: <>Combien de taxis sont disponibles dans Le.taxi ?</>,
            a: <>Contactez-nous pour connaître le nombre de taxis disponibles sur votre territoire. D’ici quelques semaines, l'ensemble des taxis auront l’obligation de se connecter à Le.taxi, un potentiel d’environ 60 000 taxis sur toute la France !</>,
          },
        ],
      },
      {
        title: 'Connexion',
        questions: [
          {
            q: <>Qui peut m’aider à réaliser l’intégration de l’API le.taxi ?</>,
            a: <>L’API le.taxi est relativement simple d’intégration. Vos prestataires habituels sur le MaaS ont les éléments nécessaires pour cette intégration (Cityway, Instant System, Apps panel, Mobility by Colas, etc.)</>,
          },
        ],
      },
      {
        title: 'Parcours',
        questions: [
          {
            q: <>Comment est-ce que le service le.taxi s’intègre avec les autres modes de transports dans le MaaS ?</>,
            a: <>Il est obligatoire que les chauffeurs de le.taxi soient affichés comme une offre distincte des autres offres de réservation de chauffeurs. Concrètement, lorsqu’un client utilise le service, il doit être explicite que la commande concerne un taxi et qu’il n’y a pas de frais d’approche.</>,
          },
          {
            q: <>Est-ce que le client doit pouvoir annuler sa course ?</>,
            a: <>Oui, l’intégration doit permettre au client d’annuler sa commande à tout moment, y compris pendant la recherche d’un chauffeur.</>,
          },
          {
            q: <>Que se passe-t-il si le client a quitté mon application après avoir commandé ?</>,
            a: <>Le client doit être informé du résultat de sa commande par le biais d’une notification dans le cas où celui-ci a quitté l’application.</>,
          },
        ],
      },
    ],
  },

  {
    title: 'Application de mobilité',
    categories: [
      {
        title: 'Offre',
        questions: [
          {
            q: <>Quel est l’intérêt de l’API le.taxi pour mon application ?</>,
            a: <>L’API le.taxi est un accès unique à tous les taxis de France gratuitement grâce à la mauraude électronique.</>,
          },
          {
            q: <>Est-ce que le paiement peut transiter par l’API le.taxi ?</>,
            a: <>Non, cette fonctionnalité n’est pas possible via l’API le.taxi. Le paiement s’effectue uniquement en voiture à la fin de la course. Cela s’explique par une volonté de privilégier la simplicité d’intégration de l’API. De plus, l’offre de taxi est moins adaptée au paiement à l’avance car un échange de consentements reste nécessaire à la fin de la course au moment de la fixation du prix définitif.</>,
          },
          {
            q: <>L’API le.taxi permet-elle de réserver un taxi ?</>,
            a: <>Non, l’API concerne uniquement la maraude électronique, c’est-à-dire la commande d’un taxi disponible immédiatement à moins de 500m du client. Afin d’avoir une offre de taxi complète dans votre application de mobilité, vous pouvez par exemple compléter notre offre de maraude électronique avec un service de réservation de taxis (Karhoo, Tako, G7, etc.).</>,
          },
        ],
      },
      {
        title: 'Parcours',
        questions: [
          {
            q: <>Comment est-ce que le service le.taxi s’intègre avec les autres modes de transports dans le MaaS ?</>,
            a: <>Il est obligatoire que les chauffeurs de le.taxi soient affichés comme une offre distincte des autres offres de réservation de chauffeurs. Concrètement, lorsqu’un client utilise le service, il doit être explicite que la commande concerne un taxi et qu’il n’y a pas de frais d’approche.</>,
          },
          {
            q: <>Est-ce que le client doit pouvoir annuler sa course ?</>,
            a: <>Oui, l’intégration doit permettre au client d’annuler sa commande à tout moment, y compris pendant la recherche d’un chauffeur.</>,
          },
          {
            q: <>Que se passe-t-il si le client a quitté mon application après avoir commandé ?</>,
            a: <>Le client doit être informé du résultat de sa commande par le biais d’une notification dans le cas où celui-ci a quitté l’application.</>,
          },
        ],
      },
      {
        title: 'Connexion',
        questions: [
          {
            q: <>Qui peut m’aider à réaliser l’intégration de l’API le.taxi ?</>,
            a: <>L’équipe technique de le.taxi est disponible par mail à equipe@le.taxi ou via le Slack dédié au partenaires pour vous aider dans l’intégration de l’API et les tests de celle-ci</>,
          },
          {
            q: <>Y’a-t-’il une documentation technique pour l’API ?</>,
            a: <>Oui. Vous trouverez la documentation complète sur <a href="https://console.api.taxi/documentation">https://console.api.taxi/documentation</a></>,
          },
          {
            q: <>Comment peut-on réaliser des tests d’intégration de l’API ?</>,
            a: <>Un simulateur de taxi est disponible dans l’environnement de développement mis à votre disposition pour tester l’API. L’équipe technique reste également disponible pour toute question à equipe@le.taxi</>,
          },
        ],
      },
    ],
  },
];

export default function FAQPage() {
  const menu = SECTIONS.map((section) => ({
    title: section.title,
    submenus: section.categories.map((question) => ({ title: question.title })),
  }));

  return (
    <TextContentLayout>
      <Menu title="Sommaire" items={menu} />
      <Content>
        <h1>Questions fréquentes</h1>
        {SECTIONS.map((section) => (
          <section key={section.title}>
            <h2 className="fr-pt-3w" id={section.title}>{section.title}</h2>
            {section.categories.map((category) => (
              <React.Fragment key={`${section.title}_${category.title}`}>
                <h3 id={`${section.title}_${category.title}`}>{category.title}</h3>
                <dl>
                  {category.questions.map((question, idx) => (
                    <React.Fragment key={`${section.title}_${category.title}_${String(idx)}`}>
                      <dt>{question.q}</dt>
                      <dd>{question.a}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </React.Fragment>
            ))}
          </section>
        ))}
      </Content>
    </TextContentLayout>
  );
}
