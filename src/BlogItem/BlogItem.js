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

export default class BlogItem extends Component {
    componentDidMount(){
        new LazyLoad({
            elements_selector: ".lazy"
        });
    }

    render() {
        const { year, number, title, date_time, summary } = this.props;
        // let arr = [1/3, 2/3];
        // let index = Math.floor((Math.random()*2));
        // let newWidth = arr[index] * 100;
        return (
            <div className="column is-6 is-4-widescreen is-flex shuffle-item shuffle-item--visible" style={{ width: `${80}%` }}>
                <Card year={year} number={number} title={title} date_time={date_time} summary={summary} />
            </div>
        );
    }
}
