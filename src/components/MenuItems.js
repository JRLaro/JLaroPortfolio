import React from 'react'

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
                                    <a href={item.link1} target="_blank">{item.icon1}</a>
                                    <a href={item.link2} target="_blank">{item.icon2}</a>
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