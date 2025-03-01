import React from 'react';
import PropTypes from 'prop-types';

/**
 * Default mode as seen in the DSFR documentation.
 * This component can be placed anywhere.
 */
export function ModalButton({ title, modalId = "fr-modal-1" }) {
  return (
    <button type="button" className="fr-btn" data-fr-opened="false" aria-controls={modalId}>
      {title}
    </button>
  );
}

ModalButton.propTypes = {
  title: PropTypes.string.isRequired,
  modalId: PropTypes.string,
};

/**
 * The modal dialog itself. As advised in the documentation, it must be a direct child of <body>.
 */
export default function Modal({
  title, children, modalId = "fr-modal-1",
}) {
  const [closed, setClosed] = React.useState(false);

  React.useEffect(() => {
    const key = `modal-${title}`;

    // User clicked on "close", store setting.
    if (closed) {
      localStorage.setItem(key, 'true');
    }

    // Close popup if local storage settings is set.
    const val = localStorage.getItem(key);
    if (val === 'true') {
      setClosed(true);
    }
  }, [closed]);

  if (closed) {
    return null;
  }

  return (
    <>
      <input type="hidden" className="fr-btn" data-fr-opened="true" aria-controls={modalId} />
      <dialog id={modalId} className="fr-modal" aria-labelledby={`fr-modal-title-${modalId}`}>
        <div className="fr-container fr-container--fluid fr-container-md">
          <div className="fr-grid-row fr-grid-row--center">
            <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
              <div className="fr-modal__body">
                <div className="fr-modal__header">
                  <button
                    type="button"
                    className="fr-btn--close fr-btn"
                    title="Fermer la fenêtre modale"
                    aria-controls={modalId}
                    onClick={() => setClosed(true)}
                  >
                    Fermer
                  </button>
                </div>
                <div className="fr-modal__content">
                  <h1 id={`fr-modal-title-${modalId}`} className="fr-modal__title">
                    <span aria-hidden="true">➔</span> {title}
                  </h1>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  modalId: PropTypes.string,
};
