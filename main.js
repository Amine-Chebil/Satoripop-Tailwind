import './style.css';
import Glide from '@glidejs/glide';
import 'tw-elements/dist/css/index.min.css';
import 'tw-elements';

// Multi-Card Carousel
const config = {
  type: 'carousel',
  startAt: 4,
  perView: 5,
  gap: 64,
  breakpoints: {
              1280: {
                perView: 3,
              },
              1024: {
                perView: 3,
              },
              640: {
                perView: 1,
              }
  }
}
new Glide('.glide', config).mount()
