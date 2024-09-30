import React from 'react';

import BaseLayout from '@/layouts/BaseLayout';

export default function FAQPage() {
  return (
    <BaseLayout title="Contactez-nous">
      <div className="fr-container fr-container--fluid fr-mb-md-14v">
        <div className="fr-grid-row fr-grid-row-gutters fr-grid-row--center">
          <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
            <div className="fr-container fr-background-alt--grey fr-px-md-0 fr-py-10v fr-py-md-14v">
              <div className="fr-grid-row fr-grid-row-gutters fr-grid-row--center">
                <div className="fr-col-12 fr-col-md-9 fr-col-lg-8">
                  <h1>Contactez-nous</h1>
                  <div>
                    <form id="login-1760" action="mailto:equipe@le.taxi">
                      <fieldset className="fr-fieldset" id="login-1760-fieldset" aria-labelledby="login-1760-fieldset-legend login-1760-fieldset-messages">
                        <legend className="fr-fieldset__legend" id="login-1760-fieldset-legend">
                          <h2>Joindre l'équipe le.taxi</h2>
                        </legend>
                        <div className="fr-fieldset__element">
                          <p className="fr-text--sm">Vous êtes professionnel et présentez un cas spécifique&nbsp;? Contactez l'équipe le.taxi.</p>
                        </div>
                        <div className="fr-fieldset__element">
                          <ul className="fr-btns-group">
                            <li>
                              <button type="submit" className="fr-mt-2v fr-btn">Contactez-nous par e-mail</button>
                            </li>
                          </ul>
                        </div>
                        <div className="fr-messages-group" id="login-1760-fieldset-messages" aria-live="assertive" />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
