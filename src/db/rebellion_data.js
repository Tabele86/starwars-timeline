const youtube = 'https://www.youtube.com/embed/';
//autoplay= 0 turns off autoplay and rel=0 used to turn off related videos at end now only limits to similar videos from same channel
const autoplay = '?autoplay=0&rel=0';
const url = `https://www.starwars.com/the-high-republic`;
const data = [
	{
		title: '0 BBY - 0 ABY',
		cardTitle: 'Episode IV: A New Hope ',
		media: {
			source: {
				url: `${youtube}vZ734NWnAHA${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy.`
	},
	{
		title: '3 ABY',
		cardTitle: 'Episode V: The Empire Strikes Back ',
		media: {
			source: {
				url: `${youtube}JNwNXF9Y6kY${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `The adventure continues in this "Star Wars" sequel. Luke Skywalker (Mark Hamill), Han Solo (Harrison Ford), Princess Leia (Carrie Fisher) and Chewbacca (Peter Mayhew) face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader (David Prowse).`
	},
	{
		title: '4 ABY',
		cardTitle: 'Episode VI: Return of the Jedi ',
		media: {
			source: {
				url: `${youtube}7L8p7_SLzvU${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `Luke Skywalker (Mark Hamill) battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo (Harrison Ford) and Princess Leia (Carrie Fisher) reaffirm their love and team with Chewbacca, Lando Calrissian (Billy Dee Williams), the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor.`
	},
	{
		title: '10 ABY',
		cardTitle: 'The Mandalorian  ',
		media: {
			source: {
				url: `${youtube}aOC8E8z_ifw${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: `After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travels of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic....`
	},
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
