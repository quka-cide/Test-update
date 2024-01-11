const mySwiper = new Splide( '#mySwiper', {
  type: 'loop',
  perPage: 4,
  perMove: 1,
  gap: '14px',
  snap: true,
  pagination: false,
})

mySwiper.mount();

const secondSwiper = new Splide( '#secondSwiper', {
  type: 'loop',
  perPage: 6,
  perMove: 1,
  gap: '30px',
  snap: true,
  pagination: false,
})

secondSwiper.mount();