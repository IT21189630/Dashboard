import React , {useState} from 'react'
import {ImSearch} from 'react-icons/im'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
import '../../sass/manage-inventory.scss'
import suppliers from '../../data/supplier'


function ManageSupplierComponent() {
  const [inventory , setInventory] = useState(suppliers)
  const [searchPrompt , setSearchPrompt] = useState('')
  const [results , setResults] = useState(inventory)

  const searchFieldHandler = (e) => {
    setSearchPrompt(e.target.value);
  }

  const searchFilter = (word) => {
      const newArr = inventory.filter((singleItem)=>
          singleItem.productName.toLowerCase().startsWith(word)
      )
      console.log(newArr);
      setResults(newArr)
  }


  const searchFormHandler = (e) => {
      e.preventDefault()
      searchFilter(searchPrompt)
      console.log(searchPrompt);
      setSearchPrompt("")
  }

  


  return (
    <div className='actionbar-container-manage-inventory'>

        {/* main headline */}
        {/*Search bar*/}
        <div className="search-bar-container">
          <input type="text" className="search-field" placeholder='Search by supplier name..' value={searchPrompt} onChange={searchFieldHandler}/>
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
                  <span className="item-field-head-manage-inventory">Supplier Name</span>
                  <span className="item-field-head-manage-inventory">Supplier ID</span>
                  <span className="item-field-head-manage-inventory">Category</span>
                  <span className="item-field-head-manage-inventory">Email</span>
                  <span className="item-field-head-manage-inventory">Phone</span>
                  <span className="item-field-head-manage-inventory">Actions</span>
            </div>

            {/* scrollable section */}
            <div className="search-results-container">
                  {/* display the results */}
                  {
                    results.reverse().map((singleItem)=>{

                      const {id , supplierName , supplierID , supplierCategory , email, phone} = singleItem
                      
                      if(results.length > 0){
                         return(
                          <div className="running-short-item" key={id}>
                              <span className="item-field-manage-inventory">{supplierName}</span>
                              <span className="item-field-manage-inventory">{supplierID}</span>
                              <span className="item-field-manage-inventory">{supplierCategory}</span>
                              <span className="item-field-manage-inventory">{email}</span>
                              <span className="item-field-manage-inventory">{phone}</span>
                              <span className="item-field-manage-inventory">
                                <button className="action-btns-manage-inventory">
                                    <BiEdit/>
                                </button>
                                <button className="action-btns-manage-inventory">
                                    <AiFillDelete/>
                                </button>
                              </span>
                          </div>
                        )
                      }
                      else{
                        return(
                          <h1>No results</h1>
                        )
                      }

                     
                    })
                  }
            </div>
        </div>
    </div>
  )
}

export default ManageSupplierComponent