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
												<p className="beian"><span className ="emoji" role ="img" aria-label="heart">✨</span>️But i am still around, yeah i am still around.</p>
												<p className="beian"><span className ="emoji" role ="img" aria-label="heart">🤩</span>️路漫漫其修远兮，吾将上下而求索。</p>
												<p className="beian">{`CopyRight. 2020-${new Date().getFullYear()} 显东. All rights reserved.`}</p>
												<p className="beian"><span className ="emoji" role ="img" aria-label="heart"></span><a className="beian" href="http://www.beian.miit.gov.cn">桂ICP备20006258号</a>	</p>
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

