
import { Post } from '../../App.types';
import AboutMe from '../../components/AboutMe/AboutMe'
import Hero from '../../components/Hero/Hero'
import Posts from '../../components/Posts/Posts'

interface Props {
  posts: Post[];
}

const HomePage = ({posts}: Props) => {
  return (
    <>
      <Hero />
      <Posts posts={posts} />
      <AboutMe/> 
    </>
  )
}

export default HomePage
