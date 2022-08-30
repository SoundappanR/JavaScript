/*
-----------------
    Promises
-----------------
*/

// const p = new Promise(function (resolve, reject) {
//   resolve(10);
// });

// p.then(function (result) {
//   console.log(result);
// });

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Success");
//   }, 3000);
// });

// p.then(function (result) {
//   console.log(result);
// });

// const p = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject("Error occured");
//   }, 3000);
// });

// p.then(function (result) {
//   console.log(result);
// }).catch(function (error) {
//   console.log(error);
// });

function getUsername(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`UserName of id ${10} is `);
      let userName = "Wolf";
      resolve(userName);
    }, 2000);
  });
}

function getRepo(userName) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Repo of  ${userName} is `);
      let Repo = "Wolf's Repo";
      resolve(Repo);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Commit message of ${repo}..`);
      let msg = "first commit";
      resolve(msg);
    }, 2000);
  });
}

//In the below code for each then we need to mention catch

// getUsername(10)
//   .then(function (userName) {
//     console.log(userName);

//     getRepo(userName)
//       .then(function (repo) {
//         console.log(repo);

//         getCommits(repo)
//           .then(function (msg) {
//             console.log(msg);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// // In the below code single catch will handle all the then

// getUsername(10)
//   .then(function (userName) {
//     console.log(userName);
//     return getRepo(userName);
//   })
//   .then(function (repos) {
//     console.log(repos);
//     return getCommits(repos);
//   })
//   .then(function (msg) {
//     console.log(msg);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/*
  ------------
  Async function
  -------------
 */
//If We use await always use try catch block
async function actions() {
  try {
    const userName = await getUsername(10);
    console.log(userName);
    const repo = await getRepo(userName);
    console.log(repo);
    const msg = await getCommits(repo);
    console.log(msg);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Bye");
  }
}

actions();

// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Hi");
//   }, 2000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Hello");
//   }, 2000);
// });

// Promise.all([p1, p2])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Bye");
//   });
