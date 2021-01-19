const bp = '◾';

const data = [
	{
		title: '32 BBY',
		cardTitle: 'Episode 1: The Phantom Menace (32 BBY)',
		media: {
			source: {
				url: `/img/ep1_750.jpg`
				// url: `https://images.squarespace-cdn.com/content/v1/58ff64272e69cf8f337d1927/1578518679515-B7WEXZOGY12ZOFNQW72U/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/Star_Wars_Phantom_Menace_1.jpg?format=750w`
			},
			type: 'IMAGE',
			name: ''
		},

		cardDetailedText: `Obi-Wan Kenobi (Ewan McGregor) is a young apprentice Jedi knight under the tutelage of Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), who will later father Luke Skywalker and become known as Darth Vader, is just a 9-year-old boy. When the Trade Federation cuts off all routes to the planet Naboo, Qui-Gon and Obi-Wan are assigned to settle the matter.
		
		Obi-Wan Kenobi, Anakin Skywalker, C-3PO and R2-D2 are introduced chronologically for the first time.`,
		cardSubtitle: `
		◾The existence of the Sith is revealed.

${bp}Darth Maul dies (or does he...?)

${bp}Palpatine becomes the Supreme Chancellor of the Galactic Republic.`
	},
	{
		title: '22 BBY',
		cardTitle: 'Episode II: Attack of the Clones (22 BBY)',
		media: {
			source: {
				url: `/img/ep2.jpg`
				// url: `https://2.bp.blogspot.com/-a9nx3ANMxwo/Vlo7XJNEv_I/AAAAAAAAMT4/WeHRfx9g5So/w1200-h630-p-k-no-nu/Attack%2Bof%2Bthe%2BClones.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardDetailedText: `Set ten years after the events of "The Phantom Menace," the Republic continues to be mired in strife and chaos. A separatist movement encompassing hundreds of planets and powerful corporate alliances poses new threats to the galaxy that even the Jedi cannot stem. These moves, long planned by an as yet unrevealed and powerful force, lead to the beginning of the Clone Wars -- and the beginning of the end of the Republic.`,
		cardSubtitle: ` 
		${bp}Padmé and Anakin are married in secret.
		
		${bp}Anakin's mum Shmi is murdered and he takes dark side-y revenge on her killers.

		${bp}The Clone army is created.

		${bp}The Clone Wars kick off between the Republic and the Separatist planets.

		${bp}Palpatine acquires emergency powers over the Republic.`
	},
	{
		title: '22 BBY',
		cardTitle: 'The Clone Wars (movie) [22 BBY]',
		media: {
			source: {
				url: `/img/clone_wars.jpg`
				// url: `https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2020%2F01%2FCLONEWARS_1sheet_15434_L-900x0-850x560.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardDetailedText: `As more star systems get swept into the Clone Wars, the valiant Jedi knights struggle to maintain order. Anakin Skywalker and his Padawan learner Ahsoka Tano embark on a mission that brings them face-to-face with Jabba the Hutt. Plotting against them is evil Count Dooku and his agent, Asajj Ventress, who would ensure that the Jedis fail. Meanwhile, Yoda and Obi-Wan Kenobi lead the clone army against the forces of the Dark Side.`,
		cardSubtitle: `
		
		${bp}Ahsoka Tano is introduced.

		${bp}We meet Rex, Cody and the other clone troopers of the 501st Legion.`
	},
	{
		title: '22-19 BBY',
		cardTitle: 'The Clone Wars (TV series) [22-19 BBY]',
		media: {
			source: {
				url: `/img/clone_wars_tv.jpg`
				// url: `https://magicguidebooks.com/wp-content/uploads/2020/04/star-wars-the-clone-wars.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardDetailedText: `The show follows the actions of various characters from the Star Wars prequel trilogy, notably Jedi and clone troopers, in their war against the battle droid armies of the Confederacy of Independent Systems and the Sith. The series is notable for introducing Revenge of the Sith villain General Grievous.`,
		cardSubtitle: ` 

		${bp}The return of Darth Maul (really!)

		${bp}Ahsoka leaves the Jedi Order.

		${bp}Saw Gerrera is introduced.

		${bp}Yoda discovers how to return as a Force ghost.

		${bp}The clones' secret Order 66 is almost exposed.`
	},
	// {
	// 	title: '20 BBY',
	// 	cardTitle: 'Darth Maul(Comic)',
	// 	media: {
	// 		source: {
	// 			url: `https://i1.wp.com/multiversitystatic.s3.amazonaws.com/uploads/2016/11/Darth-Maul-1-Featured-Image.jpg?fit=1024%2C1024`
	// 		},
	// 		type: 'IMAGE',
	// 		name: ''
	// 	},
	// 	cardSubtitle: `20 BBY`
	// },
	{
		title: '19 BBY',
		cardTitle: 'Episode III: Revenge of the Sith (19 BBY)',
		media: {
			source: {
				url: `/img/ep3_800.jpg`
				// url: `https://images.squarespace-cdn.com/content/5956339e725e2555c63a1e67/1508559236312-DQ8NMON62PR16A6PE95F/revenge_sith_800.jpg?content-type=image%2Fjpeg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardDetailedText: `It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi (Ewan McGregor) and Jedi Knight Anakin Skywalker (Hayden Christensen) rescue Chancellor Palpatine (Ian McDiarmid) from General Grievous, the commander of the droid armies, but Grievous escapes. Suspicions are raised within the Jedi Council concerning Chancellor Palpatine, with whom Anakin has formed a bond. Asked to spy on the chancellor, and full of bitterness toward the Jedi Council, Anakin embraces the Dark Side.`,
		cardSubtitle: `
		
		${bp}First chronological appearance of Chewbacca.

		${bp}Obi-Wan defeats Anakin on Mustafar.

		${bp}Luke and Leia are born in secret and hidden.

		${bp}Order 66 is activated and the Jedi Order is destroyed.

		${bp}Padmé dies.

		${bp}The creation of the Empire.

		${bp}Anakin becomes Darth Vader.`
	}
];

export default data;
