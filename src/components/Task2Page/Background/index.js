import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const Background = ({ src }) => {
  const [image] = useImage(src, 'anonymous');

  return (
    <Image image={image} />
  );
};

export default Background;
