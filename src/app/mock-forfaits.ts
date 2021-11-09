import {Forfait} from './interfaces/forfait';

export const FORFAITS: Forfait[] = [
    {
        destination : 'Mexique',
        villeDepart : 'Québec', 
        hotel :{
            nom : 'nom...',
            coordonnees : '...',
            nombreEtoiles : 3,
            nombreChambres : 100,
            caracteristiques : ['Face à la plage', 'Ascenseur', 'Miniclub']
        },
        dateDepart : '2020-12-15',
        dateRetour : '2020-12-31',
        prix : 1500,
        rabais : 100,
        vedette : false
    },
    {
        destination : 'Mexique',
        villeDepart : 'Montréal', 
        hotel :{
            nom : 'Hilton Cancun',
            coordonnees : '...',
            nombreEtoiles : 2,
            nombreChambres : 50,
            caracteristiques : ['Face à la plage', 'Ascenseur', 'Miniclub']
        },
        dateDepart : '2020-12-20', 
        dateRetour : '2021-01-10',
        prix : 2500,
        rabais : 500,
        vedette : true
    },
    {
        destination : 'Paris',
        villeDepart : 'Toronto', 
        hotel :{
            nom : 'Le Paris Hotel',
            coordonnees : '...',
            nombreEtoiles : 4,
            nombreChambres : 160,
            caracteristiques : ['Ascenseur', 'Miniclub']
        },
        dateDepart : '2021-12-22',
        dateRetour : '2022-01-30',
        prix : 5500,
        rabais : 100,
        vedette : false
    },
    {
        destination : 'Londres (UK)',
        villeDepart : 'Montreal', 
        hotel :{
            nom : 'The Majesty Hotel',
            coordonnees : '...',
            nombreEtoiles : 5,
            nombreChambres : 200,
            caracteristiques : ['Ascenseur', 'Miniclub']
        },
        dateDepart : '2021-11-01',
        dateRetour : '2022-01-30',
        prix : 15500,
        rabais : 100,
        vedette : true
    },
    {
        destination : 'Barcelone',
        villeDepart : 'Montreal', 
        hotel :{
            nom : 'The Hip Hotel',
            coordonnees : '...',
            nombreEtoiles : 5,
            nombreChambres : 200,
            caracteristiques : ['Ascenseur', 'Miniclub']
        },
        dateDepart : '2022-11-01',
        dateRetour : '2023-01-30',
        prix : 12500,
        rabais : 100,
        vedette : true
    },
    {
        destination : 'Saint-Barth',
        villeDepart : 'Montréal', 
        hotel :{
            nom : 'Best Inn',
            coordonnees : '...',
            nombreEtoiles : 5,
            nombreChambres : 50,
            caracteristiques : ['Face à la plage', 'Ascenseur', 'Miniclub']
        },
        dateDepart : '2021-12-01', 
        dateRetour : '2022-01-01',
        prix : 4500,
        rabais : 50,
        vedette : false
    }
]