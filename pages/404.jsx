import BaseLayout from '@/layouts/BaseLayout';

import styles from '@/styles/Http404.module.css';

export default function NotFoundPage() {
  return (
    <BaseLayout>
      <section className={styles.section}>
        <h1>Page non trouvée</h1>

        <p>
          La page que vous cherchez n'existe pas. Elle s'est sûrement perdue
          lors d'une mise à jour de ce site.
        </p>
      </section>
    </BaseLayout>
  );
}
