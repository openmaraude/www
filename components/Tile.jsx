import PropTypes from 'prop-types';

import Image from 'next/image';
import Link from 'next/link';

export default function Tile({
  title,
  href = "#",
  description = null,
  img = null,
  onClick = null,
  size = 'md',
  orientation = 'vertical',
}) {
  return (
    <div className={`fr-tile fr-enlarge-link fr-tile--${size} fr-tile--${orientation} fr-tile--horizontal@md`}>
      <div className="fr-tile__body">
        <div className="fr-tile__content">
          <h3 className="fr-tile__title">
            <Link href={href} onClick={onClick} legacyBehavior={false}>{title}</Link>
          </h3>
          {description && (
            <p className="fr-tile__detail">{description}</p>
          )}
        </div>
      </div>
      {img && (
        <div className="fr-tile__header">
          <div className="fr-tile__pictogram">
            <Image src={img} className="fr-artwork" alt="" aria-hidden="true" sizes="50vw" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      )}
    </div>
  );
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  description: PropTypes.node,
  img: PropTypes.shape({ src: PropTypes.string }),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};
