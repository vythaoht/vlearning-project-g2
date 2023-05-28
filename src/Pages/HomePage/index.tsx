import React from 'react'
import BoxNumber from '../../Components/BoxNumber'
import Carousel from '../../Components/Carousel'
import CourseList from '../../Components/CourseList'
import Introduce from '../../Components/Introduce'
import Ratings from '../../Components/Ratings'
import Review from '../../Components/Review'

type Props = {}

function HomePage({ }: Props) {
  return (
    <div>
      <Carousel />
      <Introduce />
      <CourseList />
      <BoxNumber />
      <Ratings />
      <Review />
    </div>
  )
}

export default HomePage