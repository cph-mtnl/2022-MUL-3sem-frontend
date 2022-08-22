// Vi kan oprette en instans af Date klassen ved at kalde den således:
const today = new Date()

// Når vi kalder Date constructoren uden parametrer, altså tomme (), så vælger den automatisk dags dato.
const dd = today.toDateString()

// Hvis vi prøver at printe dd, så giver den lige nu: Mon Aug 22 2022.
// Dette vil selvfølgelig ændrer sig over tid :)
console.log(dd)

// Vi kan også vælge at kalde Date constructoren med en bestemt dato:
const firstOfJanuary = new Date("2020-01-01")

// input parameteren her følger et bestemt format: 2020-01-01, altså year-month-day, normalt beskrevet: "yyyy-MM-dd"
// Der findes mange forskellige dato formatter, og det kan være lidt besværligt at arbejde med, specielt når man begynder at arbejde på tværs af tidszoner.

// Man kan også blive endnu mere præcis end blot en dato, man kan også give et klokkeslet:
const verySpecificDate = new Date("2022-08-22T12:01:46.763Z")
// Her er det angivet i ISO format, som er en international standard.
// Og her begynder det så at blive lang håret med format, tidszoner osv.
// I kan godt løse jeres "Er det fredag" opgave blot ved den simple udgave:
const todayTwo = new Date()

/*
  Ovenover har vi introduceret 2 nye koncepter, udover "Date", nemlig "klasser" og "constructor".
  Klasser aka. "Classes" er en meget bredt brugt betegnelse indenfor programmerings verdenen.
  
  Ikke sikkert vi kommer til at gå mere i dybden med dem, men nu ved i hvad det er, når i ser keywordet "new".
  Så er det fordi vi opretter en ny instans af klassen
*/