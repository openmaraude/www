import Link from 'next/link';

import BaseLayout from '@/layouts/BaseLayout';
import Modal from '@/components/Modal';

import ButtonLink from '@/components/ButtonLink';

function RadioPopup() {
  return (
    <>
      <Modal title="Vous êtes membre d'un groupement ou d'une centrale radio&nbsp;?">
        <p>
          Vous pouvez renseigner son nom ainsi que votre email
          pour être tenu informé de sa connexion au registre le.taxi.
        </p>
        <ButtonLink href="https://4f5c450d.sibforms.com/serve/MUIEAD0z8iCpmGPojLy4HKONuV0_pX7WwN6XXdRD9HC7B8EZVubFYgX0eMHjCdAu4EBd42c0utm9cECGmiQ8Jso2mw1K25YCzedBMSlkFDeJ02y43vgYY_HkkC6sgZ_I7cx23gcrzWORhx_X02g9xYXZKZEw_9EWnoRKCsVN5xTUUKNQLq6PI0sidIzx_ryokIXKTgYBsRPsN2Yn">Recevoir les informations</ButtonLink>
      </Modal>
    </>
  );
}

export default function TaxiPage() {
  return (
    <>
      <RadioPopup />
      <BaseLayout title="Chauffeur taxi">
        <div className="fr-container">
          <div className="fr-callout fr-callout--blue-ecume">
            <h1 className="fr-callout__title">Qu'est-ce que le.taxi&nbsp;?</h1>
            <p className="fr-callout__text">
              En tant que taxi en France, vous avez
              l'obligation légale de vous enregistrer sur
              notre service, conformément au décret
              relatif au <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044514743">registre de disponibilité des taxis</Link> et
              à son <Link href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044514795">arrêté d'application</Link> publiés au
              Journal Officiel.
            </p>
            <br />
            <p className="fr-callout__text">
              Cela va vous permettre de recevoir des
              courses de clients près de vous ayant
              besoin d'un taxi immédiatement.
            </p>
          </div>
          <h1>Pour m'inscrire, je dois télécharger<br />  une application chauffeur agréée</h1>
          <p>
            Pour vous enregistrer, vous devez
            télécharger une des applications chauffeur
            agréées le.taxi. Une fois l'application
            téléchargée, vous aurez besoin de vous munir de votre&nbsp;:
          </p>
          <ul>
            <li>pièce d'identité</li>
            <li>carte professionnelle</li>
            <li>numéro d'ADS</li>
            <li>numéro de plaque d'immatriculation</li>
          </ul>
          <p>
            Ces informations seront demandées lors
            de la création de compte sur l'application
            choisie.
          </p>
          <p className="fr-ml-14w">
            <ButtonLink href="/partners/driver/profile" className="fr-btn">Je m'inscris</ButtonLink>
          </p>
          <p>
            <Link href="/assets/documents/22016_TAXI_maraude_flyerA5_BATweb.pdf?20230313">Je télécharge le flyer chauffeur pour plus d'informations</Link>
          </p>
          <div className="fr-callout fr-callout--purple-glycine">
            <h1 className="fr-callout__title">Vous êtes responsable d'un groupement&nbsp;?</h1>
            <ButtonLink href="/contact">Je contacte l'équipe le.taxi</ButtonLink>
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
