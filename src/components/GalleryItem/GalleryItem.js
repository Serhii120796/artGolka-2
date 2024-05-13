import { Item, Watermark, GalleryImgWrapper, GalleryWrapper, Sketch, Text } from "./GalleryItem.styled";

const price = {
  beads: 17,
  halfBeads: 10,
  luxe: 19,
  shs: 7,
  tnA2: 340,
  tnA3: 180,
  tnA3plus: 220,
  tnA4: 95,
  tnA4plus: 100,
  tnA5: 50,
  tnP2060: 180,
  rps: 130,
  rss: 130,
  bow: 80,
  rvm: 150,
};

const description = {
  tnA2: "(Розмір 40х60 см)",
  tnA3: "(Розмір 30х40 см)",
  tnA3plus: "(Розмір 35х40 см)",
  tnA4: "(Розмір 20х30 см)",
  tnA4plus: "(Розмір 20х33 см)",
  tnA5: "(Розмір 15х20 см)",
  tnP2060: "(Розмір 20х60 см)",
  rps: "(Розмір 35х55 см) Заготовка на габардині",
  rss: "(Розмір 35х55 см) Заготовка на габардині",
  bow: "(Розмір 13х145 см) Заготовка на габардині",
  rvm: "(Розмір 24х145 см) Заготовка на габардині",
};

export const GalleryItem = ({
  item: { img, article, type, quantityBeads, quantityHalfBeads, quantityLuxe, quantitySHS, sketch },
}) => {
  const costBeads = quantityBeads * price.beads + quantityHalfBeads * price.halfBeads + quantityLuxe * price.luxe;
  const costSHS = quantitySHS * price.shs;
  return (
    <Item>
      <GalleryImgWrapper>
        <img src={img} alt={article} width="300" height="461" loading="lazy" />
        {sketch && <Sketch src={sketch} alt="sketch" width="60" loading="lazy" />}
      </GalleryImgWrapper>
      <Watermark>ArtGolka</Watermark>
      <GalleryWrapper>
        <h3>{article}</h3>
        <Text>
          Ціна {price[type]} грн. {description[type]}
        </Text>
        {costBeads ? <Text>Комплект бісеру (+{costBeads} грн)</Text> : ''}
        {costSHS ? <Text>Комплект ниток СХС (+{costSHS} грн)</Text> : ''}
      </GalleryWrapper>
    </Item>
  );
};
