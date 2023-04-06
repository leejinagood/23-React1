import React from 'react';
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "hi",
    },
    {
        id: 2,
        message: "hi",
    }
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            notifications: [],
        };
    }

    componentDidMount(){
        const { notifications } = this.state;
        timer = setInterval(()=> {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }else{
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }
}
export default NotificationList;