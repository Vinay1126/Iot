import React from 'react'
import '../css/searchbox.css'
export default function SearchBar() {
  return (
    <>
    <div className='external-block'>
        <div className='internal-block'>
            <form>
                <label>
                    <input type="text" placeholder='search' /> 
                </label>
                <input type="submit" value="search" />
            </form>
        </div>
    </div>
    </>
  )
}
