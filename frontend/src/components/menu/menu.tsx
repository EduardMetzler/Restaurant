import React, { useState, useEffect } from "react";
import { AppState } from "../../store/model";

import { connect, useDispatch } from "react-redux";
import { menuLoad } from "../../store/menu/menu.actions";
import { Dish } from "../../store/menu/menu.model";
import { OneDish } from "./oneDish";
import { map } from "rxjs/operators";

interface ConnectedState {
  menu: Dish[];
}

const mapStateToProps = (state: AppState) => ({
  menu: state.menu.allDishs,
});

export const MenuComponent: React.FC<ConnectedState> = ({ menu }) => {
  const dispatch = useDispatch();
  if (menu.length === 0) {
    dispatch(menuLoad());
  }

  return (
    <div>
      <h4 className="center-align">Menü</h4>
      {menu.map((dish, index) => (
        <div key={index}>
          <OneDish
            name={dish.name}
            image={dish.image}
            ingredients={dish.ingredients}
            price={dish.price}
          />
        </div>
      ))}
    </div>
    // <div>
    //   {menu.map((dish, index) => (
    //     <div key={index}>
    //       <div className="row">
    //         <div className="col s12 m10 l8  offset-l2 offset-m1">
    //           <div className="card">
    //             <div className="card-image">
    //               <img src={dish.image}></img>

    //             </div>
    //             <div className="card-content">
    //               <p className="card-title">{dish.name}</p>

    //               <p>{dish.ingredients}</p>
    //             </div>
    //             <div className="card-action row">
    //               <button
    //                 className="col s3 waves-effect waves-light btn-small"
    //                 onClick={() => console.log(dish)}
    //               >
    //                 Hinzufügen
    //               </button>
    //               <span className="col s1 offset-s8">{dish.price}</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export const Menu = connect(mapStateToProps)(MenuComponent);
