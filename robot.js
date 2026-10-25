let currentLoadoutSL = 0;
const slotSelections = [];

// Get robot name from URL
const params = new URLSearchParams(window.location.search);
const robotName = params.get("name");

// Flatten robot data
const allRobots = Object.entries(robotsByRole).flatMap(
  ([role, robots]) => robots.map(r => ({ ...r, role }))
);

const robot = allRobots.find(r => r.name === robotName);

if (!robot) {
  document.body.innerHTML = "<h1>Robot not found</h1>";
} else {
  document.getElementById("robotName").textContent = robot.name;
  document.getElementById("robotRole").textContent = robot.role;
  document.getElementById("robotAbility").textContent = robot.ability;
  document.getElementById("robotAbilityDescription").textContent = robot.abilityDescription;

  document.getElementById("gunSlots").textContent = robot.gunSlots;
  document.getElementById("alpha").textContent = robot.alpha;
  document.getElementById("beta").textContent = robot.beta;
  document.getElementById("omega").textContent = robot.omega;
  document.getElementById("wsc").textContent = robot.wsc;

  renderWeaponLoadout(robot);
}

const img = document.getElementById("robotImage");
img.classList.add("fade-img");

const src = `robots/${robot.name.toLowerCase()}.png`;

// Attach handlers FIRST
img.onload = () => img.classList.add("loaded");
img.onerror = () => {
  img.src = "robots/warper.png";
  img.classList.add("loaded");
};

// THEN set src (important)
img.src = src;

// Handle cached images
const imageModeBtn = document.getElementById("imageModeBtn");
const modelModeBtn = document.getElementById("modelModeBtn");
const robotModel = document.getElementById("robotModel");
const modelStatus = document.getElementById("modelStatus");

imageModeBtn.addEventListener("click", () => {
  img.hidden = false;
  robotModel.hidden = true;
  robotModel.setAttribute("aria-hidden", "true");
  imageModeBtn.classList.add("active");
  modelModeBtn.classList.remove("active");
  imageModeBtn.setAttribute("aria-pressed", "true");
  modelModeBtn.setAttribute("aria-pressed", "false");
  modelStatus.textContent = "";
});

modelModeBtn.addEventListener("click", () => {
  img.hidden = true;
  robotModel.hidden = false;
  robotModel.setAttribute("aria-hidden", "false");
  imageModeBtn.classList.remove("active");
  modelModeBtn.classList.add("active");
  imageModeBtn.setAttribute("aria-pressed", "false");
  modelModeBtn.setAttribute("aria-pressed", "true");

  if (!robotModel.getAttribute("src")) {
    const modelName = robot.name === "Qilin" ? "Qiilin" : robot.name;
    robotModel.src = `RobotModels/${encodeURIComponent(modelName)}.glb`;
    modelStatus.textContent = "Loading 3D model… Large model files may take a moment.";
  }
});

robotModel.addEventListener("load", () => {
  modelStatus.textContent = "Drag to rotate. Scroll or pinch to zoom.";
});
robotModel.addEventListener("error", () => {
  modelStatus.textContent = "Could not load this 3D model. Open the website through a local web server and check that the model file is available.";
});
if (img.complete) {
  img.classList.add("loaded");
}
/* =====================
   WEAPON COMPATIBILITY
===================== */
function createWeaponSlot(label, slotType, robotWSC) {
  const container = document.createElement("div");
  container.className = "weapon-slot";

  const title = document.createElement("label");
  title.textContent = label;

  const select = document.createElement("select");

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "— Select Weapon —";
  defaultOpt.dataset.sl = "0";
  select.appendChild(defaultOpt);

  const compatibleWeapons = weaponsByType[slotType];

  compatibleWeapons.forEach(weapon => {
    const opt = document.createElement("option");
    opt.value = weapon.name;
    opt.dataset.sl = weapon.sl;               // ✅ STORE SL
    opt.textContent = `${weapon.name} (SL ${weapon.sl})`;
    select.appendChild(opt);
  });

  let previousSL = 0;

  select.addEventListener("change", () => {
    const selectedOpt = select.selectedOptions[0];
    const newSL = parseInt(selectedOpt.dataset.sl, 10) || 0;

    // Update total loadout SL
    currentLoadoutSL = currentLoadoutSL - previousSL + newSL;
    previousSL = newSL;

    // Enforce global WSC
    enforceWSC(robotWSC);
  });

  slotSelections.push(select);                // ✅ REGISTER SLOT

  container.appendChild(title);
  container.appendChild(select);

  return container;
}

function renderWeaponLoadout(robot) {
currentLoadoutSL = 0;
slotSelections.length = 0;
  const slotContainer = document.getElementById("weaponSlots");
  slotContainer.innerHTML = "";

  // Alpha slots
  for (let i = 0; i < robot.alpha; i++) {
    slotContainer.appendChild(
      createWeaponSlot(
        `Alpha Slot ${i + 1}`,
        "Alpha",
        robot.wsc
      )
    );
  }

  // Beta slots
  for (let i = 0; i < robot.beta; i++) {
    slotContainer.appendChild(
      createWeaponSlot(
        `Beta Slot ${i + 1}`,
        "Beta",
        robot.wsc
      )
    );
  }

  // Omega slots
  for (let i = 0; i < robot.omega; i++) {
    slotContainer.appendChild(
      createWeaponSlot(
        `Omega Slot ${i + 1}`,
        "Omega",
        robot.wsc
      )
    );
  }
}
function enforceWSC(robotWSC) {
  slotSelections.forEach(select => {
    Array.from(select.options).forEach(opt => {
      if (!opt.dataset.sl) return;

      const weaponSL = parseInt(opt.dataset.sl, 10);

      // Disable if selecting it would exceed WSC
      if (currentLoadoutSL + weaponSL > robotWSC && opt.selected === false) {
        opt.disabled = true;
      } else {
        opt.disabled = false;
      }
    });
  });
}
