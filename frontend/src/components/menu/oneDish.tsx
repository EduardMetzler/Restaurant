import React, { useEffect } from "react";
import { AppState } from "../../store/model";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLoading, logoutSuccess } from "../../store/auth/auth.actions";
import { UserDaten } from "../../store/auth/auth.model";

interface ConnectedState {
  name: String;
  image: string;
  ingredients: String;
  price: String;
}

const mapStateToProps = (state: AppState) => ({
  //   isAuthenticated: state.auth.isAuthenticated,
  //   token: state.auth.token,
  //   user: state.auth.user,
});

export const OneDishComponent: React.FC<ConnectedState> = ({
  name,
  image,
  ingredients,
  price,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="row ">
      <div className="">
        <div className="card col s12 m10 l8  offset-l2 offset-m1  z-depth-4">
          <div className="card-image">
            <img src={image} />
          </div>
          <div className="card-content">
            <p className="card-title">{name}</p>

            <p>{ingredients}</p>
          </div>
          <div className="card-action row">
            <button className="col s3 waves-effect waves-light btn-small">
              Hinzufügen
            </button>
            <span className="col s1 offset-s7">{price}€ </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OneDish = connect(mapStateToProps)(OneDishComponent);
