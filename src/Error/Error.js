
import React from 'react';
import { Link } from 'react-router-dom';

import '../Error.css';
import error from '../404.gif';

export default class Error extends React.Component {
    componentDidMount() {
        document.title = "欢迎降临新日暮里！";
    }
	render(){
		return (
			<div className="Error_container">
                <p className="Error" id="Error_not-found"><strong>404 Oops!</strong> 幻想乡？
                    <br /> 👉 <Link className="Error_btn" to='/blog/2020'>新日暮里</Link>.
                </p>
                <div className="Error_caveman-gif">
                    <img src={error} alt="" />
                </div>
            </div>
		)
	}
}
