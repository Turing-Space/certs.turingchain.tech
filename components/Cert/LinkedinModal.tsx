import { FC, useContext, useCallback, useEffect } from 'react';
import Modal from 'react-modal';

import 'static/css/linkedin.css';

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LinkedinModal: FC<TProps> = ({ isOpen, onClose }) => {
  useEffect(() => {}, []);

  return (
    <Modal
      className="ReactModal__Custom_Content"
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          position: 'relative',
          borderRadius: '10px',
          backgroundColor: '#fafafa',
          padding: '2em',
        },
      }}
    >
      <div className="pe-s-form__container">
        <header className="pe-s-form__header pe-form-header">
          <div id="ember138" className="ember-view">
            <button
              className="form-back-action t-14 t-black--light t-normal"
              data-control-name="cancel"
              type="button"
              data-ember-action
              data-ember-action-139={139}
            >
              <span className="visually-hidden">Cancel</span>
              <li-icon aria-hidden="true" type="cancel-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  data-supported-dps="24x24"
                  fill="currentColor"
                  focusable="false"
                >
                  <path d="M20 5.32L13.32 12 20 18.68 18.66 20 12 13.33 5.34 20 4 18.68 10.68 12 4 5.32 5.32 4 12 10.69 18.68 4z" />
                </svg>
              </li-icon>
            </button>
          </div>
          <h2 className="pe-form-header__title">
            Add licenses &amp; certifications
          </h2>
          <button
            className="pe-form-footer__action--submit artdeco-button form-submit-action t-14 t-white t-normal"
            type="submit"
          >
            Save
          </button>
        </header>
        {/**/}
        <div className="pe-s-form__body pe-form-body">
          <div className="pe-form-field certification-name floating-label ">
            <div id="ember142" className="ember-view">
              {' '}
              <label htmlFor="certification-name" className="mb1 required">
                Name
              </label>
              <div
                id="ember143"
                className="pe-artdeco-typeahead search-basic-typeahead search-vertical-typeahead relative pe-artdeco-typeahead__stack-index--4 ember-view"
              >
                {' '}
                <div id="ember144" className="ember-view">
                  <input
                    id="certification-name"
                    autoComplete="off"
                    placeholder="Ex: Cisco Certified Network Associate Security (CCNA)"
                    maxLength={255}
                    required
                    role="combobox"
                    aria-autocomplete="list"
                    aria-activedescendant
                    aria-expanded="false"
                    aria-owns
                    aria-label="Ex: Cisco Certified Network Associate Security (CCNA)"
                    type="text"
                  />
                </div>
                {/**/}
              </div>
            </div>
            {/**/}
          </div>
          <div className="pe-form-field certification-authority has-logo floating-label required ">
            <div className="pe-logo-container">
              <img
                width={24}
                height={24}
                alt=""
                id="ember145"
                className="pe-logo-container__img lazy-image ghost-company loaded ember-view"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              />
              <div id="ember146" className="ember-view">
                {' '}
                <label className="mb1 required">Issuing Organization</label>
                <div
                  id="ember147"
                  className="pe-artdeco-typeahead search-basic-typeahead search-vertical-typeahead relative pe-artdeco-typeahead__stack-index--3 ember-view"
                >
                  {' '}
                  <div id="ember148" className="ember-view">
                    <input
                      autoComplete="off"
                      placeholder="Ex: Cisco"
                      maxLength={255}
                      required
                      role="combobox"
                      aria-autocomplete="list"
                      aria-activedescendant
                      aria-expanded="false"
                      aria-owns
                      aria-label="Ex: Cisco"
                      type="text"
                    />
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
            {/**/}
          </div>
          <fieldset className="pe-form-time-period pe-form-field ">
            <div className="mb3">
              <input
                data-control-name="edit_certification_date_toggle"
                id="credential-does-not-expire"
                className="pe-form-time-period__ongoing-activity"
                type="checkbox"
              />
              <label htmlFor="credential-does-not-expire">
                This credential does not expire
              </label>
            </div>
            <div className="pe-form-time-period__container">
              <fieldset className="pe-form-time-period__start-date pe-form-time-period__start-date--spacious">
                <legend className="pe-form-field__label t-14 t-black t-normal block">
                  Issue Date
                </legend>
                <div className="pe-form-time-period__date-field ">
                  <div className="pe-form-time-period__date-unit">
                    <label
                      className="visually-hidden"
                      htmlFor="certification-start-month"
                    >
                      Start month
                    </label>
                    <span id="ember149" className="ember-view">
                      June
                    </span>
                  </div>
                  <div className="pe-form-time-period__date-unit">
                    <label
                      className="visually-hidden"
                      htmlFor="certification-start-year"
                    >
                      Start year
                    </label>
                    <span id="ember163" className="ember-view">
                      2019
                    </span>
                  </div>
                </div>
              </fieldset>
              <fieldset className="pe-form-time-period__end-date pe-form-time-period__end-date--spacious">
                <legend className="pe-form-field__label t-14 t-black t-normal block">
                  Expiration Date
                </legend>
                <div className="pe-form-time-period__date-field ">
                  <div className="pe-form-time-period__date-unit">
                    <label
                      className="visually-hidden"
                      htmlFor="certification-end-month"
                    >
                      End month
                    </label>
                    <span id="ember225" className="ember-view">
                      June
                    </span>
                  </div>
                  <div className="pe-form-time-period__date-unit">
                    <label
                      className="visually-hidden"
                      htmlFor="certification-end-year"
                    >
                      End year
                    </label>
                    <span id="ember239" className="ember-view">
                      2019
                    </span>
                  </div>
                </div>
              </fieldset>
            </div>
            {/**/}
          </fieldset>
          <div className="pe-form-field certification-license-number floating-label ">
            <label
              htmlFor="certification-license-number"
              className="pe-form-field__label label-text t-14 t-black t-normal"
            >
              Credential ID
            </label>
            <input
              maxLength={80}
              id="certification-license-number"
              className="ember-text-field pe-form-field__text-input ember-view"
              type="text"
            />
            {/**/}
          </div>
          <div className="pe-form-field certification-url floating-label ">
            <label
              htmlFor="certification-url"
              className="pe-form-field__label label-text t-14 t-black t-normal"
            >
              Credential URL
            </label>
            <input
              maxLength={255}
              id="certification-url"
              className="ember-text-field pe-form-field__text-input ember-view"
              type="text"
            />
            {/**/}
          </div>
        </div>
        <footer className="pe-s-form__footer pe-form-footer">
          <div className="info-not-shared t-14 t-black--light t-normal">
            <span>
              We no longer share changes to licenses &amp; certifications with
              your network.
            </span>
            <a
              data-control-name="osmosis_help_article"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/help/linkedin/answer/86236?lang=undefined"
              className="info-not-shared__helplink t-14 t-black t-normal"
            >
              Learn what’s shared
            </a>
          </div>
          <div className="pe-form-footer__actions display-flex justify-space-between">
            <div className="pe-form-footer__status">{/**/} </div>
            <div className="justify-flex-end">
              <div id="ember312" className="ember-view">
                <button
                  className="artdeco-button artdeco-button--secondary mr2"
                  type="submit"
                  data-ember-action
                  data-ember-action-313={313}
                >
                  Save and add another
                </button>
              </div>
              <button
                className="pe-form-footer__action--submit artdeco-button form-submit-action t-14 t-white t-normal"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </footer>
      </div>
    </Modal>
  );
};

export default LinkedinModal;
