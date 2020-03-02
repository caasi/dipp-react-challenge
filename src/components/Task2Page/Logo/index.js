import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Logo = React.memo(({
  logo_resource,
  box,
  drop_shadow = false,
}) => {
  const [logo] = useImage(logo_resource, 'anonymous');
  const { x, y } = box.coordinates;
  const shadowProps = !box.drop_shadow
    ? {}
    : {
      shadowColor: '#333',
      shadowBlur: 20,
    };

  return (
    <Image
      image={logo}
      x={x}
      y={y}
      {...shadowProps}
    />
  );
});

export default Logo;
