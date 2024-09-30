import React from 'react';

import Image from 'next/image';
import PropTypes from 'prop-types';
import Script from 'next/script';
import useSWR from 'swr';

import 'charts.css/dist/charts.min.css';

import BaseLayout from '@/layouts/BaseLayout';
import styles from "@/styles/Stats.module.css";

import CarteLyon from '@/public/images/page_stats/lyon.png';
import CarteGrenoble from '@/public/images/page_stats/grenoble.png';
import CarteRouen from '@/public/images/page_stats/rouen.png';
import CarteToulouse from '@/public/images/page_stats/toulouse.png';
import CarteStEtienne from '@/public/images/page_stats/stetienne.png';

function toMonth(date) {
  const month = Number.parseInt(date.substr(5, 2), 10);
  return ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'][month - 1];
}

function Card({
  title,
  horizontal = false,
  img = null,
  imgBadge = null,
  size = 'md',
  children,
}) {
  return (
    <div className={`fr-card fr-card--${size} ${horizontal ? 'fr-card--horizontal' : ''}`}>
      <div className="fr-card__body">
        <div className="fr-card__content">
          <h3 className="fr-card__title">{title}</h3>
          <div className="fr-card__desc">{children}</div>
        </div>
      </div>
      {img && (
        <div className="fr-card__header">
          <div className="fr-card__img">
            <Image className="fr-responsive-img" src={img} alt="" />
          </div>
          <ul className="fr-badges-group">
            <li>
              <p className="fr-badge fr-badge--blue-ecume">{imgBadge}</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node.isRequired,
  horizontal: PropTypes.bool,
  img: PropTypes.shape(),
  imgBadge: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  children: PropTypes.node.isRequired,
};

export default function StatsPage() {
  const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.taxi' : 'http://localhost:5000';
  const { data, error } = useSWR(
    [API_URL],
    async () => {
      const url = new URL(`${API_URL}/stats/letaxi`);
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`API threw an error ${resp.status}: ${resp.text}`);
      }
      return resp.json();
    },
    { revalidateOnFocus: false },
  );
  const lastTaxisConnected = data?.taxis_connected[12][1];
  return (
    <BaseLayout title="Statistiques">
      <div className="fr-container">
        <h1>Quelques statistiques</h1>
        {error && <pre>error={JSON.stringify(error)}</pre>}
        {data && (
          <>
            <h2>Partenaires</h2>
            <div className="fr-grid-row fr-mb-3w">
              <div className="fr-col-lg-3 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title={<span id="data-groups" className={styles.number}>{data.groups}</span>}>groupements de taxi<br />au niveau national</Card>
              </div>
              <div className="fr-col fr-col-lg-3 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title={<span id="data-apps" className={styles.number}>{data.apps}</span>}>applications partenaires<br />à destination des chauffeurs</Card>
              </div>
            </div>
            <h2>Territoires</h2>
            <div className="fr-grid-row fr-mb-3w">
              <div className="fr-col-lg-3 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title={<span id="data-maas" className={styles.number}>{Object.keys(lastTaxisConnected).length}</span>}>
                  applications de MaaS opérationnelles d'ici fin 2024
                </Card>
              </div>
              <div className="fr-col fr-col-lg-4 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title="Lyon Métropole" img={CarteLyon} imgBadge="opérationnel">
                  <ul>
                    <li>
                      <p>{Math.round(lastTaxisConnected?.lyon)}&nbsp;% de taxis connectés</p>
                    </li>
                    <li>
                      <p><em>% d'augmentation des courses à venir</em></p>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="fr-col fr-col-lg-4 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title="Grenoble-Alpes Métropole" img={CarteGrenoble} imgBadge="opérationnel">
                  <ul>
                    <li>
                      <p>{Math.round(lastTaxisConnected?.grenoble)}&nbsp;% de taxis connectés</p>
                    </li>
                    <li>
                      <p><em>% d'augmentation des courses à venir</em></p>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="fr-col fr-col-lg-4 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title="Toulouse Métropole" img={CarteToulouse} imgBadge="opérationnel d'ici avril 2024">
                  <ul>
                    <li>
                      <p>{Math.round(lastTaxisConnected?.toulouse)}&nbsp;% de taxis connectés</p>
                    </li>
                    <li>
                      <p><em>% d'augmentation des courses à venir</em></p>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="fr-col fr-col-lg-4 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title="Rouen Métropole" img={CarteRouen} imgBadge="opérationnel d'ici fin 2024">
                  <ul>
                    <li>
                      <p>{Math.round(lastTaxisConnected?.rouen)}&nbsp;% de taxis connectés</p>
                    </li>
                    <li>
                      <p><em>% d'augmentation des courses à venir</em></p>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="fr-col fr-col-lg-4 fr-col-md-6 fr-col-sm-6 fr-col-xs-12">
                <Card title="Saint-Étienne Métropole" img={CarteStEtienne} imgBadge="opérationnel d'ici fin 2024">
                  <ul>
                    <li>
                      <p>{Math.round(lastTaxisConnected?.stetienne)}&nbsp;% de taxis connectés</p>
                    </li>
                    <li>
                      <p><em>% d'augmentation des courses à venir</em></p>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
            <p>
              Autres métropoles en cours d'intégration&nbsp;:
              Montpellier, Rennes, Clermont-Ferrand, Toulon
            </p>
            <h2>Évolution annuelle</h2>
            {data && (
              <div className="fr-grid-row fr-mb-3w">
                <div className="fr-col-1">
                  <div
                    style={{
                      float: 'right',
                      fontSize: '60%',
                      lineHeight: '5vh',
                      textAlign: 'right',
                    }}
                  >
                    100%
                    <br />
                    80%
                    <br />
                    60 %
                    <br />
                    40 %
                    <br />
                    20 %
                    <br />
                    Taxis
                  </div>
                </div>
                <div className="fr-col-10">
                  <table
                    className="charts-css line data-spacing-1 show-heading show-data-on-hover show-labels show-primary-axis show-5-secondary-axes show-data-axes multiple"
                    style={{
                      width: '100%',
                      height: '30vh',
                      margin: '0 auto',
                      '--color-3': 'green',
                    }}
                  >
                    <caption>Pourcentage de taxis connectés</caption>
                    <tbody>
                      {data.taxis_connected.map(([date, values], index, array) => {
                        if (index === 0) return null;
                        const prevValues = array[index - 1][1];
                        return (
                          <tr key={date}>
                            <th scope="row">{toMonth(date)}</th>
                            {['lyon', 'grenoble'].map((conurbation) => (
                              values[conurbation] && (
                                <td
                                  key={conurbation}
                                  style={{
                                    '--start': `calc(${prevValues[conurbation] || 0.0} / 100)`,
                                    '--size': `calc(${values[conurbation] || 0.0} / 100)`,
                                  }}
                                >
                                  <span className="data">{values[conurbation]}</span>
                                </td>
                              )
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <ul
                  className="charts-css legend legend-inline legend-line"
                  style={{ width: 'auto', height: '10vh', '--color-3': 'green' }}
                >
                  <li>Lyon Métropole</li>
                  <li>Grenoble-Alpes Métropole</li>
                </ul>
              </div>
            )}
            <Script>
              {`
              // https://css-tricks.com/animating-number-counters/
              function animateValue(obj, start, end, duration, unit) {
                let startTimestamp = null;
                const step = (timestamp) => {
                  if (!startTimestamp) startTimestamp = timestamp;
                  const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                  let value = Math.floor(progress * (end - start) + start);
                  if (unit) {
                    value += unit;
                  }
                  obj.innerHTML = value;
                  if (progress < 1) {
                    window.requestAnimationFrame(step);
                  }
                };
                window.requestAnimationFrame(step);
              }

              animateValue(document.getElementById("data-groups"), 0, ${data.groups}, 2000);
              animateValue(document.getElementById("data-apps"), 0, ${data.apps}, 2000);
              animateValue(document.getElementById("data-maas"), 0, ${Object.keys(lastTaxisConnected).length}, 1000);
            `}
            </Script>
          </>
        )}
      </div>
    </BaseLayout>
  );
}
