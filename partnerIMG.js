const logos = [
  "LeverageEdu.png",
  "Microweb.png",
  "MyClassboard.png",
  "Edugenius.jpeg",
  "Nanoskool.png",
  "Maskeen.png",
  "meritto.png",
  "Edusynk.png",
  "Mesta.png",
  "Hulladek.png",
  "Torrins.png",
  "Educase.png",
  "Viewsonic.png",
  "Jupsoft.png",
  "Mittsure.png",
  "Xrobotics.png",
  "Edudrone.png",
  "Cooledsys.png",
  "Rocksport.png",
  "Auxilo.png",
  "MLE.png",
  "Amity.png",
  "Animugh.png",
  "Codingjr.png",
];

const partnersGrid = document.getElementById("partners-grid");

logos.forEach((logoName) => {
  const logoDiv = document.createElement("div");
  logoDiv.className = "partner-logo";

  const logo = document.createElement("img");
  logo.src = `./Img/Partners/Logo/${logoName}`;
  logo.alt =
    logoName
      .replace(/\.[^/.]+$/, "")
      .replace(/([A-Z])/g, " $1")
      .trim() + " Logo";
  logo.loading = "lazy";

  logoDiv.appendChild(logo);
  partnersGrid.appendChild(logoDiv);
});
