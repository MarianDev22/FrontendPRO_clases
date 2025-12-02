
type HPHouse = 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw';

export interface Wand {
    wood: string;
    core:string;
    length: number | null;
    
}

export interface HPCharacter {
    id: string;
    name: string;
    alternate_names: string[];
    // alternate_names: Array<string>
    //alternate_names: [string]
    species: string;
    gender: string,
    house: HPHouse;
    dateOfBirth: string | null;
    yearOFBirth: number | null;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: Wand;
    // {
    //      wood: string;
    //      core:string;
    //      length: number
    // };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actor: [];
    alive: boolean;
    image: string;
};