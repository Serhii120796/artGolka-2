import { price, printPrice } from '../../productPrice';
import { description } from '../../productDescription';
import {
  GalleryImgWrapper,
  GalleryWrapper,
  Sketch,
  Text,
} from './GalleryItem.styled';

export const GalleryItem = ({
  item: {
    img,
    article,
    type,
    quantityBeads = 0,
    quantityHalfBeads = 0,
    quantityLuxe = 0,
    quantitySHS = 0,
    sketch,
    size,
    priceItem,
    desc,
    title,
  },
}) => {
  let costBeads, costSHS;
  
  if (quantityBeads || quantityHalfBeads || quantityLuxe) {
    costBeads =
      quantityBeads * price.beads +
      quantityHalfBeads * price.halfBeads +
      quantityLuxe * price.luxe;
  }

  if (quantitySHS) {
    costSHS = quantitySHS * price.shs;
  }

  return (
    <>
      <GalleryImgWrapper>
        <img
          src={`${process.env.PUBLIC_URL}${img}`}
          alt={article}
          width="300"
          height="461"
          loading="lazy"
        />
        {sketch && (
          <Sketch
            src={`${process.env.PUBLIC_URL}${sketch}`}
            alt="sketch"
            width="60"
            loading="lazy"
          />
        )}
      </GalleryImgWrapper>
      {type !== 'sample' && (
        <GalleryWrapper>
          <h3>
            {title ? title : description[type].title} {article}
          </h3>
          <Text>{desc || description[type].desc}</Text>
          <Text>
            {type !== 'tnPrint'
              ? `Ціна ${priceItem || price[type]} грн. ${type === 'mer' ? 'за 1 м.п.' : ''} ${size || description[type].size || ''}`
              : printPrice}
          </Text>
          {costBeads && <Text>Комплект бісеру (+{costBeads} грн)</Text>}
          {costSHS && <Text>Комплект ниток СХС (+{costSHS} грн)</Text>}
        </GalleryWrapper>
      )}
    </>
  );
};
