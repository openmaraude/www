import React from 'react';

import BaseLayout from '@/layouts/BaseLayout';

import ButtonLink from '@/components/ButtonLink';
import DonwloadLinks from '@/components/DownloadLinks';
import ListPartners from '@/components/ListPartners';

export default function Page() {
  const [selectedPartner, setSelectedPartner] = React.useState(null);

  return (
    <BaseLayout title="Salarié">
      <div className="fr-container">
        <h1>Liste des applications agréées</h1>

        <p>
          Voici la liste des applications agréées le.taxi, vérifiez auprès de votre employeur
          que vous êtes bien inscrit au registre le.taxi.
        </p>
        <p>
          Si vous disposez déjà d'une de ces applications, vérifiez que vous êtes bien inscrit
          au registre le.taxi auprès de votre structure.
        </p>

        {(!selectedPartner) && (
          <ListPartners profile="salarie" callback={setSelectedPartner} />
        )}

        {(selectedPartner) && (
          <DonwloadLinks partner={selectedPartner} reset={() => setSelectedPartner(null)} />
        )}

        <p className="fr-mt-3w">
          <ButtonLink href="/partners/driver/profile" variant="secondary">Retour au choix du profil</ButtonLink>
        </p>
      </div>
    </BaseLayout>
  );
}
