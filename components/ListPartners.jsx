import PropTypes from 'prop-types';

import Tile from '@/components/Tile';

import LogoAppsolu from '@/public/images/partners/appsolu.png';
import LogoAxygest from '@/public/images/partners/axygest.png';
import LogoCourseDeRue from '@/public/images/partners/coursederue.png';
import LogoG7 from '@/public/images/partners/G7.png';
import LogoGestav from '@/public/images/partners/logo_gestav.svg';
import LogoGeoway from '@/public/images/partners/geoway.png';
import LogoJoliTaxi from '@/public/images/partners/logo_jolitaxi.png';
import LogoMob1taxiPro from '@/public/images/partners/mob1taxi-pro.png';
import LogoMyCloudTaxi from '@/public/images/partners/Logo_myCloudTaxi.png';
import LogoOpenTaxis from '@/public/images/partners/logo-opentaxis.png';
import LogoSimplyTaxi from '@/public/images/partners/simply-taxi.png';
import LogoTaxiMoove from '@/public/images/partners/taximoove.png';
import LogoTaxisNantes from '@/public/images/partners/taxis-nantes-appclient.png';
import LogoTessa from '@/public/images/partners/tessa.png';

const PARTNERS = {
  mycloudtaxi: {
    title: "myCloudTaxi",
    logo: LogoMyCloudTaxi,
    description: <>Application créée par l'équipementier ATA</>,
    websiteLink: "https://www.ata-electronics.com/fr/nos-solutions/mycloudtaxi/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.kaiman.ata.app.prod",
    appStoreLink: "https://apps.apple.com/us/app/mycloudtaxi-pour-chauffeur/id1621260312",
  },
  coursederue: {
    title: "Course de rue",
    logo: LogoCourseDeRue,
    description: <>Application créée par la GESCOP/Alpha Taxis</>,
    websiteLink: "https://www.coursederue.fr/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.gescop.course_de_rue",
  },
  g7: {
    title: "G7",
    logo: LogoG7,
    description: <>Bientôt disponible sur les stores</>,
    appStoreLink: "",
    playStoreLink: "",
    websiteLink: "https://chauffeur.g7.fr/",
  },
  appsolu: {
    title: "Appsolu",
    logo: LogoAppsolu,
    appStoreLink: "https://apps.apple.com/fr/app/appsolu-taxi/id962398406",
    playStoreLink: "https://play.google.com/store/apps/details?id=appsolu.taxi.driver",
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
    playStoreLink: "https://play.google.com/store/apps/details?id=com.jolitaxi.jolitaxichauffeur",
    appStoreLink: "https://apps.apple.com/fr/app/jolitaxi-chauffeur/id1634474154",
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
  artisan: ['mycloudtaxi', 'mob1taxi', 'coursederue', 'simplytaxi', 'geoway', 'gestav', 'taximoove', 'jolitaxi', 'opentaxis'],
  affilie: ['g7', 'appsolu', 'axygest', 'taximoove', 'geoway', 'gestav', 'tessa', 'taxisnantes'],
  salarie: ['g7'],
  lgerant: ['mycloudtaxi', 'mob1taxi', 'coursederue', 'simplytaxi', 'geoway', 'gestav', 'taximoove', 'jolitaxi', 'opentaxis'],
};

export default function ListPartners({ profile, callback }) {
  return (
    <div className="fr-grid-row fr-grid-row--gutters">
      {PROFILES[profile].map((pid) => (
        <div className="fr-col-12 fr-col-md-6" key={pid}>
          <Tile
            title={PARTNERS[pid].title}
            description={PARTNERS[pid].description}
            img={PARTNERS[pid].logo}
            onClick={() => callback(PARTNERS[pid])}
          />
        </div>
      ))}
    </div>
  );
}

ListPartners.propTypes = {
  profile: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
