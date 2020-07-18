import React, { Component } from 'react';

import NavLinkItem from '../NavLinkItem/NavLinkItem';

export default class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    link: `/`,
                    title: `家`
                },
                {
                    link: `/blog/`+ new Date().getFullYear(),
                    title: `部落格`
                },
                {
                    link: `/blog/archive`,
                    title: `大海`
                }
            ]
        }
    }

    render() {
        const { links } = this.state;
        const { selectedIndex } = this.props;
        return (
            links.map((link, index)=> (<NavLinkItem key={index} currentIndex={index} selectedIndex={selectedIndex} link={link.link} title={link.title} />))
        );
    }
}