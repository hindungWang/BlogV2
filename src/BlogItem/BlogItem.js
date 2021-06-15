import React, { Component } from 'react';
import LazyLoad from "vanilla-lazyload";
import {Link} from 'react-router-dom';

import '../App.css';
import '../Blog.css';

const CardBody = ({year, number, title, date_time, summary}) => (
    <div className="card-body">
        <Link to={`/blog/${year}/${number}`}>
            <div className="card-title"> {title} </div>
        </Link>
        <div className="card-meta"> {date_time} </div>
        <div className="card-description">
            <p> {summary} </p>
        </div>
    </div>
)

const CardFooter = ({year, number}) => (
    <div className="card-footer">
        <Link className="button is-primary is-outlined" to={`/blog/${year}/${number}`}> 阅读 </Link>
    </div>
)

const Card = ({year, number, title, date_time, summary}) => (
    <div className={`card is-storyworld`}>
        <CardBody year={year} number={number} title={title} date_time={date_time} summary={summary} />
        <CardFooter year={year} number={number} />
    </div>
)

let arr = [30, 40, 100];
let sum = 0;

export default class BlogItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transparent: true,
            ifHidden: false
        };
    }

    componentDidMount = () => {
        new LazyLoad({
            elements_selector: ".lazy"
        });
        const self = this;
        setTimeout(function () {
            self.setState({
                transparent: false
            });
        }, 0);
        document.body.offsetWidth > 1007 && this.render();
        window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }
    handleResize = (e) => {
        let e_width = e.target.innerWidth;
        this.setState({ ifHidden: e_width > 1023 ? false : true }, () => !this.state.ifHidden && this.render());
        // console.log('浏览器窗口大小改变事件', e.target);
    }

    render() {
        const { year, number, title, date_time, summary } = this.props;
        const { transparent, ifHidden } = this.state;
        let newWidth = 0;

        //console.log("title: "+ summary + "len: " + )
        if (summary.length <= 20){
            newWidth = 20;
        } else if (summary.length <= 60) {
            newWidth = 40;
        } else {
            newWidth = 100;
        }

        return (
            <div className="column is-6 is-4-widescreen is-flex shuffle-item shuffle-item--visible" 
            style={{ opacity: transparent ? 0 : 1, width: ifHidden ? '100%' : `${newWidth}%` }}>
                <Card year={year} number={number} title={title} date_time={date_time} summary={summary} />
            </div>
        );
    }
}
