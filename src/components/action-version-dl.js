import React, { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import '../sass/dl-actionbar.scss'


import UserList from "../pages/userList/UserList";
import ProductList from "../pages/productList/ProductList";

// components
import OverviewComponent from '../components/dl-components/OverviewComponent'
import AddItemComponent from '../components/dl-components/AddItemComponent'
import SearchInventoryComponent from '../components/dl-components/SearchInventoryComponent'
import ManageInventoryComponent from '../components/dl-components/ManageInventoryComponent'
import ReleaseItemsComponent from '../components/dl-components/ReleaseItemsCmponent'
import AddSupplier from '../components/dl-components/AddSupplier'
import ManageSupplier from '../components/dl-components/ManageSupplierComponent'

function ActionSection() {

  // set profile details
  const [profile , setProfile] = useState({
    image:"PrototypeResources/profile-pic-1.jpg",
    username:"Someone Unknown",
    designation:"Stock Manager"
  })
  return (
    <div className='actionbar-container'>
      {/* main ribbon part this contain the profile details including name designation and image */}
      <div className="main-ribbon">
        <div className="inventory-management-text">
            main dashboard
        </div>

        <div className="user-details">
          <img className='user-image' src={profile.image} alt="profile" />
          <div className="profile-details">
            <span className='username'>{profile.username}</span>
            <span className='designation'>{profile.designation}</span>
          </div>
        </div>
      </div>

      {/* routes going in here this part is resposible to display the correct component according to input */}
      <Routes>
        <Route path="/component-1" element={<OverviewComponent/>}/>
        <Route path="/component-2" element={<AddItemComponent/>}/>
        <Route path="/component-3" element={<SearchInventoryComponent/>}/>
        <Route path="/component-4" element={<ManageInventoryComponent/>}/>
        <Route path="/component-5" element={<ReleaseItemsComponent/>}/>
        <Route path="/component-6" element={<AddSupplier/>}/>
        <Route path="/component-7" element={<ManageSupplier/>}/> 
        <Route path="/users" element={<UserList />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      
    </div>
  )
}

export default ActionSection