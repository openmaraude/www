import React from 'react';

import useSWR from 'swr';

import TextContentLayout, { Content } from '@/layouts/TextContentLayout';

import DonwloadLinks from '@/components/DownloadLinks';
import Tile from '@/components/Tile';

import LogoMob1taxi from '@/public/images/partners/mob1taxi.png';
import LogoOnlyMoov from '@/public/images/partners/only-moov.png';
import LogoTaxisNantes from '@/public/images/partners/taxis-nantes-appclient.png';

const API_URL = 'https://api-adresse.data.gouv.fr';

// No locations key means '*'
const PARTNERS = [{
  title: "Onlymoov",
  logo: LogoOnlyMoov,
  description: <p>La solution officielle du Grand Lyon</p>,
  websiteLink: "https://taxi.onlymoov.com/",
  locations: [
    // Lyon et arrondissements
    '69123', '69381', '69382', '69383', '69384', '69385', '69386', '69387', '69388', '69389',
    // Métropole
    '69003', '69029', '69033', '69034', '69040', '69044', '69046', '69271', '69063', '69273',
    '69068', '69069', '69071', '69072', '69275', '69081', '69276', '69085', '69087', '69088',
    '69089', '69278', '69091', '69096', '69100', '69279', '69116', '69117', '69127', '69282',
    '69283', '69284', '69142', '69143', '69149', '69152', '69153', '69163', '69286', '69168',
    '69191', '69194', '69202', '69199', '69204', '69205', '69207', '69290', '69233', '69292',
    '69293', '69296', '69244', '69250', '69256', '69259', '69260', '69266',
  ],
},
{
  title: "Mob1taxi",
  logo: LogoMob1taxi,
  description: <p>France</p>,
  playStoreLink: "https://play.google.com/store/apps/details?id=com.mob1taxi&feature=more_from_developer",
  appStoreLink: "https://apps.apple.com/fr/app/mob1taxi/id576991159?mt=8",
  // websiteLink: "https://www.mob1taxi.com/",
},
{
  title: "Taxis-Nantes",
  logo: LogoTaxisNantes,
  // websiteLink: "https://www.taxis-nantes.com/#download",
  playStoreLink: "https://play.google.com/store/apps/details?id=com.lanoosphere.tessa.taxi_nantes&hl=fr",
  appStoreLink: "https://apps.apple.com/fr/app/taxi-nantes/id924386923",
  locations: ['44109'],
}];

const deptCode = (citycode) => {
  const prefix = citycode.substr(0, 2);
  return prefix === '97' || prefix === '98' ? citycode.substr(0, 3) : prefix;
};

export default function PartnersPage() {
  const [location, setLocation] = React.useState(null);
  const [searchAddress, setSearchAddress] = React.useState('');
  const [selectedPartner, setSelectedPartner] = React.useState(null);

  // Use api-adresse.data.gouv.fr to search for address
  const { data } = useSWR(
    [searchAddress],
    async ([address]) => {
      if (!address || address.length < 3) {
        return null;
      }

      const url = new URL(`${API_URL}/search?type=municipality`);
      url.searchParams.append('q', address);

      const resp = await fetch(url);

      if (!resp.ok) {
        throw new Error(`api-adresse.data.gouv.fr a retourné une erreur ${resp.status}`);
      }

      const geoJSON = await resp.json();
      return geoJSON.features;
    },
    { refreshInterval: 0 },
  );

  return (
    <TextContentLayout title="Rechercher un taxi">
      <Content>
        <div className="fr-container">
          {!location && (
            <>
              <h1>J'indique la ville où je suis actuellement</h1>

              <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
                <div className="fr-col-12 fr-mt-3w">
                  <div className="fr-input-group">
                    <div className="fr-search-bar" id="header-search" role="search">
                      <input
                        className="fr-input"
                        placeholder="Lyon, Grenoble, Paris..."
                        type="search"
                        id="search-1-input"
                        name="search-1-input"
                        value={searchAddress}
                        onChange={(e) => setSearchAddress(e.target.value)}
                      />
                      <button type="button" className="fr-btn" title="Rechercher">
                        Rechercher
                      </button>
                    </div>
                  </div>
                  {data && (
                    <div className="fr-form-group">
                      <fieldset>
                        <legend className="fr-fieldset__legend fr-text--regular" id="radio-legend" />
                        <div className="fr-fieldset__content" role="listbox">
                          {data.map((r) => (
                            <div className="fr-radio-group" role="listitem" key={r.properties.id}>
                              <input
                                type="radio"
                                id={`radio-rich-${r.properties.id}`}
                                name="radio-rich"
                                value={JSON.stringify(r.properties)}
                                autoComplete="address-level2"
                                onChange={(e) => setLocation(JSON.parse(e.target.value))}
                              />
                              <label className="fr-label" htmlFor={`radio-rich-${r.properties.id}`}>
                                {r.properties.label} ({deptCode(r.properties.citycode)})
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  )}
                </div>
                <div className="fr-col-12 fr-mt-6w">
                  <p>
                    <button
                      type="button"
                      onClick={() => setLocation({ citycode: '*' })}
                      className="fr-btn fr-btn--secondary"
                    >
                      Je ne suis pas sûr(e) de ma localisation
                    </button>
                  </p>
                </div>
              </div>
            </>
          )}
          {location && !selectedPartner && (
            <>
              <h1>Bonne nouvelle&nbsp;!</h1>
              {location.citycode === '*' && (
                <p>
                  Même sans connaître votre localisation,
                  vous pouvez commander un taxi grâce à&nbsp;:
                </p>
              )}
              {location.citycode !== '*' && (
                <p>
                  Sur <strong>{location.label}</strong>,
                  vous pouvez commander un taxi grâce à&nbsp;:
                </p>
              )}
              <div className="fr-grid-row fr-grid-row--gutters">
                {PARTNERS.filter((partner) => (
                  partner.locations?.indexOf(location.citycode) !== -1
                )).map((partner) => (
                  <div className="fr-col-12 fr-col-md-6" key={partner.title}>
                    <Tile
                      title={partner.title}
                      description={partner.description}
                      img={partner.logo}
                      href={partner.websiteLink}
                      onClick={() => (!partner.websiteLink ? setSelectedPartner(partner) : null)}
                    />
                  </div>
                ))}
              </div>

              <p className="fr-mt-3w">
                <button type="button" onClick={() => setLocation(null)} className="fr-btn fr-btn--secondary">Retour au choix de la ville</button>
              </p>
            </>
          )}
        </div>

        {selectedPartner && (
          <DonwloadLinks partner={selectedPartner} reset={() => setSelectedPartner(null)} />
        )}
      </Content>
    </TextContentLayout>
  );
}
