const data = [
	{
		title: '32 BBY',
		cardTitle: 'Episode 1: The Phantom Menace',
		media: {
			source: {
				url: `https://images.squarespace-cdn.com/content/v1/58ff64272e69cf8f337d1927/1578518679515-B7WEXZOGY12ZOFNQW72U/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/Star_Wars_Phantom_Menace_1.jpg?format=750w`
				// url: `https://cbsnews1.cbsistatic.com/hub/i/r/2015/12/12/c8a850b2-5b9b-468e-b79c-de0ea45fd963/thumbnail/640x957/c1224121742fe3ea9d80acce8928ba30/phantom-menace-a.jpg`
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
				url: `https://2.bp.blogspot.com/-a9nx3ANMxwo/Vlo7XJNEv_I/AAAAAAAAMT4/WeHRfx9g5So/w1200-h630-p-k-no-nu/Attack%2Bof%2Bthe%2BClones.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `Set ten years after the events of "The Phantom Menace," the Republic continues to be mired in strife and chaos. A separatist movement encompassing hundreds of planets and powerful corporate alliances poses new threats to the galaxy that even the Jedi cannot stem. These moves, long planned by an as yet unrevealed and powerful force, lead to the beginning of the Clone Wars -- and the beginning of the end of the Republic.`
	},
	{
		title: '22 BBY',
		cardTitle: 'The Clone Wars (movie)',
		media: {
			source: {
				url: `https://m.media-amazon.com/images/M/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `As more star systems get swept into the Clone Wars, the valiant Jedi knights struggle to maintain order. Anakin Skywalker and his Padawan learner Ahsoka Tano embark on a mission that brings them face-to-face with Jabba the Hutt. Plotting against them is evil Count Dooku and his agent, Asajj Ventress, who would ensure that the Jedis fail. Meanwhile, Yoda and Obi-Wan Kenobi lead the clone army against the forces of the Dark Side.`
	},
	{
		title: '22-19 BBY',
		cardTitle: 'The Clone Wars (TV series) ',
		media: {
			source: {
				url: `https://magicguidebooks.com/wp-content/uploads/2020/04/star-wars-the-clone-wars.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `The show follows the actions of various characters from the Star Wars prequel trilogy, notably Jedi and clone troopers, in their war against the battle droid armies of the Confederacy of Independent Systems and the Sith. The series is notable for introducing Revenge of the Sith villain General Grievous.`
	},
	{
		title: '20 BBY',
		cardTitle: 'Darth Maul(Comic)',
		media: {
			source: {
				url: `https://i1.wp.com/multiversitystatic.s3.amazonaws.com/uploads/2016/11/Darth-Maul-1-Featured-Image.jpg?fit=1024%2C1024`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `20 BBY`
	},
	{
		title: '19 BBY',
		cardTitle: 'Episode III: Revenge of the Sith',
		media: {
			source: {
				url: `https://images.squarespace-cdn.com/content/5956339e725e2555c63a1e67/1508559236312-DQ8NMON62PR16A6PE95F/revenge_sith_800.jpg?content-type=image%2Fjpeg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `It has been three years since the Clone Wars began. Jedi Master Obi-Wan Kenobi (Ewan McGregor) and Jedi Knight Anakin Skywalker (Hayden Christensen) rescue Chancellor Palpatine (Ian McDiarmid) from General Grievous, the commander of the droid armies, but Grievous escapes. Suspicions are raised within the Jedi Council concerning Chancellor Palpatine, with whom Anakin has formed a bond. Asked to spy on the chancellor, and full of bitterness toward the Jedi Council, Anakin embraces the Dark Side.`
	},
	{
		title: '13-10* BBY',
		cardTitle: 'Solo: A Star Wars Story',
		media: {
			source: {
				url: `https://cdn.onebauer.media/one/empire-tmdb/films/348350/images/7LZ0K4FsALrt7OeNIGOVLNuKQRU.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `Young Han Solo finds adventure when he joins forces with a gang of galactic smugglers and a 190-year-old Wookie named Chewbacca. Indebted to the gangster Dryden Vos, the crew devises a daring plan to travel to the mining planet Kessel to steal a batch of valuable coaxium. In need of a fast ship, Solo meets Lando Calrissian, the suave owner of the perfect vessel for the dangerous mission -- the Millennium Falcon.`
	},
	{
		title: '5-1 BBY (Epilogue after 4 ABY)',
		cardTitle: 'Star Wars Rebels',
		media: {
			source: {
				url: `https://s.abcnews.com/images/Entertainment/star-wars-rebels-season-four-key-art-tall_16x9_1600.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `Fourteen years after the fall of the Galactic Republic and the Jedi Order and the rise of the Galactic Empire depicted in Revenge of the Sith,[10] a motley group of rebels unite aboard a freighter starship called the Ghost and begin to conduct covert operations against the Imperial garrison on and around the planet Lothal and other planets that are menaced by the Empire.`
	},
	{
		title: '0 BBY',
		cardTitle: 'Rogue One: A Star Wars Story',
		media: {
			source: {
				url: `https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2018%2F12%2FRogue-One-A-Star-Wars-Story-1600x900_0.jpg`
			},
			type: 'IMAGE',
			name: ''
		},
		cardSubtitle: `Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance.`
	}
];

export default data;
