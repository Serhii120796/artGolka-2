const price = {
  beads: 17,
  halfBeads: 10,
  luxe: 19,
  shs: 7,
  tnA2: 340,
  tnA3: 170,
  tnA3plus: 220,
  tnA4: 95,
  tnA4plus: 100,
  tnA5: 50,
  tnP2060: 170,
  rps: 130,
};

let cost;
let description;

function createMarkup(arr) {
  return arr
    .map(
      ({
        img,
        article,
        type,
        quantityBeads,
        quantityHalfBeads,
        quantityLuxe,
        quantitySHS,
        sketch,
      }) => {
        switch (type) {
          case 'tnA5':
            cost = price.tnA5;
            description = '(Розмір 15х20 см)';
            break;

          case 'tnA4':
            cost = price.tnA4;
            description = '(Розмір 20х30 см)';
            break;

          case 'tnA4plus':
            cost = price.tnA4plus;
            description = '(Розмір 20х33 см)';
            break;

          case 'tnA3':
            cost = price.tnA3;
            description = '(Розмір 30х40 см)';
            break;

          case 'tnA3plus':
            cost = price.tnA3plus;
            description = '(Розмір 35х40 см)';
            break;
          
          case 'tnA2':
            cost = price.tnA2;
            description = '(Розмір 40х60 см)';
            break;

          case 'tnP2060':
            cost = price.tnP2060;
            description = '(Розмір 20х60 см)';
            break;
          
          case 'rps':
            cost = price.rps;
            description = '(Розмір 35х55 см) Заготовка на габардині';
            break;
        }

        const costBeads =
          quantityBeads * price.beads +
          quantityHalfBeads * price.halfBeads +
          quantityLuxe * price.luxe;
        
        const costBeadsDesc = costBeads
          ? `<p class="gallery-price">Комплект бісеру (+${costBeads} грн)</p>`
          : '';

        const costSHS = quantitySHS * price.shs;
        const costSHSDesc = costSHS
          ? `<p class="gallery-price">Комплект ниток СХС (+${costSHS} грн)</p>`
          : '';

        const extraImages = sketch
          ? `<img
                src="${sketch}"
                alt="sketch"
                class="sketch"
                width="60"
                loading="lazy"
              />`
          : '';

        return `
    <li class="gallery-item">
              <div class="gallery-img-wrapper">
              <img
                src="${img}"
                alt="${article}"
                class="gallery-img"
                width="300"
                height="461"
                loading="lazy"
              />
              ${extraImages}
              </div>
              <p class="watermark">ArtGolka</p>
              <div class="callery-wrapper">
                <h3 class="gallery-article">${article}</h3>
                <p class="gallery-price">Ціна ${cost} грн. ${description}</p>
                ${costBeadsDesc}
                ${costSHSDesc}
              </div>
            </li>`;
      },
    )
    .join('');
}

export { createMarkup };
