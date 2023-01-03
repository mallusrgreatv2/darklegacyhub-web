import axios from "./cdn/axios.js";
const plrCountShow = document.querySelector("#player-count");
const maxPlrCountShow = document.querySelector("#max-plr-count");
(async () => {
  const { data: res } = await axios({
    url: "https://api.mcsrvstat.us/2/dlh.kozow.com",
    method: "get",
  });
  const playerNumber = res.players.online;
  const maxPlayers = res.players.max;
    maxPlrCountShow.innerHTML = maxPlayers;
    console.log(Number(plrCountShow.innerHTML))
    console.log(playerNumber)
    while (Number(plrCountShow.innerHTML) < playerNumber) {
        plrCountShow.innerHTML = Number(plrCountShow.innerHTML)++;
  }
})();
