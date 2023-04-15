import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
export default function itemSearchResultsContainer(props) {

    const {inventory} = props

  return (
    <div>
            {
                    inventory.reverse().map((singleItem)=>{

                      const {_id , itemName , sku , category , manufacturer, quantity} = singleItem
                      
                      if(inventory.length > 0){
                         return(
                          <div className="running-short-item" key={_id}>
                              <span className="item-field-manage-inventory">{itemName}</span>
                              <span className="item-field-manage-inventory">{sku}</span>
                              <span className="item-field-manage-inventory">{category}</span>
                              <span className="item-field-manage-inventory">{manufacturer}</span>
                              <span className="item-field-manage-inventory">{quantity}</span>
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
                    })
                  }
    </div>
  )
}
