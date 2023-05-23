import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from './character';

@Component({
    selector: 'app-characters',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.css']
})

export class CharacterListComponent implements OnInit {
    private _listFilterCharacterByName: string = '';

    get listFilterCharacterByName(): string { 
        return this._listFilterCharacterByName;
    }
   @Input() set listFilterCharacterByName(value: string) {
        this._listFilterCharacterByName = value;
        this.filteredCharacters = this.performFilter(value);
    }
    pageTittle: string = 'Characters';
    imageWidth: number = 200;
    imageMargin: number = 2;
    showViewMore: boolean = false;
    idCharacter: number = 0;


    private _sortBy: string = '';
    sortByOptions: string[] = ['', 'Option 1', 'Option 2'];
    get sortBy(): string {
        return this._sortBy;
    }
    set sortBy(value: string) {
        this._sortBy = value;
        console.log('In setter: ', value);
    }

    filteredCharacters: ICharacter[] = [];
    characters: ICharacter[] = [
        {
            "id": 1011334,
            "name": "3-D Man",
            "description": "",
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
                "extension": "jpg"
            },
            "comics": {
                "available": 12,
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
                        "name": "Avengers: The Initiative (2007) #14"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
                        "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
                        "name": "Avengers: The Initiative (2007) #15"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
                        "name": "Avengers: The Initiative (2007) #16"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
                        "name": "Avengers: The Initiative (2007) #17"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
                        "name": "Avengers: The Initiative (2007) #18"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
                        "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
                        "name": "Avengers: The Initiative (2007) #19"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8500",
                        "name": "Deadpool (1997) #44"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
                        "name": "Marvel Premiere (1972) #35"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
                        "name": "Marvel Premiere (1972) #36"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
                        "name": "Marvel Premiere (1972) #37"
                    }
                ],
                "returned": 12
            }
        },
        {
            "id": 1017100,
            "name": "A-Bomb (HAS)",
            "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
                "extension": "jpg"
            },
            "comics": {
                "available": 4,
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/47176",
                        "name": "FREE COMIC BOOK DAY 2013 1 (2013) #1"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40632",
                        "name": "Hulk (2008) #53"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40630",
                        "name": "Hulk (2008) #54"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40628",
                        "name": "Hulk (2008) #55"
                    }
                ],
                "returned": 4
            }
        },
        {
            "id": 1009144,
            "name": "A.I.M.",
            "description": "AIM is a terrorist organization bent on destroying the world.",
            "thumbnail": {
                "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
                "extension": "jpg"
            },
            "comics": {
                "available": 53,
                "items": [
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36763",
                        "name": "Ant-Man & the Wasp (2010) #3"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17553",
                        "name": "Avengers (1998) #67"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7340",
                        "name": "Avengers (1963) #87"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4214",
                        "name": "Avengers and Power Pack Assemble! (2006) #2"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63217",
                        "name": "Avengers and Power Pack (2017) #3"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63218",
                        "name": "Avengers and Power Pack (2017) #4"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63219",
                        "name": "Avengers and Power Pack (2017) #5"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63220",
                        "name": "Avengers and Power Pack (2017) #6"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/64790",
                        "name": "Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (Trade Paperback)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/103371",
                        "name": "Avengers Unlimited Infinity Comic (2022) #17"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1170",
                        "name": "Avengers Vol. 2: Red Zone (Trade Paperback)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1214",
                        "name": "Avengers Vol. II: Red Zone (Trade Paperback)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12787",
                        "name": "Captain America (1998) #28"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7513",
                        "name": "Captain America (1968) #132"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7514",
                        "name": "Captain America (1968) #133"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65466",
                        "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20367",
                        "name": "Defenders (1972) #57"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31068",
                        "name": "Incredible Hulks (2010) #606 (VARIANT)"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46168",
                        "name": "Indestructible Hulk (2012) #3"
                    },
                    {
                        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43944",
                        "name": "Iron Man (2012) #1"
                    }
                ],
                "returned": 20
            }
        }
    ]

    performFilter(filterBy: string): ICharacter[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.characters.filter((character: ICharacter) =>
            character.name.toLocaleLowerCase().includes(filterBy)
        );
    }

    viewMore(idCharacter: number): void {
        this.showViewMore = !this.showViewMore;
        this.idCharacter = idCharacter;

    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}