const youtube = 'https://www.youtube.com/embed/';
//autoplay= 0 turns off autoplay and rel=0 used to turn off related videos at end now only limits to similar videos from same channel
const autoplay = '?autoplay=0&rel=0';
const url = `https://www.starwars.com/the-high-republic`;

const data = [
	{
		title: '34 ABY',
		cardTitle: 'Star Wars Resistance ',
		media: {
			source: {
				url: `${youtube}bH_Ws7sA468${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `Star Wars Resistance is an American 3D animated science fiction television series produced by Lucasfilm Animation. The series uses a cel-shaded look. It follows Kazuda Xiono, a New Republic pilot who is recruited by the Resistance to spy on the growing threat of the First Order[2] shortly before and during the events of the sequel trilogy.`
	},
	{
		title: '34 ABY',
		cardTitle: 'Episode VII: The Force Awakens',
		media: {
			source: {
				url: `${youtube}sGbxmsDFVnE${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `Thirty years after the defeat of the Galactic Empire, Han Solo (Harrison Ford) and his young allies face a new threat from the evil Kylo Ren (Adam Driver) and the First Order.`
	},
	{
		title: '34 ABY',
		cardTitle: 'Episode VIII: The Last Jedi ',
		media: {
			source: {
				url: `${youtube}Q0CbN8sfihY${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `Luke Skywalker's peaceful and solitary existence gets upended when he encounters Rey, a young woman who shows strong signs of the Force. Her desire to learn the ways of the Jedi forces Luke to make a decision that changes their lives forever. Meanwhile, Kylo Ren and General Hux lead the First Order in an all-out assault against Leia and the Resistance for supremacy of the galaxy.`
	},
	{
		title: '35* ABY',
		cardTitle: 'Episode IX: The Rise of Skywalker ',
		media: {
			source: {
				url: `${youtube}8Qn_spdM5Zg${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts. Finn and Poe lead the Resistance to put a stop to the First Order's plans to form a new Empire, while Rey anticipates her inevitable confrontation with Kylo Ren. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers.`
	}
];

export default data;
