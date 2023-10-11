import React from 'react';

import TextContentLayout, { Content } from '@/layouts/TextContentLayout';

import ButtonLink from '@/components/ButtonLink';
import Tile from '@/components/Tile';

export default function PartnersPage() {
  return (
    <TextContentLayout title="Mon profil">
      <Content>
        <div className="fr-container">
          <h1>Je sélectionne mon profil</h1>

          <p>
            Afin d’être redirigé vers une application chauffeur compatible avec votre profil,
            vous devez indiquer celui qui vous correspond.
          </p>

          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-md-6">
              <Tile
                title="Je suis artisan taxi"
                description="Travail en totale indépendance"
                href="/partners/driver/profile/artisan"
              />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <Tile
                title="Je suis affilié à un central radio"
                description="Groupement, coopérative..."
                href="/partners/driver/profile/affilie"
              />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <Tile
                title="Je suis salarié"
                description="Entreprise, association..."
                href="/partners/driver/profile/salarie"
              />
            </div>
            <div className="fr-col-12 fr-col-md-6">
              <Tile
                title="Je suis locataire-gérant"
                description="Travail en partielle indépendance"
                href="/partners/driver/profile/lgerant"
              />
            </div>
          </div>

          <p className="fr-mt-3w">
            <ButtonLink href="/taxi" variant="secondary">Retour aux explications le.taxi</ButtonLink>
          </p>
        </div>
      </Content>
    </TextContentLayout>
  );
}
