import fetch from "node-fetch";
import { JSDOM } from "jsdom";

// Descarga el motor headless de HaxBall
const headlessUrl = "https://www.haxball.com/headless";
const response = await fetch(headlessUrl);
const html = await response.text();
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
const window = dom.window;

// Espera que cargue el script del juego
await new Promise(resolve => window.addEventListener("load", resolve));

// Inicializa la sala
window.HBInit({
  roomName: "Los Maniwwarriors 🥶",
  maxPlayers: 10,
  public: true,
  noPlayer: true,
  token: "thr1.AAAAAGjkasXO2aH6X2PczQ.R1h2K6qbo6c",
  onRoomLink: link => console.log("Room link:", link)
});

