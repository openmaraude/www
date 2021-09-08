import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ButtonLink from '../components/ButtonLink';
import styles from '../styles/layouts/Base.module.css';
import stylesHeader from '../styles/layouts/Base.header.module.css';
import stylesFooter from '../styles/layouts/Base.footer.module.css';

function Header() {
  return (
    <header className={stylesHeader.container}>
      <div className={stylesHeader.top}>
        <div className={stylesHeader.icons}>
          <div className={stylesHeader.icon}>
            <Image src="/images/icons/republique_francaise.svg" alt="Logo République Française" layout="fill" />
          </div>
          <div className={stylesHeader.icon}>
            <Link href="/" passHref>
              <a><Image src="/images/icons/logo.svg" alt="Logo le.taxi" layout="fill" /></a>
            </Link>
          </div>
        </div>

        <ButtonLink href="https://api.gouv.fr/les-api/le-taxi/demande-acces">S'inscrire</ButtonLink>
      </div>

      <menu className={stylesHeader.menu}>
        <li><Link href="/taxis_group" passHref><a>Groupement de taxis</a></Link></li>
        <li><Link href="/taxi" passHref><a>Artisan taxi</a></Link></li>
        <li><Link href="/aom" passHref><a>Mobilité publique</a></Link></li>
        <li><Link href="/maas" passHref><a>Application de mobilité</a></Link></li>
      </menu>
    </header>
  );
}

function Footer() {
  return (
    <footer className={stylesFooter.container}>
      <div className={stylesFooter.top}>
        <div className={stylesFooter.images}>
          <div className={stylesFooter.image}>
            <Image src="/images/icons/republique_francaise.svg" layout="fill" alt="Logo République Française" />
          </div>
        </div>

        <div className={stylesFooter.content}>
          <p>
            Texte optionnel 3 lignes maximum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur et vel quam auctor semper. Cras si amet mollis dolor.
          </p>

          <ul>
            <li><Link href="#" passHref><a>legifrance.gouv.fr</a></Link></li>
            <li><Link href="#" passHref><a>gouvernement.fr</a></Link></li>
            <li><Link href="#" passHref><a>service-public.fr</a></Link></li>
            <li><Link href="#" passHref><a>data.gouv.fr</a></Link></li>
          </ul>
        </div>
      </div>

      <div className={stylesFooter.nav}>
        <ul>
          <li><Link href="#" passHref><a>Plan du site</a></Link></li>
          <li><Link href="#" passHref><a>Accessibilité</a></Link></li>
          <li><Link href="#" passHref><a>Mentions légales</a></Link></li>
          <li><Link href="#" passHref><a>Données personnelles</a></Link></li>
          <li><Link href="#" passHref><a>Gestion des cookies</a></Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default function BaseLayout({ children }) {
  return (
    <div>
      <Head>
        <title>le.taxi, le registre de disponibilité des taxis</title>
        <meta name="description" content="le.taxi, le service public de la maraude électronique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
