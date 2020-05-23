import React from 'react';
import whitepaperPdf from '../images/whitepaper.pdf';

function About() {
	return (
		<div>
			<p>
				<b>What the platform does now: </b>
			</p>
			<p>
				We have 50 premade Event Cards — each containing a short summary of a self-contained event or a trend. At the moment,
				we’re testing the functionality of importing these cards into Roam Research.
			</p>
			<br />
			<p>
				<b>What we’re working towards:</b>
			</p>
			<p>
				The goal is to create a repository for primary and secondary source data formatted as small easy to consume cards,
				and have them shareable anywhere on the internet.{' '}
			</p>
			<p>
				Going forward, you’d be able to <b>create your own Event Cards</b> to share with the world — note taking apps,
				personal blogs, you name it.
			</p>
			<p>
				You’ll also be able to <b>filter the cards</b> that you see based on what source they’re from. We all have sources we
				trust, and sources we don’t. Having the ability to filter Event Cards by the source they originate from might be
				super valuable. Of course, users will always be encouraged to seek a variety of perspectives.
			</p>
			<p>
				In addition, you can create <b>Chains</b>. Chains are constructed by linking Event Cards together. You can think of
				this like Lego for news. Events Cards are building blocks which can stand on their own or can be used as part of a
				larger construction, potentially revealing novel insights.
			</p>
			<p>The most interesting / insightful / popular Event Cards and Chains get upvoted and rise to the top of your feed.</p>
			<p>
				There would be a quality control system in place, formed by members of the community, to ensure the integrity of
				information. Their job would not be to censor information, but to ensure that each piece of information has a source
				and is represented as accurately as possible.
			</p>
			<p>Of course, how / if these features get developed depends entirely on community interest!</p>
			<p>
				<b>
					<a href={whitepaperPdf}>For more details read the most recent draft of our white paper.</a>
				</b>
			</p>
		</div>
	);
}

export default About;
