import {  Stack } from "@mui/material"
import { categories } from "../utills/constant"
function Sidebar( {selectedCategory,setselectedCategory}) {
  return (
    <Stack direction="row" sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }} >
      {categories.map((e) => (
        <button onClick={()=>setselectedCategory(e.name)} className="category-btn" style={{background: e.name === selectedCategory && '#FC1503', color: 'white'
        ,color:"white"}}
        key={e.name}>
          <span style={{color:e.name===selectedCategory ? 'white' : 'red',marginRight:'15px' }}>{e.icon}</span>
          <span style={{opacity:e.name===selectedCategory ? '1' : "0.8" }}>{e.name}</span>
        </button>
      ))}

    </Stack>
  )
}

export default Sidebar