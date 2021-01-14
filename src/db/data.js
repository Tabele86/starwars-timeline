const youtube = 'https://www.youtube.com/embed/';
//autoplay= 0 turns off autoplay and rel=0 used to turn off related videos at end now only limits to similar videos from same channel
const autoplay = '?autoplay=0&rel=0';
const url = `https://www.starwars.com/the-high-republic`;

const data = [
	{
		title: 'TBD',
		cardTitle: 'The High Republic',
		media: {
			source: {
				url: `${youtube}_A0N3DE5y8U${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: 'Golden age of the Jedi'
		},
		cardSubtitle: ''
	},
	{
		title: '32 BBY',
		cardTitle: 'Episode 1: The Phantom Menace',
		media: {
			source: {
				url: `${youtube}bD7bpG-zDJQ${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},

		cardDetailedText: ``
	},
	{
		title: '22 BBY',
		cardTitle: 'Episode II: Attack of the Clones',
		media: {
			source: {
				url: `${youtube}gYbW1F_c9eM${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: ``
	},
	{
		title: '22 BBY',
		cardTitle: 'The Clone Wars (movie)',
		media: {
			source: {
				url: `${youtube}hh3P3DoZZh4${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: ``
	},
	{
		title: '22-19 BBY',
		cardTitle: 'The Clone Wars (TV series) ',
		media: {
			source: {
				url: `${youtube}kYeVbVBdbgw${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: ``
	},
	{
		title: '20 BBY',
		cardTitle: 'Darth Maul(Comic)',
		media: {
			source: {
				name: 'Darth Maul',
				url: `https://static.wikia.nocookie.net/starwars/images/6/62/SW_-_Darth_Maul_logo.png`
			},
			type: 'IMAGE'
		},
		cardDetailedText: `4-part marvel comic that bridges season 5 and 7 for Maul's arc.`
	},
	{
		title: '19 BBY',
		cardTitle: 'Episode III: Revenge of the Sith',
		media: {
			source: {
				url: `${youtube}5UnjrG_N8hU${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: ``
	},
	{
		title: '13-10* BBY',
		cardTitle: 'Solo: A Star Wars Story',
		media: {
			source: {
				url: `${youtube}jPEYpryMp2s${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: ``
	},
	{
		title: '5-1 BBY (Epilogue after 4 ABY)',
		cardTitle: 'Star Wars Rebels',
		media: {
			source: {
				url: `${youtube}xg5YN3LAGw4${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: ``
	},
	{
		title: '0 BBY',
		cardTitle: 'Rogue One: A Star Wars Story',
		media: {
			source: {
				url: `${youtube}frdj1zb9sMY${autoplay}`,
				type: 'mp4'
			},
			type: 'VIDEO',
			name: ''
		},
		cardSubtitle: ``
	},
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
		cardSubtitle: ``
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
		cardSubtitle: ``
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
		cardSubtitle: ``
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
		cardSubtitle: ``
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
		cardSubtitle: ``
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
		cardSubtitle: ``
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
		cardSubtitle: ``
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
		cardSubtitle: ``
	}
];

export default data;
