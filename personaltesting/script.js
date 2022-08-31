//let myPromise = new Promise(function(myResolve, myReject) {
//document.getElementById('title').innerHTML = 1;

//  myResolve(); // when successful
//  myReject();  // when error
//});



async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  console.log(await myPromise)
}

myDisplay();