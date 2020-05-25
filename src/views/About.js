import React from 'react';
import Card from 'react-bootstrap/Card';
import whitepaperPdf from '../images/whitepaper.pdf';
import embeddingJpg from '../images/about1.jpg';
import filteringJpg from '../images/about2.jpg';
import chainsPng from '../images/about3.png';

function About() {
	return (
		<Card style={{ maxWidth: '800px', margin: '20px', alignSelf: 'center' }}>
			<Card.Body>
				<Card.Title style={{ fontWeight: 'bold' }}>What the platform does now:</Card.Title>
				<Card.Text>
					We have 41 premade "Atoms" - cards that each contain a short summary of a self-contained event or a trend. At the
					moment, we're testing the functionality of importing these cards into <b>Roam Research</b>.
				</Card.Text>
				<Card.Title style={{ fontWeight: 'bold' }}>What we’re working towards:</Card.Title>
				<Card.Text>
					The goal is to create a repository for primary and secondary source data formatted as small easy to consume cards,
					and have them shareable anywhere on the internet.
				</Card.Text>
				<Card.Text>
					Going forward, you'd be able to <b>create your own Atoms</b> to share with the world - through note taking apps,
					personal blogs, etc.
				</Card.Text>
				<Card.Img src={embeddingJpg} style={{ marginBottom: '30px' }} />
				<Card.Text>
					You'll be able to <b>filter the Atoms</b> by tags, dates and most importantly, sources. This will make it easier to
					find precisely the info you're looking for.
				</Card.Text>
				<Card.Img src={filteringJpg} style={{ marginBottom: '30px' }} />
				<Card.Text>
					In addition, you can create <b>Chains</b>. Chains are constructed by linking Atoms together. Atoms are building
					blocks which can stand on their own or can be used as part of a larger construction, potentially revealing novel
					insights.
				</Card.Text>
				<Card.Img src={chainsPng} style={{ marginBottom: '30px' }} />
				<Card.Text>The most interesting Atoms and Chains get upvoted and rise to the top of your feed.</Card.Text>
				<Card.Text> Of course, how / if these features get developed depends entirely on community interest!</Card.Text>
				<Card.Link href={whitepaperPdf} style={{ fontWeight: 'bold' }}>
					For more details read the most recent draft of our white paper.
				</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default About;
