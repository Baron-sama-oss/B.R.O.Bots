function toFileName(name) {
  return name.toLowerCase().replace(/\s+/g, "_");
}

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

const engine = siegeData.find(e => e.name === name);

if (!engine) {
  document.body.innerHTML = "<h1>Siege Engine not found</h1>";
} else {

  document.getElementById("siegeName").textContent = engine.name;
  document.getElementById("siegeAbility").textContent = engine.ability;
  document.getElementById("siegeHP").textContent = engine.hp;
  document.getElementById("siegeSpeed").textContent = engine.speed;
  document.getElementById("siegeSLC").textContent = engine.slc;

  const img = document.getElementById("siegeImage");

  img.src = `Siege/${toFileName(engine.name)}.png`;

  img.onload = () => img.classList.add("loaded");

  img.onerror = () => {
    img.src = "Siege/placeholder.png";
    img.classList.add("loaded");
  };
}