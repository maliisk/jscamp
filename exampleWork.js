//*** Soru1 ***/
//*** Asal sayılar, sadece iki pozitif tam sayı böleni olan doğal sayılardır. Sadece kendisine ve 1 sayısına kalansız bölünebilen 1'den büyük tam sayılardır. En küçük asal sayı 2'dir. ***/

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let counter = 0;
    for (let j = 1; j <= numbers[i] - 1; j++) {
      if (numbers[i] % j == 0) {
        counter++;
      }
    }

    if (counter == 1) {
      console.log(numbers[i] + " Asal  Sayıdır.");
    } else {
      console.log(numbers[i] + " Asal Sayı Değildir!");
    }
  }
}
findPrime(1, 2, 3, 5, 7, 8, 9, 12, 21, 23, 68, 75, 91, 113, 133);

console.log("<----------------------->");

//*** Soru2 ***//
//***Arkadaş Sayı: İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir. ***//
function totalDivisor(num) {
  let divisorTotal = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      divisorTotal += i;
    }
  }
  return divisorTotal;
}

function friendNumbers(num1, num2) {
  let num1Div = totalDivisor(num1);
  let num2Div = totalDivisor(num2);
  if (
    (num1 == num1Div && num2 == num2Div) ||
    (num2 == num1Div && num1 == num2Div)
  ) {
    console.log(num1 + " ve " + num2 + " arkadaş sayılardır.");
  } else {
    console.log(num1 + " ve " + num2 + " arkadaş sayılar değildir.");
  }
}

friendNumbers(220, 284);
friendNumbers(220, 286);
friendNumbers(2620, 2924);
friendNumbers(1184, 1210);

console.log("<----------------------->");

//*** Soru3 ***//
//*** Mükemmel sayı, sayılar teorisinde, kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı.
//*Diğer bir ifadeyle, bir mükemmel sayı, bütün pozitif tam bölenlerinin toplamının yarısına eşittir. ***//
function perfectNumbers() {
  for (let i = 1; i < 1001; i++) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      if (i % j == 0) {
        counter += j;
      }
    }
    if (counter == i) {
      console.log(i + " mükemmel sayıdır.");
    }
  }
}

perfectNumbers();

console.log("<----------------------->");

//*** Soru4 ***//
function findPrimes(number) {
  for (let i = 0; i < number; i++) {
    let counter = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        counter++;
      }
    }

    if (counter == 2) {
      console.log(i + " asal bir sayıdır.");
    }
  }
}

findPrimes(1000);
