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
import LogoMob1taxi from '@/public/images/partners/mob1taxi.png';
import LogoMob1taxiPro from '@/public/images/partners/mob1taxi-pro.png';
import LogoOnlyMoov from '@/public/images/partners/only-moov.png';
import LogoSpotloc from '@/public/images/partners/spotloc.png';
import LogoTako from '@/public/images/partners/tako.png';
import LogoTakoPro from '@/public/images/partners/tako-pro.png';

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
            <a alt="download google play"><Image layout="responsive" src={DownloadPlayStore} /></a>
          </Link>)}
        {appStoreLink && (
          <Link href={appStoreLink} passHref>
            <a alt="download app store"><Image layout="responsive" src={DownloadAppStore} /></a>
          </Link>)}
        {websiteLink && (
          <Link href={websiteLink} passHref>
            <ButtonLink variant="secondary">Site web</ButtonLink>
          </Link>)}
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
  Logo: PropTypes.object,
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
            title="Taxi! by Spotloc"
            Logo={LogoSpotloc}
            playStoreLink="https://play.google.com/store/apps/details?id=com.spotloc.taxi&hl=fr"
            appStoreLink="https://apps.apple.com/fr/app/taxi-by-spotloc/id1469036335"
            websiteLink="https://www.spotloc.solutions/"
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
        </div>
      </Content>
    </TextContentLayout>
  );
}
