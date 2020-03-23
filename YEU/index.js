if (document.body.animate) {
  const main = document.querySelector("main");

  /* Don't be too afraid to add an extra 0 to the 200 */
  for (let i = 0; i < 200; ++i) {
    const l = document.createElement("div");
    const startx1 = Math.random() * 100;
    const startx2 = Math.random() * 100;
    const starty1 = Math.random() * 100;
    const starty2 = Math.random() * 100;
    const startr1 = Math.random();
    const startr2 = Math.random();
    const starts1 = Math.random();

    const endx1 = Math.random() * 100;
    const endx2 = Math.random() * 100;
    const endy1 = Math.random() * 100;
    const endy2 = Math.random() * 100;
    const endr1 = Math.random();
    const endr2 = Math.random();
    const ends1 = Math.random();

    l.style.setProperty("--h", Math.random() * 360);

    l.animate(
      {
        transform: [
          `
translate(${startx1}vmin,${starty1}vmin)
rotate(${startr1}turn) 
scale(${starts1}) 
rotate(${startr2}turn) 
translate(${startx2}vmin,${starty2}vmin)`,
          `
translate(${endx1}vmin,${endy1}vmin) 
rotate(${endr1}turn) 
scale(${ends1}) 
rotate(${endr2}turn) 
translate(${endx2}vmin,${endy2}vmin)`
        ]
      },
      {
        iterations: Infinity,
        duration: Math.random() * 5000 + 5000,
        direction: "alternate",
        easing: "ease-in-out"
      }
    );
    l.textContent = ":)";
    main.appendChild(l);
  }

  main.animate(
    {
      transform: ["scale(0)", "scale(1)"]
    },
    {
      duration: 20000,
      easing: "ease-out"
    }
  );
}