import React from "react";
import SignInModal from "../modals/Signin";
import LogInModal from "../modals/Login";

const Header = props => {
  return (
      <React.Fragment>
        <LogInModal />
        <SignInModal />
      </React.Fragment>
  );
};

export default Header;