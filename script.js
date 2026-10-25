/* =====================
   INITIAL CHECKS & STATE
===================== */
const isIndexPage = document.getElementById("robotGrid") !== null;
const isSiegePage = document.getElementById("siegeGrid") !== null;

if (typeof siegeData === "undefined") {
  console.warn("Siege data not loaded.");
}

/* =====================
   HELPERS
===================== */
function tierClass(tier) {
  return "tier-" + tier.toLowerCase();
}

function toFileName(name) {
  return name.toLowerCase();
}

/* =====================
   GLOBAL STATE
===================== */
// Primary containers
const grid = document.getElementById("robotGrid") || document.getElementById("siegeGrid");
const filter = document.getElementById("roleFilter");
const searchInput = document.getElementById("searchInput") || document.getElementById("siegeSearch");

let currentView = isSiegePage ? "siege" : "robots";
let siegeMode = "engines"; // Default mode for siege view

/* =====================
   DATA PROCESSING
===================== */
// Flatten robot data for easier filtering
const allRobots = (typeof robotsByRole !== "undefined")
  ? Object.entries(robotsByRole).flatMap(
      ([role, robots]) => robots.map(r => ({ ...r, role }))
    )
  : [];

/* =====================
   ROBOT RENDERER
===================== */

function setupRobotSorter() {
  if (!filter) return;

  filter.style.display = "block";
  filter.innerHTML = `<option value="all">ALL ROLES</option>`;

  if (typeof robotsByRole !== "undefined") {
    Object.keys(robotsByRole).forEach(role => {
      const opt = document.createElement("option");
      opt.value = role;
      opt.textContent = role;
      filter.appendChild(opt);
    });
  }

  filter.onchange = renderRobots;
}

