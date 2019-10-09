import React from "react";
import moment from "moment";

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="card mb-3">
      <ul className="list-group">
        {notifications &&
          notifications.map(item => {
            return (
              <li key={item.id} className="list-group-item bg-light">
                <div className="d-flex justify-content-between">
                  <span>{item.user}</span>{" "}
                  <span className="text-dark">{item.content}</span>
                </div>

                <div className="text-muted noti-date">
                  {moment(item.time.toDate()).fromNow()}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notification;
