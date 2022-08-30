//ASYNC AWAIT
function prepareFood() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("prepare food");
    }, 2000);
  });
}
function eatFood() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("eat food");
    }, 1500);
  });
}
async function hotelScenario() {
  try {
    console.log("Enter hotel");
    console.log("go to seat");
    console.log("order food");
    console.log(await prepareFood());
    console.log("serve food");
    console.log(await eatFood());
    console.log("pay bill");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("walk away");
  }
}
hotelScenario();
