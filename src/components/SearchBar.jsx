import React from 'react'
import searchIcon from '../assets/searchIcon.png'
import addIcon from '../assets/addIcon.png'
const SearchBar = () => {
    const handleSearch=()=>{
        console.log('search');
        
    }
  return (
    <>
    <div className='w-full flex items-center justify-between  mt-3'>
        <form onSubmit={handleSearch} className=' flex items-center justify-between w-[330px] h-10 rounded border-white border'>
            <input type="text" placeholder="Search Contact" name="search" id="search" className='w-[280px] border-none h-full outline-none px-3 text-white' />
            <button className=' w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'><img src={searchIcon} alt="" /></button>
        </form>
        <button className='bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
            <img src={addIcon} alt="" />
        </button>
    </div>
    </>
  )
}

export default SearchBar