function tierClass(tier) {
  return "tier-" + tier.toLowerCase();
}

function toFileName(name) {
  return name.toLowerCase();
}

const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const type = params.get("type");

let weapon = null;

if (type === "Siege") {
  weapon = siegeWeaponsData.find(w => w.name === name);
}
else if (weaponsByType[type]) {
  weapon = weaponsByType[type].find(w => w.name === name);
}

if (!weapon) {
  document.body.innerHTML = "<h1>Weapon not found</h1>";
} else {
document.getElementById("weaponName").textContent = weapon.name;
// Mount (Alpha/Beta/Omega)
document.getElementById("weaponMount").textContent = type;

// Archetypes (your new system)
const typesEl = document.getElementById("weaponTypes");

if (weapon.types && weapon.types.length > 0) {
  typesEl.textContent = weapon.types.join(" • ");
} else {
  typesEl.textContent = "—";
}
  const tierEl = document.getElementById("weaponTier");
tierEl.textContent = weapon.tier;
tierEl.className = `tier ${tierClass(weapon.tier)}`;

  document.getElementById("weaponSL").textContent = weapon.sl;
const htElement = document.getElementById("weaponHT");

if (type === "Siege") {
  htElement.previousElementSibling.textContent = "CT";
  htElement.textContent = weapon.ct ?? "—";
} else {
  htElement.textContent = weapon.ht;
}

  const img = document.getElementById("weaponImage");
  img.classList.add("fade-img");

  img.src = `Weapons/${type}/${toFileName(weapon.name)}.png`;
  img.onload = () => img.classList.add("loaded");
  img.onerror = () => {
    img.src = "Weapons/warper.png";
    img.classList.add("loaded");
  };
}
