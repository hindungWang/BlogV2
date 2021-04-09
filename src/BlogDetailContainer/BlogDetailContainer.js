/* eslint-disable */
import React, { Component, Fragment } from 'react';

import marked from 'marked';
import hljs from 'highlight.js';

import 'highlight.js/styles/ocean.css';

const BlogContent = ({ title, content }) => {
    var markdown = marked(content, {
        gfm: true,
        tables: true,
        breaks: true,
        highlight: function (code, lang) {
            const highlighted = hljs.highlight(lang, code).value;
            return `${highlighted}`;
        },
    });
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
            transparent: true,
            ifHidden: false
        };
    }

    componentDidMount = () => {
        const self = this;
        setTimeout(function () {
            self.setState({
                transparent: false
            });
        }, 0);
        document.body.offsetWidth > 1007 && this.renderTag();
        window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }
    handleResize = (e) => {
        let e_width = e.target.innerWidth;
        this.setState({ ifHidden: e_width > 1023 ? false : true }, () => !this.state.ifHidden && this.renderTag());
        // console.log('浏览器窗口大小改变事件', e.target);
    }
    renderTag = () => {
        let arr = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6'));
        let htmlArr = arr.map((item) => {
            let newItem;
            item.localName === 'h1' ? newItem = `<li><a title='${item.innerText}' href='#${item.id}'>😆${item.innerText}</a></li>` : null;
            item.localName === 'h2' ? newItem = `<ul><li><a title='${item.innerText}' href='#${item.id}'>😆${item.innerText}</a></li></ul>` : null;
            item.localName === 'h3' ? newItem = `<ul><ul><li><a title='${item.innerText}' href='#${item.id}'>🤣${item.innerText}</a></li></ul></ul>` : null;
            item.localName === 'h4' ? newItem = `<ul><ul><ul><li><a title='${item.innerText}' href='#${item.id}'>😉${item.innerText}</a></li></ul></ul></ul>` : null;
            return newItem;
        });
        htmlArr.shift();
        let html = htmlArr.join('');
        document.getElementById('blog-tag').innerHTML = html;
    }

    render() {
        const { title, content } = this.props;
        const { transparent, ifHidden } = this.state;
        return (
            <div style={{ display: 'flex', width: '100%' }}>
                {!ifHidden && <div id="blog-tag" style={{ width: '20%' }}></div>}
                <div className={`content is-medium is-blog blog-alpha detail-alpha-zero`} style={{ opacity: transparent ? 0 : 1, width: ifHidden ? '100%' : '80%' }}>
                    <BlogContent title={title} content={content} />
                </div>
            </div>
        );
    }
}