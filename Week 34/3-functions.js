// Vi opretter funktioner vha. keywordet "function", det er son vi fortæller JS vi vil oprette en ny function.
// add er så navnet på vores funktion.
// "numberOne" og "numberTwo" er navnene på parameter, som vores funktion tager imod.
function add(numberOne, numberTwo) {
  // Her laver vi den beregning vi gerne vil lave og gemmer resultatet i en variabel vi kalder "result"   
  const result = numberOne + numberTwo
  // og til sidst returner vi resultatet, så beregning ikke "går tabt" inde i funktionen.
  return result
}

// Ovenstående funktion og funktioner generelt, "kalder"/"eksekverer" man ved at skrive navnet på funktionen, og så ():
// Her kalder vi så add funktionen, uden at give den nogle input parametrer:
const test = add()
// Lad os prøve at se hvad det giver os:
console.log(test)
// Det giver os: NaN, hvilket står for "Not a Number".
// Og det er fordi vi prøver at sige undefined + undefined.
// Altså ingenting + ingenting. Så det er noget mærkelig matematik.

// Hvis vi så prøver at kalde den med nogle korrekte numbers:
const result = add(2,4)
// Får vi det rigtige tal tilbage, nemlig 6.
console.log(result)
/*
  I dette eksempel med add og vores funktions kald.
  Så har vi egentlig oprettet 2 variabler med det samme navn, nemlig "result".
  Men her giver det ingen problemer, for de 2 variabler lever i 2 forskellige scopes.
  Den result variabel vi opretter inde i vores funktion, lever kun inde i funktionen, og kan ikke tilgås udenfor funktionen.
*/
