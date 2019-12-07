import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { secondsToHms } from '../utility/functions';

const PodcastCard = styled.li`
	line-height: 0;
	display: inline-block;
	padding: 0.8rem;
	a {
		border-radius: 0.8rem;
		overflow: hidden;
		background: var(--color-level-background);
		.episodeHeader,
		.episodeFooter,
		.episodeSnippet {
			padding: 2.4rem;
		}
		.episodeHeader,
		.episodeFooter {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
		.episodeHeader {
			span {
				font-weight: var(--font-weight-normal);
				opacity: 0.5;
			}
		}
		.episodeFooter {
		}
		.episodeSnippet {
			padding-top: 0;
			padding-bottom: 0;
		}
	}
	&:first-of-type a {
		background-color: var(--color-primary-medium);
	}
`;

const Podcast = ({
	creator,
	contentSnippet,
	content,
	title,
	date,
	dateRel,
	link,
	itunes,
	//enclosure,
	guid,
	number,
}) => (
	<PodcastCard>
		<a href={link} target="_blank">
			<div className="episodeHeader">
				<h4>
					<span>#{number}</span> {title}
				</h4>
				<h6>{secondsToHms(itunes.duration)}</h6>
			</div>
			<div className="episodeSnippet">
				<p>{contentSnippet}</p>
			</div>

			<div className="episodeFooter">
				<h6>
					Season: {itunes.season}, Episode: {itunes.episode}.
				</h6>
				<h6>
					{date} ({dateRel})
				</h6>
			</div>
		</a>
	</PodcastCard>
);

export default Podcast;
