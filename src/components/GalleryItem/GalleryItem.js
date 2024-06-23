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
  dor: 130,
  rvs: 220,
};

const printPrice = 'А7 - 20 грн., А6 - 30 грн., А5 - 50 грн., А4 - 95 грн., А3 - 180 грн.';

const description = {
  tnA2: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 40х60 см)',
  },
  tnA3: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 30х40 см)',
  },
  tnA3plus: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 35х40 см)',
  },
  tnA4: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 20х30 см)',
  },
  tnA4plus: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 30х33 см)',
  },
  tnA5: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 15х20 см)',
  },
  tnP2060: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 20х60 см)',
  },
  tnPrint: {
    title: 'Термопринт',
    desc: '(не вишивається)',
  },
  rps: {
    title: 'Рушник',
    desc: '(заготовка на габардині)',
    size: '(Розмір 35х55 см)',
  },
  rss: {
    title: 'Рушник',
    desc: '(заготовка на габардині)',
    size: '(Розмір 35х55 см)',
  },
  bow: {
    desc: '(заготовка на габардині)',
    size: '(Розмір 13х145 см)',
  },
  rvm: {
    title: 'Рушник малий',
    desc: '(заготовка на габардині)',
    size: '(Розмір 24х145 см)',
  },
  dor: {
    title: 'Доріжка',
    desc: '(заготовка на габардині)',
    size: '(Розмір 36х59 см)',
  },
  rvs: {
    title: 'Рушник',
    desc: '(заготовка на габардині)',
    size: '(Розмір 200х33 см)',
  },
};

export const GalleryItem = ({
  item: { img, article, type, quantityBeads, quantityHalfBeads, quantityLuxe, quantitySHS, sketch, desc, priceItem},
}) => {
  const costBeads = quantityBeads * price.beads + quantityHalfBeads * price.halfBeads + quantityLuxe * price.luxe;
  const costSHS = quantitySHS * price.shs;
  return (
    <Item>
      <GalleryImgWrapper>
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={article} width="300" height="461" loading="lazy" />
        {sketch && <Sketch src={`${process.env.PUBLIC_URL}${sketch}`} alt="sketch" width="60" loading="lazy" />}
      </GalleryImgWrapper>
      <Watermark>ArtGolka</Watermark>
      <GalleryWrapper>
        <h3>{description[type].title } {article}</h3>
        <Text>
          {description[type].desc}
        </Text>
        <Text>
          {type !== 'tnPrint' ? `Ціна ${priceItem || price[type]} грн. ${desc || description[type].size}` : printPrice}
        </Text>
        {costBeads ? <Text>Комплект бісеру (+{costBeads} грн)</Text> : ''}
        {costSHS ? <Text>Комплект ниток СХС (+{costSHS} грн)</Text> : ''}
      </GalleryWrapper>
    </Item>
  );
};
