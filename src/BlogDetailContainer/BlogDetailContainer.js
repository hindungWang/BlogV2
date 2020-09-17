/* eslint-disable */
import React, { Component, Fragment } from 'react';

import marked from 'marked';
import hljs from 'highlight.js';

import 'highlight.js/styles/ocean.css';

const BlogContent = ({title, content}) => {
    var markdown = marked(content, {
        gfm: true,
        tables: true,
        breaks: true,
        highlight: function(code, lang) {
            const highlighted = hljs.highlight(lang, code).value;
            return `${highlighted}`;
          },
    });
    console.log(markdown);
    return (
        <Fragment>
            <h1 className={`title is-spaced`}>{title}</h1>
            <div className={`section-body`}>
                <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
            </div>
        </Fragment>
    )
}

export default class BlogDetailContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transparent: true
        };
    }

    componentDidMount = () => {
        const self = this;
        setTimeout(function() {
            self.setState({
                transparent: false
            });
        }, 0);
        this.renderTag();
    }
    renderTag = () => {
        let arr = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
        let htmlArr = arr.map((item)=>{
            let newItem;
            item.localName === 'h1' ? newItem = `<li><a title='${item.innerText}' href='#${item.innerText}'>${item.innerText}</a></li>` : null;
            item.localName === 'h2' ? newItem = `<ul><li><a title='${item.innerText}' href='#${item.innerText}'>${item.innerText}</a></li></ul>` : null;
            item.localName === 'h3' ? newItem = `<ul><ul><li><a title='${item.innerText}' href='#${item.innerText}'>${item.innerText}</a></li></ul></ul>` : null;
            item.localName === 'h4' ? newItem = `<ul><ul><ul><li><a title='${item.innerText}' href='#${item.innerText}'>${item.innerText}</a></li></ul></ul></ul>` : null;
            return newItem;
        });
        htmlArr.shift();
        let html = htmlArr.join('');
        document.getElementById('blog-tag').innerHTML = html;
    }

    render() {
        const {title, content} = this.props;
        const {transparent} = this.state;
        return (
            <div className={`content is-medium is-blog blog-alpha detail-alpha-zero`} style={{opacity: transparent ? 0 : 1}}>
                <div id="blog-tag"></div>
                <BlogContent title={title} content={content} />
            </div>
        );
    }
}