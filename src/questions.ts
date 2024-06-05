/* eslint-disable max-len */
interface IQuizQuestion {
    question: string;
    options: string[];
    correctOptionIndex: number;
    category: string;
    difficulty: number;
}

// array with quiz questions filled in
const quizQuestions: IQuizQuestion[] = [
  {
    question: 'År 2014 var det ett tv-program som hade fler tittare än melodifestivalen. Vilket?',
    options: 
    [
      'Kalle Anka och hans vänner på julafton', 
      'Bingolottos uppesittarkväll', 
      'Allsång på Skansens säsongsavslutning',
    ],
    correctOptionIndex: 0,
    category: 'Melodifestivalen',
    difficulty: 1,
  },
  {
    question: 'Vad heter den svenska producent som har tagit melodifestivalen till USA?',
    options: 
    [
      'Anders Lenhoff', 
      'Christer Björkman', 
      'Lasse Holm',
    ],
    correctOptionIndex: 1,
    category: 'Melodifestivalen',
    difficulty: 2,
  },
  {
    question: 'Vilken artist sjöng sin 14e sång i melodifestivalen 2019?',
    options:
    [
      'Siw Malmqvist',
      'Ann-Louise Hansson',
      'Lill Lindfors',
    ],
    correctOptionIndex: 1,
    category: 'Melodifestivalen',
    difficulty: 3,
  },
  {
    question: 'Vilket år sjönk regalskeppet Vasa?',
    options: 
    [
      '1598',
      '1601',
      '1628',
    ],
    correctOptionIndex: 2,
    category: 'Regalskeppet Vasa',
    difficulty: 1,
  },
  {
    question: 'Vem var kung i Sverige när regalskeppet Vasa sjönk?',
    options:
    [
      'Carl X Gustaf',
      'Karl XII',
      'Gustaf II Adolf',
    ],
    correctOptionIndex: 2,
    category: 'Regalskeppet Vasa',
    difficulty: 2,
  },
  {
    question: 'Hur länge låg regalskeppet Vasa på havets botten?',
    options:
    [
      '257 år',
      '333 år',
      '385 år',
    ],
    correctOptionIndex: 1,
    category: 'Regalskeppet Vasa',
    difficulty: 3,
  },
  {
    question: 'I hur många kategorier delas Nobelpriset ut?',
    options:
    [
      '5 kategorier',
      '6 kategorier',
      '7 kategorier',
    ],
    correctOptionIndex: 1,
    category: 'Nobelpriset',
    difficulty: 1,
  },
  {
    question: 'Vilket år delades det första Nobelpriset ut?',
    options:
    [
      '1907',
      '1897',
      '1901',
    ],
    correctOptionIndex: 2,
    category: 'Nobelpriset',
    difficulty: 2,
  },
  {
    question: 'I vilken kategori finns det flest svenska nobelpristagare?',
    options:
    [
      'Litteratur',
      'Fysik',
      'Ekonomi',
    ],
    correctOptionIndex: 1,
    category: 'Nobelpriset',
    difficulty: 3,
  },
  {
    question: 'Vem spelar huvudrollen som Stig-Helmer Olsson i Sällskapsresan?',
    options: 
    [
      'Jon Skolmen',
      'Gösta Ekman',
      'Lasse Åberg',
    ],
    correctOptionIndex: 2,
    category: 'Svensk film',
    difficulty: 1,
  },
  {
    question: 'Vem skrev böckerna som filmserien "Utvandrarna" är baserad på?',
    options:
    [
      'John Ajvide Lindqvist',
      'Vilhelm Moberg',
      'Selma Lagerlöf',
    ],
    correctOptionIndex: 1,
    category: 'Svensk film',
    difficulty: 2,
  },
  {
    question: 'Vilken svensk regissör gjorde Hollywoodfilmen "Tinker, Tailor, Soldier, Spy"?',
    options: 
    [
      'Ruben Östlund',
      'Lasse Hallström',
      'Tomas Alfredsson',
    ],
    correctOptionIndex: 2,
    category: 'Svensk film',
    difficulty: 3,
  },
  {
    question: 'Vad heter rockfestivalen som arrangeras utanför Sölvesborg varje sommar?',
    options:
    [
      'Sweden Rock',
      'Dansbandsveckan',
      'Augustibuller',
    ],
    correctOptionIndex: 0,
    category: 'Svenska festivaler',
    difficulty: 1,
  },
  {
    question: 'I vilken park arrangeras Way Out West?',
    options:
    [
      'Slottsskogen i Göteborg',
      'Stadsparken i Lund',
      'Nissanparken i Halmstad',
    ],
    correctOptionIndex: 0,
    category: 'Svenska festivaler',
    difficulty: 2,
  },
  {
    question: 'Vad hette festivalen som arrangerades i Lindesberg i augusti mellan 1996 och 2007?',
    options:
    [
      'Lollapalooza',
      'Augustibuller',
      'Putte i Parken',
    ],
    correctOptionIndex: 1,
    category: 'Svenska festivaler',
    difficulty: 3,
  },
  {
    question: 'Vilket tröjnummer har Peter "Foppa" Forsberg spelat med?',
    options:
    [
      '19',
      '21',
      '27',
    ],
    correctOptionIndex: 1,
    category: 'Svensk idrott',
    difficulty: 1,
  },
  {
    question: 'Vilken sport är Ronnie Peterson, som dog 1987, förknippad med?',
    options:
    [
      'Speedway',
      'Rally',
      'Formel 1',
    ],
    correctOptionIndex: 2,
    category: 'Svensk idrott', 
    difficulty: 2,
  },
  {
    question: 'Vilken idrottare är född i Västervik, rankades som världsetta i sin sport under 72 veckor och fick Fairplay-priset 1992?',
    options: 
    [
      'Jenny Kallur',
      'Stefan Edberg',
      'Jan-Ove Waldner',
    ],
    correctOptionIndex: 1,
    category: 'Svensk idrott',
    difficulty: 3,
  },
  {
    question: 'Vad heter serien som handlar om några familjer i ett fint område i Saltsjöbaden?',
    options:
    [
      'Solsidan',
      'Bonusfamiljen',
      'Vår tid är nu',
    ],
    correctOptionIndex: 0,
    category: 'Svenska tv-serier',
    difficulty: 1,
  },
  {
    question: 'I vilken svensk tv-serie hade Petra Mede en av huvudrollerna som Katja under de tre första säsongerna?',
    options:
    [
      'Rederiet',
      'Goda grannar',
      'Bonusfamiljen',
    ],
    correctOptionIndex: 2,
    category: 'Svenska tv-serier',
    difficulty: 2,
  },
  {    
    question: 'I vilken svensk tv-serie från 1970-talet hade Sven Wollter och Viveka Seldahl huvudrollerna som Gustav och Ida?',
    options:
    [
      'Raskens',
      'Hem till byn',
      'Macklean',
    ],
    correctOptionIndex: 0,
    category: 'Svenska tv-serier',
    difficulty: 3,
  },
  {
    question: 'Vad heter den svenska botaniker som lade grunden till för hur vi än idag grupperar växter och djur?',
    options:
    [
      'Daniel Solander',
      'Carl von Linné',
      'Pehr Kalm',
    ],
    correctOptionIndex: 1,
    category: 'Historiska personer',
    difficulty: 1,
  },
  {
    question: 'Vad heter fysikern som är Sveriges första astronaut?',
    options:
    [
      'Karin Rathsman',
      'Bengt Hultqvist',
      'Christer Fuglesang',
    ],
    correctOptionIndex: 2,
    category: 'Historiska personer',
    difficulty: 2,
  },
  {
    question: 'Vad hette författaren som skrev romanen "Hertha" och var en av kvinnorörelsens stora pionjärer i Sverige?',
    options:
    [
      'Hedvig Charlotta Nordenflycht',
      'Fredrika Bremer',
      'Amalia von Helvig',
    ],
    correctOptionIndex: 1,
    category: 'Historiska personer',
    difficulty: 3,
  },
  {
    question: 'Vem regisserade Sällskapsresan?',
    options:
    [
      'Lasse Hallström',
      'Lasse Åberg',
      'Mikael Håfström',
    ],
    correctOptionIndex: 1,
    category: 'Svensk film',
    difficulty: 1,
  },
  {
    question: 'På vilken bok baseras filmen "Mannen från Mallorca" från 1984?',
    options:
    [
      'Det slutna rummet',
      'Grisfesten',
      'Mannen som log',
    ],
    correctOptionIndex: 1,
    category: 'Svensk film',
    difficulty: 2,
  },
  {
    question: 'Vilken svensk statsminister har varit värd för Guldbaggegalan?',
    options:
    [
      'Olof Palme',
      'Ingvar Carlsson',
      'Fredrik Reinfeldt',
    ],
    correctOptionIndex: 0,
    category: 'Svensk film',
    difficulty: 3,
  },
  {
    question: 'Vad heter den svenska konstnären som har målat så många kända julmotiv?',
    options:
    [
      'Carl Larsson',
      'Siri Derkert',
      'Jenny Nyström',
    ],
    correctOptionIndex: 2,
    category: 'Svenska konstnärer',
    difficulty: 1,
  },
  {
    question: 'Vilken svensk konstnär har målat verket "Midvinterblot" som hänger på Nationalmuseet i Stockholm?',
    options:
    [
      'Anders Zorn',
      'Carl Larsson',
      'Bruno Liljefors',
    ],
    correctOptionIndex: 1,
    category: 'Svenska konstnärer',
    difficulty: 2,
  },
  {
    question: 'När föddes Anders Zorn?',
    options:
    [
      '1840',
      '1850',
      '1860',
    ],
    correctOptionIndex: 2,
    category: 'Svenska konstnärer',
    difficulty: 3,
  },
  {
    question: 'Vilken krydda använder man i lussebullar som gör att de får sin gula färg?',
    options:
    [
      'Safflor',
      'Gurkmeja',
      'Saffran',
    ],
    correctOptionIndex: 2,
    category: 'Svenska jultraditioner',
    difficulty: 1,
  },
  {
    question: 'Vad heter gruppen som sjunger låten "Tänd ett ljus" som hörs flitigt under julen?',
    options:
    [
      'Triad',
      'GES',
      'Page',
    ],
    correctOptionIndex: 0,
    category: 'Svenska jultraditioner',
    difficulty: 2,
  },
  {
    question: 'Vilket år började SVT sända "Kalle Anka och hans vänner önskar God Jul" på julafton?',
    options: 
    [
      '1960',
      '1970',
      '1980',
    ],
    correctOptionIndex: 0,
    category: 'Svenska jultraditioner',
    difficulty: 3,
  },
];

export { quizQuestions };
export type { IQuizQuestion };
