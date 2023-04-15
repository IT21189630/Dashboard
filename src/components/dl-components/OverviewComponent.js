import React, { useState ,useEffect } from 'react'
import api from '../../services/api'
import PrLvMed from './prLvlMedium'
import PrLvHigh from './PrLvlHigh'
import '../../sass/overview-container.scss'
// This is the overview component. all the things related to this component goes here
function OverviewComponent() {

  

  // hooks and other data reading logics
  const [inventory , setInventory] = useState([])

  useEffect(()=>{
    api.get("/").then((response)=>{setInventory(response.data)})
    console.log(inventory);
  },[])

  let pharmCount = 0
  let petItemCount = 0

  inventory.map((singleItem)=>{
    const {category} = singleItem;

    if(category === 'clinical-item'){
      pharmCount++
    }
    else if(category === 'store-item'){
      petItemCount++
    }
  })

  return (
    <div className="main-container">
      {/* this displays how many types of products are currently on the stock */}
        <div className="overall-report-bar">
            <div className="insight-card">
                <img src="PrototypeResources/insight-cards/pharmaceutical.png" alt="" className="insight-card-pic" />
                <div className="insight-card-details">
                  <span className="item-count-displayer">{pharmCount < 10 ? `0${pharmCount}` : pharmCount}</span>
                  <span className="insight-card-title">Pharmaceuticals</span>
                </div>
            </div>

            <div className="insight-card">
                <img src="PrototypeResources/insight-cards/pet-food.png" alt="" className="insight-card-pic" />
                <div className="insight-card-details">
                  <span className="item-count-displayer">{petItemCount < 10 ? `0${petItemCount}` : petItemCount}</span>
                  <span className="insight-card-title">Pet Store Items</span>
                </div>
            </div>

            <div className="insight-card">
                <img src="PrototypeResources/insight-cards/agreement.png" alt="" className="insight-card-pic" />
                <div className="insight-card-details">
                  <span className="item-count-displayer">00</span>
                  <span className="insight-card-title">Suppliers</span>
                </div>
            </div>
        </div>

        {/* Runnnig on short displayer */}
        <div className="row-heading">Limited Availability Items</div>
        <div className="second-row-container">
            <div className="running-short-item-head">
                  <span className="item-field-head">Item Name</span>
                  <span className="item-field-head">SKU</span>
                  <span className="item-field-head">Category</span>
                  <span className="item-field-head">Available Qty.</span>
                  <span className="item-field-head">Priority Level</span>
            </div>
          
            <div className="running-short-container">
                {
                  inventory.reverse().map((singleItem)=>{
                      const {_id, sku , itemName , category , price , rackNo , quantity , manufacturer} = singleItem
                      
                      if(Number(quantity) < 15){
                        return(
                        <div className="running-short-item" key={_id}>
                            <span className="item-field">{itemName}</span>
                            <span className="item-field">{sku}</span>
                            <span className="item-field">{category}</span>
                            <span className="item-field">{quantity}</span>
                            <span className="item-field">{quantity < 8 ? <PrLvHigh/> : <PrLvMed/>}</span>
                        </div>
                      )
                      }
                  }) 
                }
            </div>
        </div>
    </div>
  )
}

export default OverviewComponent