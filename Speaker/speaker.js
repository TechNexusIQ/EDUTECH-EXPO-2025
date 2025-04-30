fetch('speakers.json')
  .then(response => response.json())
  .then(speakers => {
    const speakersGrid = document.getElementById("speakers-grid");
    const sortedSpeakers = speakers.sort((a, b) => a.name.localeCompare(b.name));

    sortedSpeakers.forEach(speaker => {
      const card = document.createElement("div");
      card.className = "speaker-card";

      const img = document.createElement("img");
      img.src = speaker.photo;
      img.alt = speaker.name;
      img.className = "speaker-img";

      const name = document.createElement("h3");
      name.className = "speaker-name";
      name.textContent = speaker.name;

      const overlay = document.createElement("div");
      overlay.className = "speaker-overlay";
      overlay.innerHTML = `
        <div class="speaker-hover-overlay">
          <h3 class="overlay-name">${speaker.name}</h3>
          <p class="overlay-details">${speaker.details}</p>
        </div>
      `;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(overlay);
      speakersGrid.appendChild(card);
    });
  })
  .catch(error => console.error("Failed to load speakers:", error));
