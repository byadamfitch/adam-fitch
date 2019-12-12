import React from 'react';
import styled from 'styled-components';
import { secondsToHms } from '../utility/functions';

const PodcastCard = styled.li`
	line-height: 0;
	display: block;
	padding: 0.8rem;
	margin: 0 -0.8rem;
	a {
		cursor: pointer;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
		border-radius: 0.8rem;
		overflow: hidden;
		background: var(--color-level-background);
		&:hover {
			background-color: var(--color-primary-light);
			.episodeButton {
				background-color: var(--color-level-6);
				color: var(--color-primary-medium);
			}
		}
	}
	&:first-of-type a {
		background-color: var(--color-primary-medium);
		&:hover {
			background-color: var(--color-primary-light);
		}
	}
	@media (max-width: 550px) {
		//text-align: center;
	}
`;

const EpisodeMeta = styled.div`
	padding: 2.4rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	.episodeTitle {
		text-transform: uppercase;
		font-weight: var(--font-weight-bold);
		span {
			opacity: 0.48;
			font-weight: var(--font-weight-normal);
		}
	}
	.episodeButton {
		padding: 0.4rem 0.8rem;
		border-radius: 0.4rem;
	}
	@media (max-width: 550px) {
		flex-direction: column;
		align-items: flex-start;
		.episodeTitle {
			margin-bottom: 0.8rem;
		}
		.episodeButton {
			display: none;
		}
	}
`;
const EpisodeDescription = styled.article`
	padding: 1.2rem 2.4rem;
	h6 {
		margin-bottom: 1.6rem;
	}
	@media (max-width: 550px) {
		padding: 0 2.4rem;
	}
`;

const Podcast = ({
	//creator,
	contentSnippet,
	//content,
	title,
	date,
	dateRel,
	link,
	itunes,
	//enclosure,
	//guid,
	number,
}) => (
	<PodcastCard>
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`Season ${itunes.season}, episode ${itunes.episode}: ${title}`}
		>
			<EpisodeMeta as="header">
				<h4 className="episodeTitle">
						<span>#{itunes.episode}</span> {title}
				</h4>
				<h6>
					{date} {/* ({dateRel}) */}
				</h6>
			</EpisodeMeta>
			<EpisodeDescription>
				<h6>
					Season: {itunes.season} Episode: {itunes.episode}
				</h6>
				<p>{contentSnippet}</p>
			</EpisodeDescription>

			<EpisodeMeta as="footer">
				<h6 className="episodeButton">Play</h6>
				<h6>{secondsToHms(itunes.duration)}</h6>
			</EpisodeMeta>
		</a>
	</PodcastCard>
);

export default Podcast;
