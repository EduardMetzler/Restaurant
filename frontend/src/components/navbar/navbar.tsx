import React, { useEffect } from "react";
import { AppState } from "../../store/model";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLoading, logoutSuccess } from "../../store/auth/auth.actions";
import { UserDaten } from "../../store/auth/auth.model";

interface ConnectedState {
  isAuthenticated: boolean;
  token?: String | null;
  user: UserDaten;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  user: state.auth.user,
});

export const NavbarComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
  token,
  user,
}) => {
  const dispatch = useDispatch();

  if (token && !isAuthenticated) {
    dispatch(userLoading(token));
  }

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo" style={{ marginLeft: "20px" }}>
            Muster
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              {!isAuthenticated ? <Link to="login">Anmelden </Link> : null}
            </li>

            <li>
              {isAuthenticated ? (
                <Link onClick={() => dispatch(logoutSuccess())} to="/">
                  Abmelden{" "}
                </Link>
              ) : null}
            </li>
            <li>
              {!isAuthenticated ? (
                <Link to="register">Registrieren</Link>
              ) : null}
            </li>
            <li>
              {isAuthenticated && user ? (
                <div style={{}}>
                  <Link to="profile"> Hallo {user.firstName} ! </Link>
                </div>
              ) : null}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export const Navbar = connect(mapStateToProps)(NavbarComponent);
