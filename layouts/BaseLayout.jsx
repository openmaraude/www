import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import ButtonLink from '../components/ButtonLink';
import styles from '../styles/layouts/Base.module.css';

export default function BaseLayout({ children }) {
  return (
    <div>
      <Head>
        <title>le.taxi, le registre de disponibilité des taxis</title>
        <meta name="description" content="le.taxi, le service public de la maraude électronique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTopIcons}>
              <div className={styles.headerTopIcon}>
                <Image src="/images/icons/republique_francaise.svg" alt="Logo République Française" layout="fill" />
              </div>
              <div className={styles.headerTopIcon}>
                <Link href="/" passHref>
                  <a><Image src="/images/icons/logo.svg" alt="Logo le.taxi" layout="fill" /></a>
                </Link>
              </div>
            </div>

            <ButtonLink href="https://le.taxi">S'inscrire</ButtonLink>
          </div>

          <menu className={styles.menu}>
            <li><Link href="/groups" passHref><a>Groupement de taxis</a></Link></li>
            <li><Link href="#" passHref><a>Artisan taxi</a></Link></li>
            <li><Link href="#" passHref><a>Mobilité publique</a></Link></li>
            <li><Link href="#" passHref><a>Application de mobilité</a></Link></li>
          </menu>
        </header>

        <main>{children}</main>

        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <div className={styles.footerTopImages}>
              <div className={styles.footerTopImage}>
                <Image src="/images/icons/republique_francaise.svg" layout="fill" alt="Logo République Française" />
              </div>
            </div>

            <div className={styles.footerTopContent}>
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

          <div className={styles.footerNav}>
            <ul>
              <li><Link href="#" passHref><a>Plan du site</a></Link></li>
              <li><Link href="#" passHref><a>Accessibilité</a></Link></li>
              <li><Link href="#" passHref><a>Mentions légales</a></Link></li>
              <li><Link href="#" passHref><a>Données personnelles</a></Link></li>
              <li><Link href="#" passHref><a>Gestion des cookies</a></Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
