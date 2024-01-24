import {Routes, Route} from 'react-router-dom'

import {New} from '../pages/New'
import {Home} from '../pages/Home'
import {Profile} from '../pages/Profile'
import {Details} from '../pages/Details'

export function AppRoutes(){
  return(

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/new' element={<New/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
    </Routes>
  )
}