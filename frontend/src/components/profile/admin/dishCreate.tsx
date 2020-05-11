import React, { useState, useEffect } from "react";
import { AppState } from "../../../store/model";
import { connect, useDispatch } from "react-redux";
import { UserListeDaten } from "../../../store/admin/admin.model";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Select from "react-select";
import M from "materialize-css";
import { bufferToggle } from "rxjs/operators";
import {
  dishUploadImage,
  newDishAdd,
} from "../../../store/admin/admin.actions";
// type AdminSerarhFunktion = (item: any) => void;

interface ConnectedState {
  isLoading: boolean;
  uploadedImage?: string;
  //   adminSerarhFunktion: AdminSerarhFunktion;
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.admin.isLoading,
  uploadedImage: state.admin.uploadedImages,
});

export const DishCreateComponent: React.FC<ConnectedState> = ({
  isLoading,
  uploadedImage,
}) => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    console.log(name, ingredients, uploadedImage);
    dispatch(newDishAdd(name, ingredients, uploadedImage));
    event.preventDefault();
  };

  const handleUploadImage = (e: any) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Restaurant");
    dispatch(dishUploadImage(data));
  };

  const checkData = () => {
    if (
      name.length < 1 ||
      ingredients.length < 1 ||
      isLoading ||
      uploadedImage === ""
    ) {
      return "btn disabled";
    }
    return "btn";
  };
  return (
    <div className="row login-container">
      <div className="col m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
        <div className="card">
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Zutaten
                <textarea
                  //  rows="10"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </label>
              <label>
                Image:
                <input type="file" onChange={handleUploadImage} name="file" />
                {isLoading ? (
                  <h3>Loading...</h3>
                ) : (
                  <img
                    // src={uploadedImage && uploadedImage[0]}
                    src={uploadedImage}
                    style={{ width: "300px" }}
                  ></img>
                )}
              </label>
              <input type="submit" value="Erstellen" className={checkData()} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DishCreate = connect(mapStateToProps)(DishCreateComponent);
