import React, { useState } from 'react'
import items from '../../data/items'

import '../../sass/overview-container.scss'
// This is the overview component. all the things related to this component goes here
function OverviewComponent() {

  // hooks and other data reading logics
  const [inventory , setInventory] = useState(items)

  

  console.log(inventory);

  return (
    <div className="main-container">
      {/* this displays how many types of products are currently on the stock */}
        <div className="overall-report-bar">
            <div className="insight-card">
                <img src="PrototypeResources/insight-cards/pharmaceutical.png" alt="" className="insight-card-pic" />
                <div className="insight-card-details">
                  <span className="item-count-displayer">{inventory.length}</span>
                  <span className="insight-card-title">Pharmaceuticals</span>
                </div>
            </div>

            <div className="insight-card">
                <img src="PrototypeResources/insight-cards/pet-food.png" alt="" className="insight-card-pic" />
                <div className="insight-card-details">
                  <span className="item-count-displayer">00</span>
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
                  <span className="item-field-head">Product Name</span>
                  <span className="item-field-head">Product ID</span>
                  <span className="item-field-head">Category</span>
                  <span className="item-field-head">Available Qty.</span>
                  <span className="item-field-head">Priority Level</span>
            </div>
          
            <div className="running-short-container">
                {
                  items.reverse().map((singleItem)=>{
                      const {id , productName , productID , qty , category} = singleItem
                      
                      if(Number(qty) < 15){
                        return(
                        <div className="running-short-item" key={id}>
                            <span className="item-field">{productName}</span>
                            <span className="item-field">{productID}</span>
                            <span className="item-field">{category}</span>
                            <span className="item-field">{qty}</span>
                            <span className="item-field">Unknown</span>
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