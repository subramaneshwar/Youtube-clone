import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import  {Search}  from '@mui/icons-material'
function Searchbar() {
  const [searchterm, setsearchterm] = useState('')
  const navigate = useNavigate();
  function onhandleSubmit(e){
    e.preventDefault();
    if(searchterm){
      navigate(`/search/${searchterm}`)
      setsearchterm('')
    }
  }
  return (
    <Paper
     component="form"
      onSubmit={onhandleSubmit}
     sx={{
        borderRadius:20,
        border:"1px solid #e3e3e3",
        pl:2,
        mr:{sm:5},        
        
     }}
     >
        <input type="text" className='search-bar' placeholder='Search..' value={searchterm}
        onChange={(e)=>{setsearchterm(e.target.value);console.log(searchterm);} } />
        <IconButton type='submit'  sx={{p:"10px",color:'red'}} aria-label='search'>
          <Search/>
        </IconButton>
    </Paper>
  )
}

export default Searchbar