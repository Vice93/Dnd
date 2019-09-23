import React, {Component} from "react";
import {Icon} from "@material-ui/core";
import {Face} from "@material-ui/icons";

//Temp Password Reset...
export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="login-container">
                <Icon>
                    <Face/>
                </Icon>
            </div>
        )
    }
}