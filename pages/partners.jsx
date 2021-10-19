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
import LogoOnlyMoov from '@/public/images/partners/only-moov.png';
import LogoParisTaxis from '@/public/images/partners/paris-taxis.png';
import LogoSpotloc from '@/public/images/partners/spotloc.png';
import LogoTako from '@/public/images/partners/tako.png';

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
  Links,
}) {
  return (
    <div className={`fr-col-11 fr-col-sm-6 fr-col-md-3 fr-m-3w fr-p-2w ${styles.card}`}>
      <div className={styles.logo}>
        {Logo}
      </div>

      <div className={styles.description}>
        <h4>{title}</h4>

        {Description}

      </div>

      {Links.length > 0 && (
        <div className={styles.links}>
          {Links.map((Lnk, idx) => <React.Fragment key={String(idx)}>{Lnk}</React.Fragment>)}
        </div>
      )}
    </div>
  );
}

Card.defaultProps = {
  Logo: null,
  Description: null,
  Links: [],
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  Logo: PropTypes.node,
  Description: PropTypes.node,
  Links: PropTypes.arrayOf(PropTypes.node),
};

export default function PartnersPage() {
  return (
    <TextContentLayout>
      <Menu title="Sommaire" items={SECTIONS} />

      <Content>
        <h1>Choissisez une de nos application partenaire</h1>

        <h5 id={SECTIONS[0].title} className="fr-mt-3w">{SECTIONS[0].title}</h5>
        <h6>
          Taxis, téléchargez une application partenaire pour recevoir les
          courses en maraude électronique
        </h6>

        <div className="fr-grid-row fr-grid-row--gutters">
          <Card
            title="Mob1Taxi"
            Logo={<Image src={LogoMob1taxi} />}
            Description={(
              <p>
                Téléchargement gratuit. Système de crédit payant, fixé à 0.75 € HT par course.
              </p>
            )}
            Links={[
              <Link href="https://play.google.com/store/apps/details?id=com.driver.mob1taxi" passHref>
                <a alt="download google play" href="https://play.google.com/store/apps/details?id=com.driver.mob1taxi"><Image layout="responsive" src={DownloadPlayStore} /></a>
              </Link>,

              <Link href="https://apps.apple.com/fr/app/mob1taxi-chauffeurs/id1458521482" passHref>
                <a alt="download app store" href="https://apps.apple.com/fr/app/mob1taxi-chauffeurs/id1458521482"><Image layout="responsive" src={DownloadAppStore} /></a>
              </Link>,

              <Link href="https://www.mob1taxi.com/passager" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
          />

          <Card
            title="Tako"
            Logo={<Image src={LogoTako} />}
            Description={(
              <p>
                Téléchargement gratuit. Sans commission pour les courses payées directement en CB ou
                espèces. 0.90€ sur les courses payées via mobile.
              </p>
            )}
            Links={[
              <Link href="https://play.google.com/store/apps/details?id=com.triperz.tako_driver&hl=fr" passHref>
                <a alt="download google play" href="https://play.google.com/store/apps/details?id=com.triperz.tako_driver&hl=fr"><Image layout="responsive" src={DownloadPlayStore} /></a>
              </Link>,

              <Link href="https://apps.apple.com/fr/app/tako-pro/id1473625302" passHref>
                <a alt="download app store" href="https://apps.apple.com/fr/app/tako-pro/id1473625302"><Image layout="responsive" src={DownloadAppStore} /></a>
              </Link>,

              <Link href="https://www.tak-o.com/CHAUFFEUR.html" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
          />

          <Card
            title="Taxi! by Spotloc"
            Logo={<Image src={LogoSpotloc} />}
            Description={(
              <p>
                Téléchargement gratuit. Sans commission, sans abonnement, règlement des courses en
                maraude le.taxi à bord.
              </p>
            )}
            Links={[
              <Link href="https://play.google.com/store/apps/details?id=com.spotloc.taxi&hl=fr" passHref>
                <a alt="download google play" href="https://play.google.com/store/apps/details?id=com.spotloc.taxi&hl=fr"><Image layout="responsive" src={DownloadPlayStore} /></a>
              </Link>,

              <Link href="https://apps.apple.com/fr/app/taxi-by-spotloc/id1469036335" passHref>
                <a alt="download app store" href="https://apps.apple.com/fr/app/taxi-by-spotloc/id1469036335"><Image layout="responsive" src={DownloadAppStore} /></a>
              </Link>,

              <Link href="https://www.spotloc.solutions/" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
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
            Logo={<Image src={LogoOnlyMoov} />}
            Description={<p>Grand Lyon</p>}
            Links={[
              <Link href="https://play.google.com/store/apps/details?id=com.grandlyon.onlymoov" passHref>
                <a alt="download google play" href="https://play.google.com/store/apps/details?id=com.grandlyon.onlymoov"><Image layout="responsive" src={DownloadPlayStore} /></a>
              </Link>,

              <Link href="https://taxi.onlymoov.com/" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
          />

          <Card
            title="Paris Taxis"
            Logo={<Image src={LogoParisTaxis} />}
            Description={<p>Zone parisienne</p>}
            Links={[
              <Link href="https://play.google.com/store/apps/details?id=com.appspanel.taxiparis" passHref>
                <a alt="download google play" href="https://play.google.com/store/apps/details?id=com.appspanel.taxiparis"><Image layout="responsive" src={DownloadPlayStore} /></a>
              </Link>,

              <Link href="https://itunes.apple.com/fr/app/id756914088?mt=8" passHref>
                <a alt="download app store" href="https://itunes.apple.com/fr/app/id756914088?mt=8"><Image layout="responsive" src={DownloadAppStore} /></a>
              </Link>,
            ]}
          />

          <Card
            title="Tako"
            Logo={<Image src={LogoTako} />}
            Description={<p>France</p>}
            Links={[
              <Link href="https://play.google.com/store/apps/details?id=com.triperz.tako_traveller" passHref>
                <a alt="download google play" href="https://play.google.com/store/apps/details?id=com.triperz.tako_traveller"><Image layout="responsive" src={DownloadPlayStore} /></a>
              </Link>,

              <Link href="https://itunes.apple.com/fr/app/id1473625254?mt=8" passHref>
                <a alt="download app store" href="https://itunes.apple.com/fr/app/id1473625254?mt=8"><Image layout="responsive" src={DownloadAppStore} /></a>
              </Link>,

              <Link href="http://www.tak-o.com/" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
          />

          <Card
            title="Mob1taxi"
            Logo={<Image src={LogoMob1taxi} />}
            Description={<p>France</p>}
            Links={[
              <Link href="https://play.google.com/store/apps/details?id=com.mob1taxi&feature=more_from_developerr" passHref>
                <a alt="download google play" href="https://play.google.com/store/apps/details?id=com.mob1taxi&feature=more_from_developerr"><Image layout="responsive" src={DownloadPlayStore} /></a>
              </Link>,

              <Link href="https://apps.apple.com/fr/app/mob1taxi/id576991159?mt=8" passHref>
                <a alt="download app store" href="https://apps.apple.com/fr/app/mob1taxi/id576991159?mt=8"><Image layout="responsive" src={DownloadAppStore} /></a>
              </Link>,

              <Link href="https://www.mob1taxi.com/" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
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
            Logo={<Image src={LogoAppsolu} />}
            Description={<p>Équipementier</p>}
            Links={[
              <Link href="https://www.appsolu.fr/" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
          />

          <Card
            title="Axygest"
            Logo={<Image src={LogoAxygest} />}
            Description={<p>Équipementier</p>}
            Links={[
              <Link href="http://www.axygest.fr/" passHref>
                <ButtonLink variant="secondary">Site web</ButtonLink>
              </Link>,
            ]}
          />
        </div>
      </Content>
    </TextContentLayout>
  );
}
