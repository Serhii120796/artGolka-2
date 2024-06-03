import products from '../../products.json';
import {price} from '../../price.js';
import { useParams } from 'react-router-dom';
import { Sidebar } from '../../components/SideBar/SideBar.js';
import {
  Container,
  DetailsWraper,
  ImgWraper,
  DescWraper,
  ProductTitle,
  SubTitle, H3, Description
} from './ProductDetails.styled.js';

const categories = {
  tnA5: {
    name: 'Термонаклейка',
    description: 'Термонаклейка. Розмір 15х20 см'
  },
  tnA4: {
    name: 'Термонаклейка',
    description: 'Термонаклейка. Розмір 20х30 см'
  },
  tnA3: {
    name: 'Термонаклейка',
    description: 'Термонаклейка. Розмір 30х40 см'
  },
  tnA2: {
    name: 'Термонаклейка',
    description: 'Термонаклейка. Розмір 40х60 см'
  },
  tnP2060: {
    name: 'Термонаклейка',
    description: 'Термонаклейка. Розмір 20х60 см'
  },
  rps: {
    name: 'Рушник великодній',
    description: 'Заготовка на габардині, проклеєна флізіліном. Розмір заготовки ~ 35х55см, краї оброблені оверлоком.'
  },
  rss: {
    name: 'Рушник спасівський',
  },
  bow: {
    name: 'Бант',
  },
  rvm: {
    name: 'Рушник обрядовий (малий)',
  },
};

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find(({ id }) => id === productId);
  const { img, article, type, quantityBeads, quantityHalfBeads, quantityLuxe, quantitySHS } = product;
  const costBeads = quantityBeads * price.beads + quantityHalfBeads * price.halfBeads + quantityLuxe * price.luxe;
  const costSHS = quantitySHS * price.shs;
  
  return (
    <main>
      <section>
        <Container>
          <Sidebar />
          <DetailsWraper>
            <ImgWraper>
              <img
                src={`${process.env.PUBLIC_URL}${img}`}
                alt={article}
                width="300"
                height="461"
              />
            </ImgWraper>
            <DescWraper>
          <ProductTitle>
            {categories[type].name}</ProductTitle>
              <SubTitle>Артикул: {article}</SubTitle>
              <H3>Ціна: {price[type]} грн.</H3>
              <Description>Комплект бісеру (+{costBeads} грн)</Description>
              <Description>Комплект ниток СХС (+{costSHS} грн)</Description>
              <Description>Про товар: { categories[type].description}</Description>
            </DescWraper>
          </DetailsWraper>
        </Container>
      </section>
    </main>
  );
}
