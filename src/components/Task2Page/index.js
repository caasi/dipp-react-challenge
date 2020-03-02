import React, { useState } from 'react';
import styles from './index.module.scss';
import { ad, images } from './metadata.json';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';

export default function Task2Page({ id }) {
  const [dataURL, setDataURL] = useState('');
  const [width, height] = ad.dimensions;
  const [image] = useImage(images[ad.img_hash].resource, 'anonymous');
  const [logo] = useImage(ad.logo.logo_resource, 'anonymous');
  const { x: logoX, y: logoY } = ad.logo.box.coordinates;
  const { copys } = ad;

  return (
    <div id={id} className={styles.className}>
      <h1>AD</h1>
      <a download="download" href={dataURL}>download</a>
      <hr />
      <Stage
        width={width}
        height={height}
        ref={(stage) => {
          if (!stage) return;
          stage.toDataURL({
            mimeType: 'image/jpeg',
            callback: (data) => setDataURL(data),
          });
        }}
      >
        <Layer>
          <Image image={image} />
          <Image
            image={logo}
            x={logoX}
            y={logoY}
            shadowColor="#333"
            shadowBlur={20}
          />
          {copys.map((copy, i) => copy.splits.map((part, j) =>
            <Text
              key={`${i},${j}`}
              x={part.x}
              y={part.y}
              fill={copy.text_color}
              fontSize={part.size}
              text={part.content}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}
