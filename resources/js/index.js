import axios from "./cdn/axios.js";
import "./cdn/jquery.js";
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
  const num = Number(plrCountShow.innerHTML);
  while (num < playerNumber) {
    plrCountShow.innerHTML = num++;
  }
})();
