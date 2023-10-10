import React from 'react'

const List = () => {
  const navlinkItems = [
    `Link to google.com`,
    `Link to facebook.com`,
    `Link to amazon.com`,
  ]; // only update the value of this array

  return (
    <ul className="nav">
        {
          navlinkItems.map( (item, index) => <li className="nav-item" key={index}><a className="nav-link" href="#">{item}</a></li> )
        }
    </ul> 
  )
}

export default List