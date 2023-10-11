import React from 'react';

import TextContentLayout, { Content } from '@/layouts/TextContentLayout';

import ButtonLink from '@/components/ButtonLink';
import DonwloadLinks from '@/components/DownloadLinks';
import ListPartners from '@/components/ListPartners';

export default function Page() {
  const [selectedPartner, setSelectedPartner] = React.useState(null);

  return (
    <TextContentLayout title="Artisan taxi">
      <Content>
        <div className="fr-container">
          <h1>Liste des applications agréées</h1>

          <p>
            Vous êtes invité à télécharger l'une des applications chauffeur ci-dessous
            afin de vous inscrire au registre le.taxi.
          </p>

          {(!selectedPartner) && (
            <ListPartners profile="artisan" callback={setSelectedPartner} />
          )}

          {(selectedPartner) && (
            <DonwloadLinks partner={selectedPartner} reset={() => setSelectedPartner(null)} />
          )}

          <p className="fr-mt-3w">
            <ButtonLink href="/partners/driver/profile" variant="secondary">Retour au choix du profil</ButtonLink>
          </p>
        </div>
      </Content>
    </TextContentLayout>
  );
}
