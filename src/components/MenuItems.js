import React from 'react'
import {Link} from 'react-router-dom'

function MenuItems({menuItem}) {
    return (
        <div className="portfolios">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <Link to={item.link1} target="_blank">{item.icon1}</Link>
                                    <Link to={item.link2} target="_blank">{item.icon2}</Link>
                                    <h5 className="text-center">
                            {item.title}
                        </h5>
                                </li>
                            </ul>
                        </div>
                        {/* <h5 className="text-center">
                            {item.title}
                        </h5> */}
                        <p className="descript">{item.description}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;