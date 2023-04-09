import React from 'react'
import '../../sass/add-item.scss'

function AddItemComponent() {
  return (
    <div className='main-container-add-item'>
      <form className="add-item-form-container">
        <div className="form-heading-add-item">
          Add Item
        </div>
        {/* this is the first column */}
        <div className="form-column">
          {/* product Name */}
            <div className="input-set">
              <label className="label-style">Product Name</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* product ID */}
            <div className="input-set">
              <label className="label-style">Product ID</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* category */}
            <div className="input-set">
              <label className="label-style">Category</label>
              <select className="dropdown-style">
                  <option value="Clinical Item">Clinical Item</option>
                  <option value="Pet Essential">Pet Product</option>
              </select>
            </div>
            {/* Product description */}
            <div className="input-set">
              <label className="label-style">Product Description</label>
              <textarea name="" id="" className='textarea-style'></textarea>
            </div>
        </div>
        {/* this is the second column */}
        <div className="form-column">
            {/* Quantity */}
            <div className="input-set">
              <label className="label-style">Product Quantity</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* manufacturer */}
            <div className="input-set">
              <label className="label-style">Manufacturer</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* image */}
            <div className="input-set">
              <label className="label-style">Product Image</label>
              <input type="file" className="input-file-style" />
            </div>
        </div>
        <div className="add-btn-container">
              <button className="add" type='submit'>Add</button>
              <button className="reset" type='reset'>Reset</button>
        </div>
      </form>
      <div className="data-reader">

      </div>
    </div>
  )
}

export default AddItemComponent