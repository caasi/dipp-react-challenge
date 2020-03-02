import React, { useState } from 'react';
import styles from './index.module.scss';
import { ad, images } from './metadata.json';
import { Stage, Layer, Text } from 'react-konva';
import Background from './Background';
import Logo from './Logo';

export default function Task2Page({ id }) {
  const [dataURL, setDataURL] = useState('');
  const [width, height] = ad.dimensions;
  const { img_hash, copys } = ad;
  const image = images[img_hash];

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
          // wait until children have been rendered
          setTimeout(() => {
            stage.toDataURL({
              mimeType: 'image/jpeg',
              callback: (data) => setDataURL(data),
            });
          }, 100);
        }}
      >
        <Layer>
          <Background src={image.resource} />
          <Logo {...ad.logo} />
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
