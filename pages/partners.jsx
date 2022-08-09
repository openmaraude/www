import PropTypes from 'prop-types';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import TextContentLayout, { Content, Menu } from '@/layouts/TextContentLayout';

import ButtonLink from '@/components/ButtonLink';

import DownloadAppStore from '@/public/images/icons/download-appstore.svg';
import DownloadPlayStore from '@/public/images/icons/download-playstore.svg';

import LogoAppsolu from '@/public/images/partners/appsolu.png';
import LogoAxygest from '@/public/images/partners/axygest.png';
import LogoGestav from '@/public/images/partners/logo_gestav.svg';
import LogoJoliTaxi from '@/public/images/partners/logo_jolitaxi.png';
import LogoMob1taxi from '@/public/images/partners/mob1taxi.png';
import LogoMob1taxiPro from '@/public/images/partners/mob1taxi-pro.png';
import LogoMyCloudTaxi from '@/public/images/partners/Logo_myCloudTaxi.png';
import LogoOnlyMoov from '@/public/images/partners/only-moov.png';
import LogoOpenTaxis from '@/public/images/partners/logo-opentaxis.png';
import LogoSimplyTaxi from '@/public/images/partners/simply-taxi.png';
import LogoTako from '@/public/images/partners/tako.png';
import LogoTakoPro from '@/public/images/partners/tako-pro.png';
import LogoTaxiMoove from '@/public/images/partners/taximoove.png';
import LogoTaxisNantes from '@/public/images/partners/taxis-nantes-appclient.png';
import LogoTessa from '@/public/images/partners/tessa.png';

import styles from '@/styles/Partners.module.css';

const SECTIONS = [
  { title: "Application chauffeur" },
  { title: "Application client" },
  { title: "Éditeur logiciel" },
];

function Card({
  title,
  Logo,
  Description,
  playStoreLink,
  appStoreLink,
  websiteLink,
}) {
  return (
    <div className={`fr-col-11 fr-col-sm-6 fr-col-md-3 fr-m-3w fr-p-2w ${styles.card}`}>
      <div className={styles.logo}>
        <Image src={Logo} />
      </div>

      <div className={styles.description}>
        <h4>{title}</h4>

        {Description}

      </div>

      <div className={styles.links}>
        {playStoreLink && (
          <Link href={playStoreLink} passHref>
            <a alt="download google play" href target="_blank" rel="noreferrer noopener"><Image layout="responsive" src={DownloadPlayStore} /></a>
          </Link>
        )}
        {appStoreLink && (
          <Link href={appStoreLink} passHref>
            <a alt="download app store" href target="_blank" rel="noreferrer noopener"><Image layout="responsive" src={DownloadAppStore} /></a>
          </Link>
        )}
        {websiteLink && (
          <Link href={websiteLink} passHref>
            <ButtonLink variant="secondary" href target="_blank">Site web</ButtonLink>
          </Link>
        )}
      </div>
    </div>
  );
}

Card.defaultProps = {
  Logo: null,
  Description: null,
  playStoreLink: null,
  appStoreLink: null,
  websiteLink: null,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  Logo: PropTypes.shape({ src: PropTypes.string.isRequired }),
  Description: PropTypes.node,
  playStoreLink: PropTypes.string,
  appStoreLink: PropTypes.string,
  websiteLink: PropTypes.string,
};

