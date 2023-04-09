import React, { useState } from 'react'
import '../../sass/add-supplier.scss'
import supplier from '../../data/supplier'

function AddSupplier() {

  const [suppliers , setSuppliers] = useState(supplier)

  return (
    <div className='main-container-add-supplier'>
      <form className="add-supplier-form-container">
        <div className="form-heading-add-supplier">
          Add Supplier
        </div>
        {/* this is the first column */}
        <div className="form-column-add-supplier">
          {/* supplier Name */}
            <div className="input-set">
              <label className="label-style">Supplier Name</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* supplier ID */}
            <div className="input-set">
              <label className="label-style">Supplier ID</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* item category */}
            <div className="input-set">
              <label className="label-style">Supplier Category</label>
              <select className="dropdown-style">
                  <option value="Clinical Item">Clinical Item Supplier</option>
                  <option value="Pet Essential">Pet Item Supplier</option>
              </select>
            </div>
            {/* item category */}
            <div className="input-set">
              <label className="label-style">Gender</label>
              <select className="dropdown-style">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
              </select>
            </div>
            {/* address*/}
            <div className="input-set">
              <label className="label-style">Province</label>
              <input type="text" className="input-field-style" />
            </div>

            <div className="input-set">
              <label className="label-style">City</label>
              <input type="text" className="input-field-style" />
            </div>

            <div className="input-set">
              <label className="label-style">House</label>
              <input type="text" className="input-field-style" />
            </div>
        </div>
        {/* this is the second column */}
        <div className="form-column-add-supplier">
            {/* contact number */}
            <div className="input-set">
              <label className="label-style">Contact Number</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* email address */}
            <div className="input-set">
              <label className="label-style">Email Address</label>
              <input type="text" className="input-field-style" />
            </div>
            {/* organization */}
            <div className="input-set">
              <label className="label-style">Company</label>
              <input type="text" className="input-field-style" />
            </div>
        </div>
        <div className="add-supplier-btn-container">
              <button className="add" type='submit'>Add</button>
              <button className="reset" type='reset'>Reset</button>
        </div>
      </form>
      
      {/* <div className="container">
      <div className="recently-added-suppliers">Recently added suppliers</div>
      <div className="supplier-details-data-reader">
          {
            suppliers.map((person)=> {
              const {id , supplierName , supplierID , category , gender , province , city , house , phone , email , organization , regDate} = person
              return (
                <div className="singleSupplierDetails" key={id}>
                    <div><span>Name:</span>{supplierName}</div>
                    <div><span>ID:</span>{supplierID}</div>
                    <div><span>Category:</span>{category}</div>
                    <div><span>Gender:</span>{gender}</div>
                    <div><span>Address:</span>{house},{city},{province}</div>
                    <div><span>Phone:</span>{phone}</div>
                    <div><span>Name:</span>{email}</div>
                    <div><span>Name:</span>{organization}</div>
                    <div><span>Name:</span>{regDate}</div>
                </div>
              )
            })
          }
      </div>
      </div> */}

    </div>
  )
}

export default AddSupplier