function renderRobots() {
  if (!grid) return;

  grid.innerHTML = "";

  const selected = filter ? filter.value : "all";
  const query = searchInput ? searchInput.value.toLowerCase() : "";

  allRobots
    .filter(r =>
      (selected === "all" || r.role === selected) &&
      r.name.toLowerCase().includes(query)
    )
    .forEach(robot => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img class="fade-img"
             src="Robots/${toFileName(robot.name)}.png"
             onload="this.classList.add('loaded')"
             onerror="this.src='Weapons/Warper.png'; this.classList.add('loaded')">
        <div class="card-content">
          <h3>${robot.name}</h3>
          <div class="tag">${robot.role}</div>
        </div>
      `;

      card.onclick = () => {
        window.location.href =
          `Robot.html?name=${encodeURIComponent(robot.name)}`;
      };

      grid.appendChild(card);
    });
}
/* =====================
   WEAPON RENDERER
===================== */
function setupWeaponSorter() {
  if (!filter) return;
  filter.style.display = "block";
  filter.innerHTML = `
    <option value="all">ALL TYPES</option>
    <option value="Alpha">ALPHA</option>
    <option value="Beta">BETA</option>
    <option value="Omega">OMEGA</option>
  `;
  filter.onchange = renderWeapons;
}

function renderWeapons() {
  if (!grid) return;
  grid.innerHTML = "";
  const selected = filter ? filter.value : "all";
  const query = searchInput ? searchInput.value.toLowerCase() : "";

  Object.entries(weaponsByType).forEach(([type, weapons]) => {
    if (selected !== "all" && selected !== type) return;

    weapons.forEach(weapon => {
      if (!weapon.name.toLowerCase().includes(query)) return;

      const card = document.createElement("div");
      card.className = "card";
      card.onclick = () => {
        window.location.href =
  `Weapon.html?name=${encodeURIComponent(weapon.name)}&type=${type}`;
      };
      card.innerHTML = `
        <img class="fade-img"
             src="Weapons/${type}/${toFileName(weapon.name)}.png"
             onload="this.classList.add('loaded')"
             onerror="this.src='Weapons/warper.png'; this.classList.add('loaded')">
        <div class="card-content">
          <h3>${weapon.name}</h3>
          <div class="tag">${type}</div>
<div class="subtag">
  ${(weapon.types || []).join(" • ")}
</div>
          <div class="tier ${tierClass(weapon.tier)}">${weapon.tier}</div>
        </div>
      `;
      grid.appendChild(card);
    });
  });
}

/* =====================
   SIEGE RENDERER
===================== */
function renderSiegeEngines() {
  if (!grid) return;
  grid.innerHTML = "";
  const query = searchInput ? searchInput.value.toLowerCase() : "";

  siegeData // Fixed variable name from enginesData
    .filter(e => e.name.toLowerCase().includes(query))
    .forEach(engine => {
      const card = document.createElement("div");
      card.className = "card";
card.onclick = () => {
  window.location.href =
    `SiegeProfile.html?name=${encodeURIComponent(engine.name)}`;
};
      card.innerHTML = `
        <img class="fade-img"
             src="Siege/${engine.name.toLowerCase()}.png"
             onload="this.classList.add('loaded')"
             onerror="this.src='Siege/warper.png'; this.classList.add('loaded')">
        <div class="card-content">
          <h3>${engine.name}</h3>
          <div class="tag">ENGINE</div>
        </div>
      `;
      grid.appendChild(card);
    });
}

function renderSiegeWeapons() {
  if (!grid) return;
  grid.innerHTML = "";
  const query = searchInput ? searchInput.value.toLowerCase() : "";

  siegeWeaponsData // Fixed variable name from siegeWeapons
    .filter(w => w.name.toLowerCase().includes(query))
    .forEach(weapon => {
      const card = document.createElement("div");
      card.className = "card";
card.onclick = () => {
  window.location.href =
    `Weapon.html?name=${encodeURIComponent(weapon.name)}&type=Siege`;
};
      card.innerHTML = `
        <img class="fade-img"
             src="Weapons/Siege/${toFileName(weapon.name)}.png"
             onload="this.classList.add('loaded')"
             onerror="this.src='Weapons/warper.png'; this.classList.add('loaded')">
        <div class="card-content">
          <h3>${weapon.name}</h3>
          <div class="tag">SIEGE WEAPON</div>
        </div>
      `;
      grid.appendChild(card);
    });
}

function renderSiege() {
  if (siegeMode === "engines") {
    renderSiegeEngines();
  } else {
    renderSiegeWeapons();
  }
}

/* =====================
   VIEW SYNC & INIT
===================== */
function syncUIToView() {
  // Update header text if it exists
  const header = document.querySelector(".section-header h2");
  if (header) header.textContent = currentView.toUpperCase();

  if (currentView === "robots") {
    setupRobotSorter();
    renderRobots();
  } else if (currentView === "weapons") {
    setupWeaponSorter();
    renderWeapons();
  } else if (currentView === "siege") {
    if (filter) filter.style.display = "none";
    renderSiege();
  }
}

// Global search listener
if (searchInput) {
  searchInput.addEventListener("input", () => {
    if (currentView === "robots") renderRobots();
    else if (currentView === "weapons") renderWeapons();
    else if (currentView === "siege") renderSiege();
  });
}

// Siege toggle listeners (for Siege.html or Index-Siege view)
const engineBtn = document.getElementById("engineBtn");
const weaponBtn = document.getElementById("weaponBtn");

if (engineBtn && weaponBtn) {
  engineBtn.addEventListener("click", () => {
    siegeMode = "engines";
    engineBtn.classList.add("active");
    weaponBtn.classList.remove("active");
    renderSiege();
  });

  weaponBtn.addEventListener("click", () => {
    siegeMode = "weapons";
    weaponBtn.classList.add("active");
    engineBtn.classList.remove("active");
    renderSiege();
  });
}

// Navigation listeners
document.querySelectorAll(".secondary-nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    if (!view) return;

    currentView = view;

    document.querySelectorAll(".secondary-nav button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    syncUIToView();
  });
});

// Run on startup
syncUIToView();
