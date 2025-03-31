import { Item, GalleryImgWrapper, GalleryWrapper, Sketch, Text } from "./GalleryItem.styled";

const price = {
  beads: 18,
  halfBeads: 10,
  luxe: 20,
  shs: 7,
  tnA2: 340,
  tnA3: 180,
  tnA4: 95,
  tnA5: 50,
  tnP2060: 180,
  rps: 140,
  rpd: 85,
  rss: 140,
  bow: 90,
  rvm: 165,
  dor: 140,
  rvs: 240,
  rvv: 270,
  svb: 70,
};

const printPrice = 'А5 - 50 грн., А4 - 95 грн., А3 - 180 грн.';

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
  tnA4: {
    title: 'Термонаклейка',
    desc: '(для вишивки бісером, нитками)',
    size: '(Розмір 20х30 см)',
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
  rpd: {
    title: 'Рушник',
    desc: '(заготовка на габардині)',
    size: '(Розмір 26х38 см)',
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
  rvv: {
    title: 'Рушник',
    desc: '(заготовка на габардині)',
    size: '(Розмір 200х40 см)',
  },
  svb: {
    title: 'Схема',
    desc: '(заготовка на габардині)',
    size: '(Розмір 20х26 см)',
  },
};

export const GalleryItem = ({
  item: { img, article, type, quantityBeads, quantityHalfBeads, quantityLuxe, quantitySHS, sketch, desc, priceItem, title},
}) => {

  const costBeads = quantityBeads * price.beads + quantityHalfBeads * price.halfBeads + quantityLuxe * price.luxe;
  const costSHS = quantitySHS * price.shs;

  return (
    <Item>
      <GalleryImgWrapper>
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={article} width="300" height="461" loading="lazy" />
        {sketch && <Sketch src={`${process.env.PUBLIC_URL}${sketch}`} alt="sketch" width="60" loading="lazy" />}
      </GalleryImgWrapper>
      {type !== 'sample' && <GalleryWrapper>
        <h3>{title ? title : description[type].title } {article}</h3>
        <Text>
          {description[type].desc}
        </Text>
        <Text>
          {type !== 'tnPrint' ? `Ціна ${priceItem || price[type]} грн. ${desc || description[type].size}` : printPrice}
        </Text>
        {costBeads ? <Text>Комплект бісеру (+{costBeads} грн)</Text> : ''}
        {costSHS ? <Text>Комплект ниток СХС (+{costSHS} грн)</Text> : ''}
      </GalleryWrapper>}
    </Item>
  );
};
