import { defineStore } from "pinia";


export const useMainStore = defineStore("main", {
	state: () => ({
		characters: {
			description: "Welcome to my website for my web-comics!",
			character: [
				{
					name: "Zetro",
					description: "Hi, I'm Zetro!",
					image: "/src/assets/images/Zetro2.jpg",
					imgAlt: "Zetro",
				},
				{
					name: "Kazay",
					description: "Hi, I'm Kazay!",
					image: "/src/assets/images/Kazay.jpg",
					imgAlt: "Kazay",
				},
				{
					name: "Exo",
					description: "Hi, I'm Exo!",
					image: "/src/assets/images/Exo.jpg",
					imgAlt: "Exo",
				},
				{
					name: "Shaman",
					description: "Hi, I'm Shaman!",
					image: "/src/assets/images/Shaman.jpg",
					imgAlt: "Shaman",
				},
			],
		},
	}),
	
	// Define actions for fetching or mutating the state
	actions: {
		// Example: Fetch user profile data from an API
		fetchUserProfile() {
			// Implementation for fetching user profile data
		},
	},
	
	// Define getters to compute derived state or access specific parts of the state
	getters: {
		// Example getter for getting all project names
		comicNames: state => state.characters.character.map(character => character.name),
	},
});
