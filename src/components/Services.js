import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktails',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam'
			},
			{
				icon: <FaHiking />,
				title: 'Endless Hiking',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam'
			},
			{
				icon: <FaShuttleVan />,
				title: 'free shuttle',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam'
			},
			{
				icon: <FaBeer />,
				title: 'sweetest wine',
				info:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam'
			}
		]
	};
	render() {
		return (
			<section className='services'>
				<Title title='services' />
				<div className='services-center'>
					{this.state.services.map((item, i) => {
						return (
							<article key={i} className='service'>
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
