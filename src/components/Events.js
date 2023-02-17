import React from 'react'
import EventItem from './EventItem';
import Navbar from './Navbar';
function Events() {
    var x ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore ad saepe rem, laboriosam minus porro facilis accusamus quam vel explicabo ut suscipit iusto fuga voluptatibus eius deserunt ex temporibus modi! Porro labore autem iure similique soluta culpa ipsa praesentium exercitationem excepturi eaque? Libero vitae enim autem commodi suscipit. Aperiam.'
  return (
      <>
      <Navbar/>
      <div className="grid grid-cols-3 items-center gap-4">
      {<EventItem title={'dadafa'} desc={x} imgURL={''}author={'ssd'}date={'2584'} venue={'Mumbai'}/>}
      {<EventItem title={'dadafa'} desc={x} imgURL={''}author={'ssd'}date={'2584'} venue={'Mumbai'}/>}
      {<EventItem title={'dadafa'} desc={x} imgURL={''}author={'ssd'}date={'2584'} venue={'Mumbai'}/>}
      </div>
      </>
  )
}

export default Events
