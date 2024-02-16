// console.log("Jack Ma maslahatlari");
// const list = [
//     "Yaxshi talaba boling", //0-20
//     "Togri boshliq tanlang va koproq xato qiling", //20-30
//     "Uzingizga ishlashingizni boshlang", //30-40
//     "Siz kuchli bolgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", //50-60
//     "Endi dam oling, foydasi yoq endi", //60
// ];
//  function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <=20) callback(null, list[0]);
//     else if(a > 20 && a <=30) callback(null, list[1]);
//     else if(a > 30 && a <=40) callback(null, list[2]);
//     else if(a > 40 && a <=50) callback(null, list[3]);
//     else if(a > 50 && a <=60) callback(null, list[4]);
//     else {
//             setInterval(function () {
//                 callback(null, list[5]);
//             }, 1000);
//         }
//     }

//     console.log("Passed here 0");
//     maslahatBering(70, (err, data) => {
//         if (err) console.log("ERROR:", err);
//         else {
//             console.log(data);
//         }
//     });
//     console.log("Passed here 1");

// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <=20) return list[0];
//     else if(a > 20 && a <=30) return list[1];
//     else if(a > 30 && a <=40) return list[2];
//     else if(a > 40 && a <=50) return list[3];
//     else if(a > 50 && a <=60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000)
//         })

//             // setTimeout(function () {
//             //     return list[5];
//             // }, 5000);       
            
//     }
// }

// console.log('Passed here 0');
// maslahatBering(65).then((data) => {
//     console.log("Javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log('Passed here 1');
// maslahatBering(26, (err,data) => {
//     if(err) console.log('Error:', err);
//     console.log("Javob:", data);
// });
// console.log('Passed here 1');

// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// A-TASK:

// function letterCount(a, b) {
//     let arr = [];
//     let changeArr = b.split("");
//     for (i = 0; i < changeArr.length; i++) {
//       if (a == changeArr[i]) {
//         arr.push(changeArr[i]);
//       }
//     }
//     return arr.length > 0 ? arr.length : `there is no  letter ${a} in ${b} word`;
//   }
  
//   console.log(letterCount("e", "engineer"));
  

//TASK 2


// const countDigits = (data) => {
//   let arr = [];
//   let changeArr = data.split("");
//   for (i = 0; i < changeArr.length; i++) {
//     if (!isNaN(changeArr[i])) {
//       arr.push(changeArr[i]);
//     }
//   }

//   return arr.length;
// };
// console.log(countDigits("123456asdfghjkuytrd1234gfhdfs1234"));



  // TASK 3

  // class Apple {
  //   // constructor
  //   constructor(Iphone, Macbook, Airpods) {
  //     this.Iphone = Iphone;
  //     this.Macbook = Macbook;
  //     this.Airpods = Airpods;
  //   }
  
  //   sell(Iphone) {
  //     this.Iphone -= Iphone;
  //   }
  
  //   receive(Airpods) {
  //     this.Airpods += Airpods;
  //   }
  
  //   left() {
  //     let now = new Date();
  //     let hours = now.getHours();
  //     let minutes = now.getMinutes();
  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     console.log(
  //       `Now ${hours}:${minutes} We have ${this.Iphone} Iphone , ${this.Macbook} Macbook and ${this.Airpods} ta Airpods available!`
  //     );
  //   }
  // }
  // const apple = new Apple(4, 5, 2);
  // apple.left();
  // apple.sell(3);
  // apple.receive(4);
  // apple.left();


  //TASK D



  const checkContent = (str1, str2) => {
    let newArr = str2.split("");
    let newArr1 = [];
  
    for (let i = 0; i < newArr.length; i++) {
      let count = 0;
      if (str1.length === newArr.length && str1.includes(newArr[i])) {
        count++;
      }
      newArr1.push(count);
    }
  
    if (newArr1.includes(0)) {
      return false;
    } else {
      return true;
    }
  };
  
  console.log(checkContent("Namangan", "ganNaman"));