export default function PartnersPage() {
  return (
    <TextContentLayout>
      <Menu title="Sommaire" items={SECTIONS} />

      <Content>
        <h1>Choissisez une de nos applications partenaires</h1>

        <h5 id={SECTIONS[0].title} className="fr-mt-3w">{SECTIONS[0].title}</h5>
        <h6>
          Taxis, téléchargez une application partenaire pour recevoir les
          courses en maraude électronique
        </h6>

        <div className="fr-grid-row fr-grid-row--gutters">
          <Card
            title="Mob1Taxi"
            Logo={LogoMob1taxiPro}
            playStoreLink="https://play.google.com/store/apps/details?id=com.driver.mob1taxi"
            appStoreLink="https://apps.apple.com/fr/app/mob1taxi-chauffeurs/id1458521482"
            websiteLink="https://www.mob1taxi.com/passager"
          />

          <Card
            title="Tako"
            Logo={LogoTakoPro}
            playStoreLink="https://play.google.com/store/apps/details?id=com.triperz.tako_driver&hl=fr"
            appStoreLink="https://apps.apple.com/fr/app/tako-pro/id1473625302"
            websiteLink="https://www.tak-o.com/CHAUFFEUR.html"
          />

          <Card
            title="Simply Taxi"
            Logo={LogoSimplyTaxi}
            playStoreLink="https://play.google.com/store/apps/details?id=fr.simplytaxi.app&hl=fr"
            appStoreLink="https://apps.apple.com/fr/app/simplytaxi-r%C3%A9volution/id1534870637"
            websiteLink="https://www.simply-taxi.com/"
          />

          <Card
            title="Appsolu"
            Logo={LogoAppsolu}
            Description={<p>Équipementier</p>}
            websiteLink="https://www.appsolu.fr/"
          />

          <Card
            title="Axygest"
            Logo={LogoAxygest}
            Description={<p>Équipementier</p>}
            websiteLink="http://www.axygest.fr/"
          />

          <Card
            title="Tessa"
            Logo={LogoTessa}
            Description={<p>Équipementier</p>}
            websiteLink="https://www.tessa.fr/"
          />

          <Card
            title="myCloudTaxi"
            Logo={LogoMyCloudTaxi}
            Description={<p>Équipementier</p>}
            websiteLink="https://www.ata-electronics.com/fr/nos-solutions/mycloudtaxi/"
            playStoreLink="https://play.google.com/store/apps/details?id=com.kaiman.ata.app.prod"
            appStoreLink="https://apps.apple.com/us/app/mycloudtaxi-pour-chauffeur/id1621260312"
          />

          <Card
            title="OpenTaxis"
            Logo={LogoOpenTaxis}
            websiteLink="http://www.opentaxis.fr/"
            playStoreLink="https://play.google.com/store/apps/details?id=com.taxisnantes.appchauffeur"
          />

          <Card
            title="Gestav"
            Logo={LogoGestav}
            websiteLink="https://gestav.com/"
            playStoreLink="https://play.google.com/store/apps/details?id=com.gestav.txs&hl=fr&gl=US"
          />

          <Card
            title="Jolitaxi"
            Logo={LogoJoliTaxi}
            websiteLink="https://jolitaxi.fr/"
          />

          <Card
            title="Taximoove"
            Logo={LogoTaxiMoove}
            websiteLink="https://reseau.alliancetaxis78.fr"
            appStoreLink="https://apps.apple.com/fr/app/taximoove/id1587851273"
            playStoreLink="https://play.google.com/store/apps/details?id=com.aom.taximoove&hl=fr"
          />
        </div>

        <h5 id={SECTIONS[1].title} className="fr-mt-3w">{SECTIONS[1].title}</h5>
        <h6>
          Vos clients pourront vous trouver dans toutes ces applications
          partenaires
        </h6>

        <div className="fr-grid-row fr-grid-row--gutters">
          <Card
            title="Onlymoov"
            Logo={LogoOnlyMoov}
            Description={<p>Grand Lyon</p>}
            playStoreLink="https://play.google.com/store/apps/details?id=com.grandlyon.onlymoov"
            websiteLink="https://taxi.onlymoov.com/"
          />

          <Card
            title="Tako"
            Logo={LogoTako}
            Description={<p>France</p>}
            playStoreLink="https://play.google.com/store/apps/details?id=com.triperz.tako_traveller"
            appStoreLink="https://itunes.apple.com/fr/app/id1473625254?mt=8"
            websiteLink="http://www.tak-o.com/"
          />

          <Card
            title="Mob1taxi"
            Logo={LogoMob1taxi}
            Description={<p>France</p>}
            playStoreLink="https://play.google.com/store/apps/details?id=com.mob1taxi&feature=more_from_developerr"
            appStoreLink="https://apps.apple.com/fr/app/mob1taxi/id576991159?mt=8"
            websiteLink="https://www.mob1taxi.com/"
          />

          <Card
            title="Simply Taxi"
            Logo={LogoSimplyTaxi}
            playStoreLink="https://play.google.com/store/apps/details?id=fr.simplytaxi.app&hl=fr"
            appStoreLink="https://apps.apple.com/fr/app/simplytaxi-r%C3%A9volution/id1534870637"
            websiteLink="https://www.simply-taxi.com/"
          />

          <Card
            title="Taxis-Nantes"
            Logo={LogoTaxisNantes}
            websiteLink="https://www.taxis-nantes.com/#download"
            playStoreLink="https://play.google.com/store/apps/details?id=com.lanoosphere.tessa.taxi_nantes&hl=fr"
            appStoreLink="https://apps.apple.com/fr/app/taxi-nantes/id924386923"
          />
        </div>

        <h5 id={SECTIONS[2].title} className="fr-mt-3w">{SECTIONS[2].title}</h5>
        <h6>
          Les partenaires ci-dessous peuvent intégrer l’API à votre application
          et faire bénéficier votre flotte du service
        </h6>

        <div className="fr-grid-row fr-grid-row--gutters">
          <Card
            title="Appsolu"
            Logo={LogoAppsolu}
            Description={<p>Équipementier</p>}
            websiteLink="https://www.appsolu.fr/"
          />

          <Card
            title="Axygest"
            Logo={LogoAxygest}
            Description={<p>Équipementier</p>}
            websiteLink="http://www.axygest.fr/"
          />

          <Card
            title="Tessa"
            Logo={LogoTessa}
            Description={<p>Équipementier</p>}
            websiteLink="https://www.tessa.fr/"
          />

          <Card
            title="MyCloudTaxi"
            Logo={LogoMyCloudTaxi}
            Description={<p>Équipementier</p>}
            websiteLink="https://www.ata-electronics.com/fr/nos-solutions/mycloudtaxi/"
            appStoreLink="https://apps.apple.com/us/app/mycloudtaxi-pour-chauffeur/id1621260312"
          />

          <Card
            title="Gestav"
            Logo={LogoGestav}
            websiteLink="https://gestav.com/"
            playStoreLink="https://play.google.com/store/apps/details?id=com.gestav.txs&hl=fr&gl=US"
          />

          <Card
            title="Taximoove"
            Logo={LogoTaxiMoove}
            websiteLink="https://reseau.alliancetaxis78.fr"
            appStoreLink="https://apps.apple.com/fr/app/taximoove/id1587851273"
            playStoreLink="https://play.google.com/store/apps/details?id=com.aom.taximoove&hl=fr"
          />
        </div>
      </Content>
    </TextContentLayout>
  );
}
