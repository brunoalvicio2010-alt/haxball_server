// ===============================
//  LOS MANIWWARRIORS ROOM 🥶
//  Script Headless para HaxBall
// ===============================

var room = HBInit({
  roomName: "Los Maniwwarriors 🥶",
  maxPlayers: 10,
  public: true,
  noPlayer: true,
  token: "PEGÁ_ACÁ_TU_TOKEN"
});

room.setDefaultStadium("Classic");
room.setScoreLimit(5);
room.setTimeLimit(3);
room.setTeamsLock(true);

function updateAdmins() { 
  var players = room.getPlayerList();
  if (players.length == 0) return;
  if (players.find(p => p.admin) != null) return;
  room.setPlayerAdmin(players[0].id, true);
}

room.onPlayerJoin = function(player) {
  room.sendChat("🔥 Bienvenido " + player.name + " a Los Maniwwarriors 🥶 🔥");
  updateAdmins();
}

room.onPlayerLeave = function(player) {
  room.sendChat("👋 " + player.name + " salió de la sala.");
  updateAdmins();
}

room.onTeamGoal = function(team) {
  var teamName = team == 1 ? "🔴 ROJOS" : "🔵 AZULES";
  room.sendChat("⚽ Gol de los " + teamName + "!");
}
