import React from 'react';

import TextContentLayout, { Content } from '@/layouts/TextContentLayout';

import DonwloadLinks from '@/components/DownloadLinks';
import Tile from '@/components/Tile';

import LogoAppsolu from '@/public/images/partners/appsolu.png';
import LogoAxygest from '@/public/images/partners/axygest.png';
import LogoCourseDeRue from '@/public/images/partners/coursederue.png';
import LogoG7 from '@/public/images/partners/G7.png';
import LogoGestav from '@/public/images/partners/logo_gestav.svg';
import LogoGeoway from '@/public/images/partners/geoway.svg';
import LogoJoliTaxi from '@/public/images/partners/logo_jolitaxi.png';
import LogoMob1taxiPro from '@/public/images/partners/mob1taxi-pro.png';
import LogoMyCloudTaxi from '@/public/images/partners/Logo_myCloudTaxi.png';
import LogoOpenTaxis from '@/public/images/partners/logo-opentaxis.png';
import LogoSimplyTaxi from '@/public/images/partners/simply-taxi.png';
import LogoTakoPro from '@/public/images/partners/tako-pro.png';
import LogoTaxiMoove from '@/public/images/partners/taximoove.png';
import LogoTaxisNantes from '@/public/images/partners/taxis-nantes-appclient.png';
import LogoTessa from '@/public/images/partners/tessa.png';

const PARTNERS = {
  mycloudtaxi: {
    title: "myCloudTaxi",
    logo: LogoMyCloudTaxi,
    description: <p>Application créée par l'équipementier ATA</p>,
    websiteLink: "https://www.ata-electronics.com/fr/nos-solutions/mycloudtaxi/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.kaiman.ata.app.prod",
    appStoreLink: "https://apps.apple.com/us/app/mycloudtaxi-pour-chauffeur/id1621260312",
  },
  coursederue: {
    title: "Course de rue",
    logo: LogoCourseDeRue,
    description: <p>Application créée par la GESCOP/Alpha Taxis</p>,
    websiteLink: "https://www.coursederue.fr/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.gescop.course_de_rue",
  },
  g7: {
    title: "G7",
    logo: LogoG7,
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "https://chauffeur.g7.fr/",
  },
  appsolu: {
    title: "Appsolu",
    logo: LogoAppsolu,
    websiteLink: "https://www.appsolu.fr/",
  },
  simplytaxi: {
    title: "Simply Taxi",
    logo: LogoSimplyTaxi,
    playStoreLink: "https://play.google.com/store/apps/details?id=fr.simplytaxi.app&hl=fr",
    appStoreLink: "https://apps.apple.com/fr/app/simplytaxi-r%C3%A9volution/id1534870637",
    websiteLink: "https://www.simply-taxi.com/",
  },
  geoway: {
    title: "Geoway",
    logo: LogoGeoway,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.azconception.geoway",
    appStoreLink: "https://apps.apple.com/us/app/geoway-driver/id1591935980",
    websiteLink: "https://www.geoway.fr/",
  },
  mob1taxi: {
    title: "Mob1Taxi",
    logo: LogoMob1taxiPro,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.driver.mob1taxi",
    appStoreLink: "https://apps.apple.com/fr/app/mob1taxi-chauffeurs/id1458521482",
    websiteLink: "https://www.mob1taxi.com/passager",
  },
  takopro: {
    title: "Tako Pro",
    logo: LogoTakoPro,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.triperz.tako_driver&hl=fr",
    appStoreLink: "https://apps.apple.com/fr/app/tako-pro/id1473625302",
    websiteLink: "https://www.tak-o.com/CHAUFFEUR.html",
  },
  gestav: {
    title: "Gestav",
    logo: LogoGestav,
    websiteLink: "https://gestav.com/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.gestav.txs&hl=fr&gl=US",
  },
  axygest: {
    title: "Axygest",
    logo: LogoAxygest,
    websiteLink: "http://www.axygest.fr/",
  },
  taximoove: {
    title: "Taximoove",
    logo: LogoTaxiMoove,
    websiteLink: "https://reseau.alliancetaxis78.fr",
    appStoreLink: "https://apps.apple.com/fr/app/taximoove/id1587851273",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.aom.taximoove&hl=fr",
  },
  jolitaxi: {
    title: "Jolitaxi",
    logo: LogoJoliTaxi,
    websiteLink: "https://jolitaxi.fr/",
  },
  tessa: {
    title: "Tessa",
    logo: LogoTessa,
    websiteLink: "https://www.tessa.fr/",
  },
  opentaxis: {
    title: "OpenTaxis",
    logo: LogoOpenTaxis,
    websiteLink: "http://www.opentaxis.fr/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.taxisnantes.appchauffeur",
  },
  taxisnantes: {
    title: "Taxis-Nantes",
    logo: LogoTaxisNantes,
    websiteLink: "https://www.taxis-nantes.com/#download",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.lanoosphere.tessa.taxi_nantes&hl=fr",
    appStoreLink: "https://apps.apple.com/fr/app/taxi-nantes/id924386923",
  },
};

