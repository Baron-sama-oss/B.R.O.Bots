const robotsByRole = {
  Tank: [
    { name: "Achilles", ability: "Aegis Stance", abilityDescription: "Deploys a frontal shield that blocks incoming damage and emits a shockwave on activation; reactivating exits shield mode.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 115 },
    { name: "Agni", ability: "Temporal Combustion", abilityDescription: "Generates a burning zone around Agni that applies stacking burn damage to nearby enemies.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 115 },
    { name: "Atlas", ability: "Seismic Impact", abilityDescription: "Slams the ground to create shockwaves that damage, disrupt, and reshape nearby terrain temporarily.", gunSlots: 3, alpha: 0, beta: 2, omega: 1, wsc: 125 },
    { name: "Beowulf", ability: "Grudge", abilityDescription: "Redirects a portion of allied damage taken to Beowulf, storing it to convert later into defense or controlled retaliation.", gunSlots: 3, alpha: 1, beta: 1, omega: 1, wsc: 110 },
    { name: "Gaia", ability: "Rootbind", abilityDescription: "Anchors a biome zone that fortifies allies, blocks enemies, and punishes anyone stubborn enough to contest her ground.", gunSlots: 3, alpha: 0, beta: 1, omega: 2, wsc: 132 },
    { name: "Hercules", ability: "Iron Endurance", abilityDescription: "Becomes immune to weapon damage but takes increased damage from status effects.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 110 },
    { name: "Leviathan", ability: "Tidal Surge", abilityDescription: "Releases a directed tidal wave that displaces enemies and creates a slowing flood zone.", gunSlots: 4, alpha: 0, beta: 3, omega: 1, wsc: 110 },
    { name: "Nemesis", ability: "Reckoning Incarnate", abilityDescription: "Releases an EMP shockwave that damages enemies based on recent damage received and generates a defensive aura that deals EMP.", gunSlots: 3, alpha: 0, beta: 2, omega: 1, wsc: 120 },
    { name: "Poseidon", ability: "Tidal Ordinance", abilityDescription: "Fires a powerful inbuilt cannon that deals heavy impact damage and applies water-based slowdown effects.", gunSlots: 3, alpha: 0, beta: 2, omega: 1, wsc: 120 },
    { name: "Skadi", ability: "Avalanche", abilityDescription: "Leaps and slams down, creating a permafrost zone that slows enemies and periodically emits freezing pulses.", gunSlots: 3, alpha: 0, beta: 2, omega: 1, wsc: 115 },
    { name: "Surtr", ability: "Ragnarok", abilityDescription: "Marks a target with Rupture; dealing enough damage triggers a devastating detonation that destabilizes and cripples the target.", gunSlots: 3, alpha: 0, beta: 2, omega: 1, wsc: 140 },
    { name: "Tiamat", ability: "Venomous Miasma", abilityDescription: "Emits a corrosive cloud that damages enemies and weakens armor over time.", gunSlots: 4, alpha: 0, beta: 4, omega: 0, wsc: 125 },
    { name: "Vulcan", ability: "Eruption", abilityDescription: "Activates inbuilt mortars that bombard an area with burning explosives.", gunSlots: 3, alpha: 0, beta: 2, omega: 1, wsc: 135 },
    { name: "Zhu Bajie", ability: "Heavenly Displacement", abilityDescription: "Marks and swaps position with a target, gaining temporary protection while disorienting the enemy.", gunSlots: 4, alpha: 0, beta: 2, omega: 2, wsc: 120 }
  ],

  Attack: [
    { name: "Ares", ability: "War Bound", abilityDescription: "Creates a warzone that amplifies weapon power while escalating heat and instability for all, with kills extending its duration.", gunSlots: 4, alpha: 0, beta: 4, omega: 0, wsc: 115 },
    { name: "Asmodeus", ability: "Hellfire Ravage", abilityDescription: "Asmodeus enters a Ruinous State, gaining increased movement speed and projecting a destructive aura around himself.", gunSlots: 4, alpha: 2, beta: 2, omega: 0, wsc: 130 },
    { name: "Hachiman", ability: "Heavens Stratagem", abilityDescription: "Deploys combat drones that bombard marked targets while limiting Hachiman's mobility.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 100 },
    { name: "Helios", ability: "Solar Tempest", abilityDescription: "Fires a massive flare rocket that creates a burning energy dome, dealing damage over time in the area.", gunSlots: 3, alpha: 1, beta: 2, omega: 0, wsc: 115 },
    { name: "Kronos", ability: "Hourfall", abilityDescription: "Enters a temporal phase, recording its movement before automatically retracing the exact path after the duration ends.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 100 },
    { name: "Ne Zha", ability: "Flaming Spear", abilityDescription: "Channels focused thermal energy into a precision strike that pierces defenses and intensifies with sustained aggression.", gunSlots: 3, alpha: 1, beta: 2, omega: 0, wsc: 95 },
    { name: "Oni", ability: "Rampage", abilityDescription: "Charges forward in a locked direction, knocking back enemies and gaining damage resistance during the charge.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 110 },
    { name: "Raijin", ability: "Thunderous Barrage", abilityDescription: "Converts weapon fire into chain lightning that jumps between closely grouped enemies.", gunSlots: 4, alpha: 0, beta: 3, omega: 1, wsc: 100 },
    { name: "Serqet", ability: "Corrosion Bloom", abilityDescription: "Infuses weapons with corrosive acid, converting damage into armor-melting effects.", gunSlots: 4, alpha: 2, beta: 2, omega: 0, wsc: 95 },
    { name: "Set", ability: "Sandstorm Assault", abilityDescription: "Surrounds itself with a moving sandstorm that damages enemies and reduces their accuracy while Set is in motion.", gunSlots: 4, alpha: 0, beta: 4, omega: 0, wsc: 90 },
    { name: "Shinigami", ability: "Soul Siphon", abilityDescription: "Deploys Dark Energy homing projectiles that target wounded enemies, dealing partial unrecoverable damage.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 100 },
    { name: "Shiva", ability: "Tandava", abilityDescription: "Enters a ritual combat state where sustained fire generates damaging shockwaves.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 105 },
    { name: "Susanoo", ability: "Stormrend", abilityDescription: "Creates a storm zone that applies lightning strikes to enemies who remain within it.", gunSlots: 4, alpha: 0, beta: 4, omega: 0, wsc: 95 },
    { name: "Zhong Kui", ability: "Demonic Sealing", abilityDescription: "Binds enemies within a triangular seal where hostile actions trigger explosive backlash.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 100 }
  ],

  Scout: [
    { name: "Anubis", ability: "Judgement Dash", abilityDescription: "Dashes in a straight line at extreme speed, carrying and disrupting enemies hit until colliding with terrain.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 90 },
    { name: "Ao Run", ability: "Torrent Bolt", abilityDescription: "Fires a destabilizing bolt that creates a slipstream zone, disrupting enemy movement control and applying sustained pressure.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 90 },
    { name: "Dullahan", ability: "Headless Omen", abilityDescription: "Binds a target to Dullahan's radius, amplifying damage nearby while severely slowing them if they attempt to escape.", gunSlots: 3, alpha: 1, beta: 2, omega: 0, wsc: 72 },
    { name: "Guan Yu", ability: "Hunt Mode", abilityDescription: "Marks a target, causing damage taken to ramp up over time while in line of sight, pausing if vision is broken.", gunSlots: 3, alpha: 3, beta: 0, omega: 0, wsc: 75 },
    { name: "Hermes", ability: "Warp Dash", abilityDescription: "Performs short-range spatial blinks using limited charges for rapid repositioning.", gunSlots: 2, alpha: 2, beta: 0, omega: 0, wsc: 65 },
    { name: "Hermoor", ability: "Death March", abilityDescription: "Temporarily activates a dormant weapon slot, increasing combat power while reducing mobility.", gunSlots: 3, alpha: 2, beta: 0, omega: 1, wsc: 75 },
    { name: "Horus", ability: "Wings of Maat", abilityDescription: "Enters a high-speed glide state that enhances traversal and evasion without revealing enemies.", gunSlots: 3, alpha: 3, beta: 0, omega: 0, wsc: 65 },
    { name: "Janus", ability: "Forked Path", abilityDescription: "Marks an enemy and punishes sudden action changes by slowing movement and delaying abilities.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 85 },
    { name: "Kensei", ability: "Iaijutsu Protocol", abilityDescription: "Performs a high-speed phase dash through a target, applying bleed damage over time.", gunSlots: 3, alpha: 3, beta: 0, omega: 0, wsc: 70 },
    { name: "Loki", ability: "Illusion", abilityDescription: "Deploys decoy holograms and briefly cloaks, confusing enemy targeting systems.", gunSlots:2, alpha: 0, beta: 2, omega: 0, wsc: 60 },
    { name: "Nox", ability: "Lunar Eclipse", abilityDescription: "Creates a localized shadow zone that reduces enemy targeting efficiency and grants Nox defensive bonuses while inside.", gunSlots: 3, alpha: 1, beta: 2, omega: 0, wsc: 85 },
    { name: "Sleipnir", ability: "Stealth Charge", abilityDescription: "Enters a momentum-based movement state that increases speed and evasion while in motion.", gunSlots: 2, alpha: 2, beta: 0, omega: 0, wsc: 65 },
    { name: "Tengu", ability: "Gale Void", abilityDescription: "Generates void-infused winds that increase movement speed and destabilize enemy aim while moving.", gunSlots: 3, alpha: 3, beta: 0, omega: 0, wsc: 75 },
    { name: "Wasp", ability: "Backstab", abilityDescription: "Teleports behind enemies, entering stealth briefly and dealing bonus damage on first strike.", gunSlots: 2, alpha: 2, beta: 0, omega: 0, wsc: 65 }
  ],

  Support: [
    { name: "Asclepius", ability: "Restore", abilityDescription: "Deploys a healing field that restores allied durability over time.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 95 },
    { name: "Garuda", ability: "Vitality Ascension", abilityDescription: "Deploys energy wings that boost allied mobility and gradually restore durability.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 100 },
    { name: "Hecate", ability: "Overclock", abilityDescription: "Releases a shockwave that reloads allied weapons and abilities, then temporarily boosts their performance.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 105 },
    { name: "Medusa", ability: "Petrification", abilityDescription: "Emits a focused gaze that stuns enemies caught in line of sight.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 85 },
    { name: "Morrigan", ability: "Fate Deferral", abilityDescription: "Delays lethal damage on marked allies, allowing brief continued action and reducing enemy rewards if the ally still falls.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 90 },
    { name: "Nidhogg", ability: "Life Steal", abilityDescription: "Converts a portion of damage dealt into healing shared between Nidhogg and nearby allies.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 95 },
    { name: "Okami", ability: "Revelation Sight", abilityDescription: "Reveals enemies in a field; defeating marked targets triggers a healing burst for nearby allies.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 90 },
    { name: "Ophanim", ability: "Axis Shift", abilityDescription: "Creates a spatial field that emits delayed pulses, disrupting incoming projectiles while shortening status effects within its radius.", gunSlots: 4, alpha: 2, beta: 2, omega: 0, wsc: 100 },
    { name: "Orochi", ability: "Celestial Tether", abilityDescription: "Deploys energy tendrils that attach to nearby allies and heal them over time.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 100 },
    { name: "Phoenix", ability: "Cinderwake Pulse", abilityDescription: "Activates a survival timer; if Phoenix drops critically low, releases a shockwave that siphons health from nearby enemies.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 90 },
    { name: "Qilin", ability: "Purity Sanctuary", abilityDescription: "Deploys a sanctified field that caps incoming damage and cleanses or weakens negative effects on allies within it.", gunSlots: 3, alpha: 0, beta: 3, omega: 0, wsc: 100 },
    { name: "Siren", ability: "Harmonous Resonance", abilityDescription: "Emits sonic waves that disrupt enemy control and weaken weapon handling.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 95 },
    { name: "Typhon", ability: "Disruption", abilityDescription: "Emits an energy pulse that disables enemy abilities and slows reload speed for a short duration.", gunSlots: 3, alpha: 1, beta: 2, omega: 0, wsc: 86 },
    { name: "Yaksha", ability: "Time Tags", abilityDescription: "Deploys teleport anchors that allow Yaksha and allies to reposition across the map.", gunSlots: 2, alpha: 0, beta: 2, omega: 0, wsc: 105 }
  ]
};