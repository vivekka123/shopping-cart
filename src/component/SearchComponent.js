import React from 'react'

const SearchComponent = ({searchCourse,courseSearchUserFunction}) => {
  return (
    <header className='App-header'>
        <h1>Collections Shopping Cart</h1>
        <div className='search-bar'>
            <input
            type='text'
            placeholder='Search for Collection Products..'
            value={searchCourse}
            onChange={courseSearchUserFunction}
            />
        </div>
    </header>
    
  )
}

export default SearchComponent