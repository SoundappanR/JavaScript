// Higher order function --> function which passes function as the parameter or returns functions

console.log("Hi Helloo");
getUser(10, function (user) {
  console.log("user ---> ", user);

  getRepos(user.username, function (repo) {
    console.log("Username: ", repo.name, "----Repo: ", repo.reponame);

    getCommit(repo.reponame, function (msg) {
      console.log(msg);
    });
  });
});
console.log("End");

function getUser(id, users) {
  setTimeout(function () {
    console.log("Team Hunting.........");
    let user = { id: id, username: "Wolf" };
    users(user);
  }, 3000);
}

function getRepos(userName, repoName) {
  setTimeout(function () {
    console.log(`Repositories of ${userName}`);
    let repo = { name: userName, reponame: "Wolf's Repo" };
    repoName(repo);
  }, 2000);
}

function getCommit(repoName, repo) {
  setTimeout(function () {
    console.log(`Commit of ${repoName}`);
    let msg = "1st commit done";
    repo(msg);
  });
}
