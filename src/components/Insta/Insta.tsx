import s from './Insta.module.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { slider } from '../../sources/imagesHomePage';
import icons from '../../assets/images/icons.svg';
import clsx from 'clsx';

const CustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        type='button'
        className={clsx(s.pagination, s.prev)}
        onClick={() => swiper.slidePrev()}
      >
        <svg width='16' height='32' className={s.icon}>
          <use href={`${icons}#arrow-left`}></use>
        </svg>
      </button>
      <button
        type='button'
        className={clsx(s.pagination, s.next)}
        onClick={() => swiper.slideNext()}
      >
        <svg width='16' height='32' className={s.icon}>
          <use href={`${icons}#arrow-right`}></use>
        </svg>
      </button>
    </div>
  );
};

const Insta = () => {
  const sliderArr = Object.values(slider);
  return (
    <section className={s.insta}>
      <div className='container'>
        <h2 className={s.title}>
          Follow my lifestyle daily on Instagram and join 100k others.
        </h2>
        <p className={s.tag}>@ thestyledlife / #thestyledlife</p>
      </div>
      <Swiper
        modules={[Autoplay]}
              loop={true}
              spaceBetween={36}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.5,
          },
          1512: {
            slidesPerView: 5,
          },
        }}
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              speed={2000}
      >
        <CustomNavigation />
        {sliderArr.map((url, index) => (
          <SwiperSlide key={url + index}>
            <img src={url} alt='instagram photos' className={s.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Insta;
