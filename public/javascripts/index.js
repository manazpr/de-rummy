// connect to Moralis server
Moralis.initialize("yDeNWRdYxowoYFn5w2Mc4wpmO37l8cZaUdsm7oxP");
Moralis.serverURL = "https://qkgczyetins7.usemoralis.com:2053/server";

function launch(){
    let user = Moralis.User.current();
    if (!user) {
      console.log("PLEASE LOG IN WITH METAMASK!!")
    }
    else{
      console.log(user.get("ethAddress") + " " + "logged in")
    }

  }

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.Web3.authenticate();
    launch()
  }
  console.log("logged in user:", user);
  if (user) {
    user = await Moralis.Web3.authenticate();
    window.location.replace("/bet.html");
  }
  console.log("logged in user:", user);
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
  location.reload();
}


document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;