const PROFILES = {
  artisan: ['mycloudtaxi', 'coursederue', 'appsolu', 'simplytaxi', 'geoway', 'mob1taxi', 'takopro', 'gestav', 'taximoove', 'jolitaxi', 'opentaxis'],
  affilie: ['g7', 'appsolu', 'axygest', 'taximoove', 'geoway', 'gestav', 'tessa', 'taxisnantes'],
  salarie: ['g7', 'appsolu'],
  lgerant: ['mycloudtaxi', 'coursederue', 'appsolu', 'simplytaxi', 'geoway', 'mob1taxi', 'takopro', 'gestav', 'taximoove', 'jolitaxi', 'opentaxis'],
};

function chooseProfile(setChoice) {
  return (
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
            onClick={() => setChoice('artisan')}
          />
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <Tile
            title="Je suis affilié à un central radio"
            description="Groupement, coopérative..."
            onClick={() => setChoice('affilie')}
          />
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <Tile
            title="Je suis salarié"
            description="Entreprise, association..."
            onClick={() => setChoice('salarie')}
          />
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <Tile
            title="Je suis locataire-gérant"
            description="Travail en partielle indépendance"
            onClick={() => setChoice('lgerant')}
          />
        </div>
      </div>
    </div>
  );
}

function ListPartners(choice, setChoice, setSelectedPartner) {
  return (
    <div className="fr-container">
      <h1>Liste des applications agréées</h1>

      {choice === 'artisan' && (
        <>
          <p>
            Vous êtes invité à télécharger l'une des applications chauffeur ci-dessous
            afin de vous inscrire au registre le.taxi.
          </p>
        </>
      )}

      {choice === 'affilie' && (
        <>
          <p>
            Voici la liste des applications développées pour des groupements, coopératives
            ou encore syndicats.
          </p>
          <p>
            Si vous disposez déjà d'une de ces applications, vérifiez que vous êtes bien inscrit
            au registre le.taxi auprès de votre structure.
          </p>
        </>
      )}

      {choice === 'salarie' && (
        <>
          <p>
            Voici la liste des applications agréées le.taxi, vérifiez auprès de votre employeur
            que vous êtes bien inscrit au registre le.taxi.
          </p>
          <p>
            Si vous disposez déjà d'une de ces applications, vérifiez que vous êtes bien inscrit
            au registre le.taxi auprès de votre structure.
          </p>
        </>
      )}

      {choice === 'lgerant' && (
        <>
          <p>
            Voici la liste des applications développées pouvant être utilisées par des
            locataires-gérants.
          </p>
          <p>
            Si vous disposez déjà d'une de ces applications, vérifiez que vous êtes bien inscrit
            au registre le.taxi auprès de votre structure.
          </p>
        </>
      )}

      <div className="fr-grid-row fr-grid-row--gutters">
        {PROFILES[choice].map((pid) => (
          <div className="fr-col-12 fr-col-md-6" key={pid}>
            <Tile
              title={PARTNERS[pid].title}
              description={PARTNERS[pid].description}
              img={PARTNERS[pid].logo}
              onClick={() => setSelectedPartner(PARTNERS[pid])}
            />
          </div>
        ))}
      </div>

      <p>
        <button type="button" onClick={() => setChoice(null)} className="fr-btn fr-btn--secondary fr-mt-3w">Retour au choix du profil</button>
      </p>
    </div>
  );
}

export default function PartnersPage() {
  const [choice, setChoice] = React.useState(null);
  const [selectedPartner, setSelectedPartner] = React.useState(null);

  return (
    <TextContentLayout>
      <Content>
        {!choice && chooseProfile(setChoice)}

        {(choice && !selectedPartner) && ListPartners(choice, setChoice, setSelectedPartner)}

        {(choice && selectedPartner) && DonwloadLinks(selectedPartner, setSelectedPartner)}
      </Content>
    </TextContentLayout>
  );
}
