console.log("Merhaba kodlama.io");
//!js type safe değildir!
// ! var daha global bir değişkendir,
// ! bu yüzden let değişkenini kullanıyoruz.

let dolarBugun = 9.3;

let dolarDun = 9.2;
dolarDun = "9.20";
{
  let dolarDun = 9.1;
}
console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11;

console.log(euroDun);
//array dizi demektir []
//camelCasing
//PascalCasing

let konutKredileri = [
  "Konut kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut kredisi",
  "Araç Kredisi",
];
//döngü, elindeki bir veriyi dolaşmaya yarar.
console.log("<ul>");
// for (let i = 0; i < 3; i++) {
//   console.log("<li>" + konutKredileri[i] + "</li>");
// }
//!ben nerden biliyorum 3 elemanının olduğunu da  i<3 diyorum?
//*onun için length kullanacağız. Length uzunluğu demek. Yani kaç tane elemanı var demek. yani i<3 olur aslında
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");
