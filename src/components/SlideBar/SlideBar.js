import React from "react";
import User from "../../containers/User/User";
import _ from "lodash";
import "./SlideBar.css";

const SlideBar = props => {
  const { contacts, activeUserId } = props;
  return (
    <div className="SlideBar">
      {_.map(contacts, user => {
        return (
          <User
            user={user}
            key={user.user_id}
            hasClicked={user.user_id === activeUserId}
          />
        );
      })}
    </div>
  );
};

export default SlideBar;
