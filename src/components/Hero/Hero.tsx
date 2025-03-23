import clsx from 'clsx'
import s from './Hero.module.css'

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={clsx('container', s.heroContainer)}>
          <h1 className={s.title}>Elevate Life with Style.</h1>
          <p className={s.text}>
            Explore a curated blend of style and purpose at THE LIFESTYLED, where
            every post is a step towards a more inspired and elevated life.
          </p>
          <button type='button' className={s.btn}>Read Blog</button>
      </div>
    </section>
  );
}

export default Hero
