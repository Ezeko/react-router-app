import React from 'react'
import moment from 'moment'

const Notifications = ({notifications}) => {
    return(
        <div className="row pt1">
                
                <div className="col s12">
                <div className="card gray darken-1">
                    <div className="card-content dark-text">
                    <span className="card-title">Notifications</span>
                        <div className='notifications'>
                            <ul>
                            {notifications && notifications.map((notification) => {
                                return (
                                    <li key={notification.id}>
                                        <span className='pink-text'>{notification.name} </span>
                                        <span>{notification.content}</span>
                                        <div className='note-date grey-text'>
                                            {moment(notification.createdAt.toDate()).fromNow()}
                                        </div>
                                    </li>
                                )
                            })}
                            </ul>
                        </div>

                    </div>
                </div>
                </div>
            </div>
    )
}

export default Notifications