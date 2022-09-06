// *********
// for loop
// *********
for (let i = 0; i < 3; i++) {
  console.log(i);
}

/* Øvelse 1: Vi skal bygge et hegn.
 Plader er: #
 Pæle er: |
 Vi starter og slutter altid med en pæl
 Byg et hegn med 3 plader.
 Lav en funktion der kan lave dette hegn og printe det i consolen.
*/
console.log("|#|#|#|");
let hegn = "|";
for (let i = 0; i < 5; i++) {
  hegn = hegn + "#|";
}
console.log(hegn);

function buildFence() {
  let hegn = "|";
  for (let i = 0; i < 5; i++) {
    hegn = hegn + "#|";
  }
  console.log(hegn);
}

/* Fælles Øvelse 2:
 Lav en funktion der kan lave hegnet, ved at tage længden på hegnet ind som input parameter.
 Og derefter bygge hegnet med et for loop.
*/

// ********
// forEach
// ********

/*
 Øvelse 3:
 Byg et Array med navne på jeres nærmeste familie.
 Loop over arrayet og print hvert navn.
*/
const family = ["Kasper", "Emma", "Helle"];
family.forEach((names) => {
  console.log(names);
});

/*
 Fælles øvelse 4:
 Lav 3 objekter indeholdende titel og noteText i hvert objekt
 Fyld disse 3 objekter ind i et array.
 Loop over arrayet og print noteText for hvert element.
*/
const notes = [
  { titel: "Note 1", noteText: "Hej med dig" },
  { titel: "Note 2", noteText: "Hej med dig" },
  { titel: "Note 3", noteText: "Hej med dig" },
];

notes.forEach((note) => {
  console.log(note.titel);
});

/*
 Øvelse 5: 
 I stedet for at printe, så indsæt tekst i HTML.
*/

/*
 Øvelse 6:
 I stedet for at indsæt direkte i HTML, så indsæt først i et Template, og derefter indsæt templaten i din HTML
 */
