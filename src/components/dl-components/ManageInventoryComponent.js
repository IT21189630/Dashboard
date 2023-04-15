import React, { useState , useEffect } from 'react'
import {ImSearch} from 'react-icons/im'
import ResultContainer from './itemSearchResultsContainer'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import '../../sass/manage-inventory.scss'
import api from '../../services/api'

function ManageInventoryComponent() {

  const [inventory , setInventory] = useState([])

  const [searchPrompt , setSearchPrompt] = useState('')

  const searchFieldHandler = (e) => {
    setSearchPrompt(e.target.value);
  }

  const searchFunction = () => {
    api.get(`/${searchPrompt}`)
    .then((response)=>{
      if(response.status === 200){
        console.log(response);
        setInventory(response.data)
      }
      else{
        console.log("no such item");
        setInventory([])
      }
    })
    .catch((error)=>{
      console.log("no such item");
      setInventory([])
    })
  }


  const searchFormHandler = (e) => {
      e.preventDefault()
      console.log(searchPrompt);
      searchFunction()
      setSearchPrompt("")
  }

  return (
    <div className='actionbar-container-manage-inventory'>

        {/* main headline */}
        {/*Search bar*/}
        <div className="search-bar-container">
          <input type="text" className="search-field" placeholder='Search by store keeping unit..' value={searchPrompt} onChange={searchFieldHandler}/>
          <form onSubmit={searchFormHandler}>
              <button type='submit' className="search-btn">
                <ImSearch/>
              </button>
          </form>
        </div>

        {/* data fetching section including buttons*/}
        
        <div className="search-results-section">
            {/* table headings */}
            <div className="inventory-info-item-head">
                  <span className="item-field-head-manage-inventory">Item Name</span>
                  <span className="item-field-head-manage-inventory">SKU ID</span>
                  <span className="item-field-head-manage-inventory">Category</span>
                  <span className="item-field-head-manage-inventory">Manufacturer</span>
                  <span className="item-field-head-manage-inventory">Quantity</span>
                  <span className="item-field-head-manage-inventory">Actions</span>
            </div>
            {/* scrollable section */}
             <div className="search-results-container">
                  {/* display the results */}
                  {inventory.length === 0 ? <>We do not have</> : <ResultContainer inventory={inventory}/>}
            </div>
        </div>
    </div>
  )
}

export default ManageInventoryComponent