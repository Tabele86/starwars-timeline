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
		cardSubtitle: 'A new adventure begins 2021.'
	},
	{
		title: '32 BBY',
		cardTitle: 'Episode 1: The Phantom Menace',
		media: {
			source: {
				url: `https://cbsnews1.cbsistatic.com/hub/i/r/2015/12/12/c8a850b2-5b9b-468e-b79c-de0ea45fd963/thumbnail/640x957/c1224121742fe3ea9d80acce8928ba30/phantom-menace-a.jpg`
				// url: `${youtube}bD7bpG-zDJQ${autoplay}`,
				// type: 'mp4'
			},
			type: 'IMAGE',
			name: ''
		},

		cardDetailedText: `Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.`
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
		cardSubtitle: `Set ten years after the events of "The Phantom Menace," the Republic continues to be mired in strife and chaos. A separatist movement encompassing hundreds of planets and powerful corporate alliances poses new threats to the galaxy that even the Jedi cannot stem. These moves, long planned by an as yet unrevealed and powerful force, lead to the beginning of the Clone Wars -- and the beginning of the end of the Republic.`
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
		cardSubtitle: `As more star systems get swept into the Clone Wars, the valiant Jedi knights struggle to maintain order. Anakin Skywalker and his Padawan learner Ahsoka Tano embark on a mission that brings them face-to-face with Jabba the Hutt. Plotting against them is evil Count Dooku and his agent, Asajj Ventress, who would ensure that the Jedis fail. Meanwhile, Yoda and Obi-Wan Kenobi lead the clone army against the forces of the Dark Side.`
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
		cardSubtitle: `The show follows the actions of various characters from the Star Wars prequel trilogy, notably Jedi and clone troopers, in their war against the battle droid armies of the Confederacy of Independent Systems and the Sith. The series is notable for introducing Revenge of the Sith villain General Grievous.`
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
		cardSubtitle: `It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi (Ewan McGregor) and Jedi Knight Anakin Skywalker (Hayden Christensen) rescue Chancellor Palpatine (Ian McDiarmid) from General Grievous, the commander of the droid armies, but Grievous escapes. Suspicions are raised within the Jedi Council concerning Chancellor Palpatine, with whom Anakin has formed a bond. Asked to spy on the chancellor, and full of bitterness toward the Jedi Council, Anakin embraces the Dark Side.`
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
		cardSubtitle: `Young Han Solo finds adventure when he joins forces with a gang of galactic smugglers and a 190-year-old Wookie named Chewbacca. Indebted to the gangster Dryden Vos, the crew devises a daring plan to travel to the mining planet Kessel to steal a batch of valuable coaxium. In need of a fast ship, Solo meets Lando Calrissian, the suave owner of the perfect vessel for the dangerous mission -- the Millennium Falcon.`
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
		cardSubtitle: `Fourteen years after the fall of the Galactic Republic and the Jedi Order and the rise of the Galactic Empire depicted in Revenge of the Sith,[10] a motley group of rebels unite aboard a freighter starship called the Ghost and begin to conduct covert operations against the Imperial garrison on and around the planet Lothal and other planets that are menaced by the Empire.`
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
		cardSubtitle: `Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance.`
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
