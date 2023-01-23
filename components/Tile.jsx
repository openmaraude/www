import PropTypes from 'prop-types';

import Image from 'next/image';
import Link from 'next/link';

export default function Tile({
  title,
  href,
  description,
  img,
  onClick,
}) {
  return (
    <div className="fr-tile fr-enlarge-link fr-tile--vertical fr-tile--horizontal-md">
      <div className="fr-tile__body">
        <h4 className="fr-tile__title">
          <Link className="fr-tile__link" href={href} onClick={onClick} legacyBehavior={false}>{title}</Link>
        </h4>
        {description && (
          <div className="fr-tile__desc">{description}</div>
        )}
      </div>
      {img && (
        <div className="fr-tile__img">
          <Image src={img} className="fr-responsive-img" alt="" />
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
};

Tile.defaultProps = {
  href: "#",
  description: null,
  img: null,
  onClick: null,
};
