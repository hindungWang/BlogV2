import React, { Component } from 'react';

import '../Blog.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className="has-background">
				<section className="hero is-medium">
					<div className="special-body">
						<div className="container">
							<div className="columns">
								<div className="column">
									<div className="content">
										<div className="columns is-vcentered">
											<div className="column is-7">											
												<p className="beian">桂ICP备xxxx号-1</p>												
												<p className="beian"><span className ="emoji" role ="img" aria-label="heart">✨</span>️but i am still around, yeah i am still around.</p>
												<p className="beian"><span className ="emoji" role ="img" aria-label="heart">😍</span>️路漫漫其修远兮，吾将上下而求索。</p>
												<p className="beian">{`©2018-${new Date().getFullYear()} 显东. All rights reserved.`}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</footer>
		);
	}
}

