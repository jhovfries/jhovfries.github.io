let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #081F5C;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #7096D1;">Ing en Diseño aprendiendo Programación Web. :)</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
