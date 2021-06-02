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
    componentDidMount(){
        new LazyLoad({
            elements_selector: ".lazy"
        });
    }

    render() {
        const { year, number, title, date_time, summary } = this.props;
        //let index = Math.floor((Math.random()*3));
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
            <div className="column is-6 is-4-widescreen is-flex shuffle-item shuffle-item--visible" style={{ width: `${newWidth}%` }}>
                <Card year={year} number={number} title={title} date_time={date_time} summary={summary} />
            </div>
        );
    }
}
