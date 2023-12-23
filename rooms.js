var rooms = {
    "start": {
        "description": "You find yourself in a mysterious land filled with peculiar creatures. To the <b>north</b>, you see a towering structure with a cursed princess. To the <b>east</b>, there's a magical field where pigs fly, and to the <b>west</b>, a meadow where mischievous kittens play.",
        "directions": {
            "north": "tower",
            "east": "pigField",
            "west": "kittenMeadow"
        }
    },

    "tower": {
        "description": "You approach the towering structure and find a princess locked inside, trapped by an ancient curse. She pleads for your help to break the curse. Do you accept the challenge and <b>go east</b> to her chamber? or do you want me to start over and watch things <b>go south</b>",
        "directions": {
            "south": "start",
            "east": "princessChamber"
        }
    },

    "princessChamber": {
        "description": "You enter the princess's chamber, where she seems distressed but kind. She explains the curse and asks for your assistance in finding a cure. Will you aid the princess and <b>go west</b> to the tower?",
        "directions": {
            "west": "tower",
            "north": "dungeon"
        }
    },

    "dungeon": {
        "description": "Curiosity leads you to a hidden dungeon beneath the tower. The dungeon is filled with forgotten secrets and guarded by ancient ghosts. Do you explore further and <b>go east</b> through a hidden passage?",
        "directions": {
            "south": "princessChamber",
            "east": "hiddenPassage"
        }
    },

    "hiddenPassage": {
        "description": "You discover a hidden passage leading to a mysterious garden. The garden is home to talking flowers and enchanted plants. Do you converse with the mystical flora and <b>go north</b> to a sunlit glade?",
        "directions": {
            "west": "dungeon",
            "north": "sunlitGlade"
        }
    },

    "sunlitGlade": {
        "description": "You emerge into a sunlit glade, where fairies dance and sing. The fairies offer guidance on your quest and warn of impending challenges. Do you trust the advice of the fairies and <b>go east</b> to an ancient tree?",
        "directions": {
            "south": "hiddenPassage",
            "east": "ancientTree"
        }
    },

    "ancientTree": {
        "description": "You encounter an ancient tree with roots that seem to reach into the heart of the land. The tree shares ancient stories and hints at the true nature of the curse. Do you listen to the tales of the ancient tree and <b>go west</b> to the sunlit glade?",
        "directions": {
            "west": "sunlitGlade"
        }
    },

    "pigField": {
        "description": "You enter a magical field where pigs fly and oink spells. The pigs offer you a quest: find the wizard's wand to stop the enchanted chaos. Will you accept the piggy quest and <b>go west</b> to the starting point or <b>go north</b> to the wizard's hut?",
        "directions": {
            "west": "start",
            "north": "wizardHut",
            "south": "princessChamber"
        }
    },

    "wizardHut": {
        "description": "You find the wizard's hut, where a wise pig wizard resides. The wizard warns you of hidden dangers and advises caution. Do you trust the wizard's guidance and <b>go south</b> to the pig field or <b>go east</b> to a mystic cave?",
        "directions": {
            "south": "pigField",
            "east": "mysticCave"
        }
    },

    "mysticCave": {
        "description": "You enter a mystic cave with glowing crystals and whispers of ancient spells. The cave is said to hold the key to breaking the curse. Do you explore the depths of the mystic cave and <b>go west</b> to the wizard's hut or <b>go north</b> to a crystal chamber?",
        "directions": {
            "west": "wizardHut",
            "north": "crystalChamber"
        }
    },

    "crystalChamber": {
        "description": "You discover a crystal chamber with a pool of shimmering water. The water reveals visions of the past and future. Do you gaze into the pool to uncover the secrets it holds and <b>go south</b> to the mystic cave or <b>go east</b> to a goblin market?",
        "directions": {
            "south": "mysticCave",
            "east": "goblinMarket"
        }
    },

    "goblinMarket": {
        "description": "You stumble upon a lively market run by mischievous goblins. The goblins offer rare items and information for a price. Do you haggle with the goblins to obtain valuable resources and <b>go west</b> to a crystal chamber or <b>go north</b> to a dark alley?",
        "directions": {
            "west": "crystalChamber",
            "north": "darkAlley"
        }
    },

    "darkAlley": {
        "description": "You find yourself in a dark alley filled with shadowy figures. The figures offer shady deals and rumors about the cursed princess's true intentions. Do you trust the information from the mysterious alley and <b>go south</b> to the goblin market or <b>go east</b> to an enchanted grove?",
        "directions": {
            "south": "goblinMarket",
            "east": "enchantedGrove"
        }
    },

    "enchantedGrove": {
        "description": "You stumble upon an enchanted grove where magical creatures frolic. The grove holds the key to unlocking the princess's true nature. Do you explore the enchanted grove and <b>go west</b> to a dark alley?",
        "directions": {
            "west": "darkAlley"
        }
    },

    "kittenMeadow": {
        "description": "In the meadow, kittens with wizard hats play with yarn that sparkles with magic. They challenge you to a game of wits. Do you accept the challenge from the mischievous kittens and <b>go east</b> to the starting point or <b>go north</b> to a kitten library?",
        "directions": {
            "east": "start",
            "north": "kittenLibrary"
        }
    },

    "kittenLibrary": {
        "description": "You discover a hidden library in the meadow, guarded by wise kittens. The kittens offer ancient scrolls with mysterious knowledge.",
        "directions": {
            "south": "kittenMeadow",
            "west": "enchantedGrove"
        }
    }
};
