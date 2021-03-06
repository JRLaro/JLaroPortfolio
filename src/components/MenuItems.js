import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolios">
      {menuItem.map((item) => {
        return (
          <>
            <div className="portfolio" key={item.id}>
              <div className="image-data">
                <img src={item.image} alt="" />
                <ul className="hover-items">
                  <li>
                    <a href={item.link1} target="_blank" rel="noreferrer">
                      {item.icon1}
                    </a>

                    <a href={item.link2} target="_blank" rel="noreferrer">
                      {item.icon2}
                    </a>

                    <h5 className="text-center">{item.title}</h5>
                  </li>
                </ul>
              </div>
              {/* <h5 className="text-center">
                            {item.title}
                        </h5> */}
              {/* <h5 className="descript text-dark">{item.description}</h5> */}
            </div>
            {/* {menuItem ? (
              <div>
                <p className="descript" style={{ color: "black" }}>
                  {item.description}
                </p>
              </div>
            ) : null} */}
          </>
        );
      })}
    </div>
  );
}

export default MenuItems;
