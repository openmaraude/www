import React from 'react';

import Link from 'next/link';

import Tile from '@/components/Tile';

import TextContentLayout, { Content } from '@/layouts/TextContentLayout';

export default function PartnersPage() {
  return (
    <TextContentLayout>
      <Content>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12">
            <Tile
              title="Je recherche un taxi"
              description={<p>Faites appel à un taxi tout de suite</p>}
              href="/partners/client"
            />
          </div>
          <div className="fr-col-12 fr-mt-3w">
            <Tile
              title="Je suis un chauffeur de taxi"
              description={<p>Inscrivez-vous au registre le.taxi</p>}
              href="/partners/driver"
            />
          </div>
        </div>
        <p className="fr-mt-6w">
          <Link href="/aom">Je travaille pour une application de mobilité</Link>
        </p>
      </Content>
    </TextContentLayout>
  );
}
