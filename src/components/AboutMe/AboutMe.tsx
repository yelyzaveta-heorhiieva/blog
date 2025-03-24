import clsx from 'clsx';
import { about } from '../../sources/imagesHomePage';
import s from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={s.aboutMe}>
      <div className={clsx('container', s.aboutMeContainer)}>
        <div>
          <h2 className={s.title}>Welcome, I’m Caroline</h2>
          <ul className={s.list}>
            <li>
              <p className={s.text}>
                My name is Carolina, and I'm delighted to invite you into the
                captivating chapters of my lifestyle journey. Here, within the
                pages of my blog, you'll discover a harmonious blend of beauty,
                fashion, wellness, and the art of mindful living. Join me as we
                navigate the vibrant realms of curated fashion, where personal
                style meets expression.
              </p>
            </li>
            <li>
              <p className={s.text}>
                Unveil the secrets of my wellness rituals, each designed to
                embrace a holistic approach to beauty from the inside out.
                Together, let's explore the soulful art of mindful living, where
                every moment becomes an opportunity to dance with style, embrace
                grace, and uncover the enchantment in the ordinary.
              </p>
            </li>
            <li>
              <p className={s.text}>
                These pages are not just a blog but a sanctuary for those seeking
                inspiration for a life well-lived, adorned with beauty, curated
                fashion, and the essence of mindful elegance. I'm thrilled to
                share this journey with you
              </p>
            </li>
          </ul>
        </div>
        <ul className={s.imgList}>
          <li className={s.imgItem}>
            <img
              srcSet={`${about.about_3} 1x, ${about.about_3_2x} 2x`}
              src={about.about_3}
              alt='My photo'
              className={s.img}
            />
          </li>
          <li className={s.imgItem}>
            <img
              srcSet={`${about.about_2} 1x, ${about.about_2_2x} 2x`}
              src={about.about_2}
              alt='My photo'
              className={s.img}
            />
          </li>
          <li className={s.imgItem}>
            <img
              srcSet={`${about.about_1} 1x, ${about.about_1_2x} 2x`}
              src={about.about_1}
              alt='My photo'
              className={s.img}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
