const testObject = {
  a: "mathias",
  b: "katrine",
  c: "Julian",
};
// Det første trin at forstå: "String accesing values from objects"

// Normal acces af objekt værdier:
testObject.b;

// Med string accesing værder:
testObject["b"];

// Det andet vi skal forstå, er "for in"- for loopet

// Slut resultat: Vi har lavet objektet om til et array
testObject["b"];

// Det andet vi skal forstå, er "for in"- for loopet
const names = [];
for (key in testObject) {
  names.push(testObject[key]);
}

console.log(names);
