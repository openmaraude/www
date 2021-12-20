import PropTypes from 'prop-types';

/**
 * Default mode as seen in the DSFR documentation.
 * This component can be placed anywhere.
 */
export function ModalButton({ title, modalId = "fr-modal-1" }) {
  return (
    <button class="fr-btn" data-fr-opened="false" aria-controls={modalId}>
      {title}
    </button>
  )
}

ModalButton.PropTypes = {
  title: PropTypes.string,
  modalId: PropTypes.string,
}

/**
 * The modal dialog itself, as advised in the documentation, it must be placed as a direct child of <body>.
 * Then a ModalButton with the same modalId will open it, unless you asked autoOpen.
 */
export function Modal({ title, children, modalId = "fr-modal-1", autoOpen = false }) {
  return (
    <>
      {autoOpen && (<input type="hidden" class="fr-btn" data-fr-opened="true" aria-controls={modalId} />)}
      <div id={modalId} class="fr-modal">
        <div class="fr-container fr-container--fluid fr-container-md">
          <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-8 fr-col-lg-6">
              <div class="fr-modal__body">
                <div class="fr-modal__header">
                  <button class="fr-link--close fr-link" title="Fermer la fenêtre modale" aria-controls={modalId}>Fermer</button>
                </div>
                <div class="fr-modal__content">
                  <h1 id="fr-modal-title-modal-1" class="fr-modal__title">{title}</h1>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  modalId: PropTypes.string,
  autoOpen: PropTypes.bool,
};

export default Modal;
