const scene = document.querySelector(".scene");
const colors = ["red", "blue", "yellow", "green", "pink"];

const layer1Lights = [
  { top: "30%", left: "50%" },
  { top: "70%", left: "35%" },
  { top: "70%", left: "65%" },
];

const layer2Lights = [
  { top: "20%", left: "50%" },
  { top: "50%", left: "30%" },
  { top: "50%", left: "70%" },
  { top: "80%", left: "25%" },
  { top: "80%", left: "50%" },
  { top: "80%", left: "75%" },
];

const layer3Lights = [
  { top: "15%", left: "50%" },
  { top: "40%", left: "28%" },
  { top: "40%", left: "72%" },
  { top: "65%", left: "20%" },
  { top: "65%", left: "50%" },
  { top: "65%", left: "80%" },
  { top: "90%", left: "35%" },
  { top: "90%", left: "65%" },
];

const layer4Lights = [
  { top: "12%", left: "50%" },
  { top: "35%", left: "25%" },
  { top: "35%", left: "75%" },
  { top: "60%", left: "15%" },
  { top: "60%", left: "50%" },
  { top: "60%", left: "85%" },
  { top: "85%", left: "10%" },
  { top: "85%", left: "35%" },
  { top: "85%", left: "65%" },
  { top: "85%", left: "90%" },
];

// Add lights to each layer
const layer1El = document.getElementById("layer1");
layer1Lights.forEach((pos, i) => {
  const light = document.createElement("div");
  light.className = `light ${colors[i % colors.length]}`;
  light.style.top = pos.top;
  light.style.left = pos.left;
  layer1El.appendChild(light);
});

const layer2El = document.getElementById("layer2");
layer2Lights.forEach((pos, i) => {
  const light = document.createElement("div");
  light.className = `light ${colors[i % colors.length]}`;
  light.style.top = pos.top;
  light.style.left = pos.left;
  layer2El.appendChild(light);
});

const layer3El = document.getElementById("layer3");
layer3Lights.forEach((pos, i) => {
  const light = document.createElement("div");
  light.className = `light ${colors[i % colors.length]}`;
  light.style.top = pos.top;
  light.style.left = pos.left;
  layer3El.appendChild(light);
});

const layer4El = document.getElementById("layer4");
layer4Lights.forEach((pos, i) => {
  const light = document.createElement("div");
  light.className = `light ${colors[i % colors.length]}`;
  light.style.top = pos.top;
  light.style.left = pos.left;
  layer4El.appendChild(light);
});

// Add ornaments to tree layers
const ornamentColors = ["🔴", "🔵", "🟡", "🟢", "🟣", "🟠"];
const ornamentPositions = [
  { layer: "layer1", top: "55%", left: "50%" },
  { layer: "layer2", top: "35%", left: "45%" },
  { layer: "layer2", top: "35%", left: "55%" },
  { layer: "layer3", top: "30%", left: "40%" },
  { layer: "layer3", top: "55%", left: "60%" },
  { layer: "layer3", top: "75%", left: "28%" },
  { layer: "layer4", top: "25%", left: "38%" },
  { layer: "layer4", top: "48%", left: "65%" },
  { layer: "layer4", top: "72%", left: "20%" },
  { layer: "layer4", top: "72%", left: "80%" },
];

ornamentPositions.forEach((pos, i) => {
  const ornament = document.createElement("div");
  ornament.className = "ornament";
  ornament.textContent = ornamentColors[i % ornamentColors.length];
  ornament.style.top = pos.top;
  ornament.style.left = pos.left;
  ornament.style.fontSize = "24px";
  ornament.style.animationDelay = i * 0.2 + "s";
  document.getElementById(pos.layer).appendChild(ornament);
});

const presentEmojis = ["🎁", "🎀", "🎁", "🎀", "🎁", "🎁"];
const presentPositions = [
  { left: "calc(50% - 280px)" },
  { left: "calc(50% - 150px)" },
  { left: "calc(50% - 40px)" },
  { left: "calc(50% + 70px)" },
  { left: "calc(50% + 180px)" },
  { left: "calc(50% + 290px)" },
];

presentPositions.forEach((pos, i) => {
  const present = document.createElement("div");
  present.className = "present";
  present.textContent = presentEmojis[i];
  present.style.left = pos.left;
  present.style.fontSize = Math.random() * 12 + 50 + "px";
  present.style.animationDelay = i * 0.3 + "s";
  scene.appendChild(present);
});

// Add snowflakes
for (let i = 0; i < 60; i++) {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "%";
  snowflake.style.animationDuration = Math.random() * 5 + 6 + "s";
  snowflake.style.animationDelay = Math.random() * 10 + "s";
  snowflake.style.fontSize = Math.random() * 18 + 18 + "px";
  scene.appendChild(snowflake);
}
