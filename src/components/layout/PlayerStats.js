import React from 'react'

export default function PlayerStats(props) {
  return (props.trigger)?(
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn"> close </button>
        {props.children}
      </div>
    </div>
  ) : "";
}
