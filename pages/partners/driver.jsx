import React from 'react';

import TextContentLayout, { Content } from '@/layouts/TextContentLayout';

import ButtonLink from '@/components/ButtonLink';

export default function PartnersPage() {
  return (
    <TextContentLayout>
      <Content>
        <div className="fr-container">
          <h1>Qu'est-ce que le.taxi&nbsp;?</h1>
          <p>
            le.taxi est aujourd'hui une base de données qui indique en temps réel le nombre
            de taxis disponibles et leur géolocalisation (position). Il ne s'agit donc pas
            d'une application. Ce sont plutôt des applications chauffeur créées par différents
            acteurs du monde du taxi qui se connectent à cette base de données pour pouvoir
            ensuite distribuer les courses aux chauffeurs.
          </p>
          <p>
            Quant aux clients, ils utilisent des applications client pour formuler une
            demande de course immédiate.
          </p>
          <h1>Je télécharge une application chauffeur agréée</h1>
          <p>
            L'inscription au registre le.taxi s'effectue à travers une des applications
            chauffeur agréées le.taxi.

            Une fois l'application téléchargée, vous aurez besoin de vous munir de votre&nbsp;:
          </p>
          <ul>
            <li>pièce d'identité</li>
            <li>carte professionnelle</li>
            <li>numéro d'ADS</li>
            <li>numéro de plaque d'immatriculation</li>
          </ul>
          <p>
            Ces informations seront demandées lors de la création de compte pour vous
            inscrire au registre le.taxi.
          </p>
          <ButtonLink href="/partners/driver/profile">Je m'inscris</ButtonLink>
        </div>
      </Content>
    </TextContentLayout>
  );
}
