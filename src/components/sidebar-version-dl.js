import React, { useState } from 'react'
import SideBarItems from "./SideBarItems-dl"
import { Link } from 'react-router-dom'
import '../sass/dl-sidebar.scss'


import {IoIosArrowForward} from 'react-icons/io'


function SideBar() {

  const[selected , setSelected] = useState(0)
  const[selectedMain , setMain] = useState(0)

  const eventTransformer = (num) => {
      setMain(num)
      setSelected(0)
  }

  return (
    <div className='sidebar-container'>
        {/* brandname modifications central petcare */}
        <div className="brandName">
          <span className='brandFront'>Central</span>PetCare
        </div>
        {/* side menu items container */}
        <div className="side-bar-item-container">
          {SideBarItems.map((item,index)=>{

            const {id , icon , text , nestedFunctions} = item
            
            return(
              <div key={index}>
                <div className="mainFunctionAssets" key={id}>
                    <span className="mainFunction">
                        <span className="functionPrompt">
                          <span className="mainFuncIcon">{icon}</span>
                          <span className="mainFuncItemName">{text}</span>
                          <span className={`scrollFuncIcon ${index === selectedMain && 'scroll-function-show'}`} onClick={()=>{eventTransformer(index)}}>
                              <IoIosArrowForward/>
                          </span>
                        </span>

                        <div className={`nested-function-container${index === selectedMain ? 'cont-show' : ''}`}>
                          {
                          nestedFunctions.map((nestedFunction , index)=>{
                            const {link  , nestedItemicon , nestedItemtext} = nestedFunction

                            return(
                                <Link to={link} className={`side-bar-nested-item ${index === selected && 'active-nested-item'}`} key={index} onClick={()=>setSelected(index)}>
                                    <span className="icon">
                                      {nestedItemicon}
                                    </span>
                                    <span className='item-name'>{nestedItemtext}</span>
                                </Link>
                            )
                          })
                        }
                        </div>
                    </span>
                </div>

                
              </div>
            )
          })}
        </div>

    </div>
  )
}

export default SideBar