import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

import App from './App';
import Blog from './Blog/Blog';
import BlogPage from './BlogPage/BlogPage';
import BlogArchive from './BlogArchive/BlogArchive';
import AppBlogDetail from './AppBlogDetail/AppBlogDetail';
import ErrorPage from './Error/Error';
import WebFont from 'webfontloader';

function generateYearList(length) {
    return Array.from({ length: length }, (v, i) => `${i + 2020}`);
}

const currentYear = new Date().getFullYear();
const i = currentYear - 2019;
const list = generateYearList(i);
const years = list.join('|');

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path={`/blog/:year(${years})`} component={Blog} />
            <Route exact path={`/blog/:year(${years})/:id`} component={BlogPage} />
            <Route exact path={`/blog/Docker`} component={Blog} />
            <Route exact path={`/blog/Go`} component={Blog} />
            <Route exact path={`/blog/Gin`} component={Blog} />
            <Route exact path={`/blog/Network`} component={Blog} />
            <Route exact path={`/blog/:Go/:id`} component={BlogPage} />
            <Route exact path={`/blog/:Gin/:id`} component={BlogPage} />
            <Route exact path={`/blog/:Docker/:id`} component={BlogPage} />
            <Route exact path={`/blog/:Network/:id`} component={BlogPage} />
            <Route exact path={`/blog/:kind/:id`} component={BlogPage} />
            <Route exact path="/blog/archive" component={BlogArchive} />
            <Route exact path={`/blog/archive/:year(${years})/:id`} component={BlogPage} />
            <Route exact path="/blog/app/:id" component={AppBlogDetail} />
            <Route component={ErrorPage} />
        </Switch>
    </Router>
), document.getElementById('root'));

WebFont.load({
    custom: {
      families: ['1essfont'],
      urls: [
        '/font/font.css',
      ]
    },
    timeout: 5000,
    fontactive: function(familyName, fvd) {
        console.warn(familyName);
    },
  });

function getMultiLine(lines) {
    lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
    return lines;
}

var slogan =
`/*
人来人往。
*/`
var style = [
    'color: #a0a0a0',
    'font-size: 18px',
].join(';');
window.console.log('%c%s', style, getMultiLine(slogan));
