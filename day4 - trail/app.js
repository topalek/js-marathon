const borad = document.getElementById('board')
const SQUARE_COUNT = 450;
const colors = ["IndianRed",  "LightCoral",  "Salmon",  "DarkSalmon",  "LightSalmon",  "Crimson",  "Red",  "FireBrick",  "DarkRed", "Pink",  "LightPink",  "HotPink",  "DeepPink",  "MediumVioletRed",  "PaleVioletRed", "LightSalmon",  "Coral",  "Tomato",  "OrangeRed",  "DarkOrange",  "Orange", "Gold",  "Yellow",  "LightYellow",  "LemonChiffon",  "LightGoldenrodYellow",  "PapayaWhip",  "Moccasin",  "PeachPuff",  "PaleGoldenrod",  "Khaki",  "DarkKhaki", "Lavender",  "Thistle",  "Plum",  "Violet",  "Orchid",  "Fuchsia",  "Magenta",  "MediumOrchid",  "MediumPurple",  "RebeccaPurple",  "BlueViolet",  "DarkViolet",  "DarkOrchid",  "DarkMagenta",  "Purple",  "Indigo",  "SlateBlue",  "DarkSlateBlue",  "MediumSlateBlue", "GreenYellow",  "Chartreuse",  "LawnGreen",  "Lime",  "LimeGreen",  "PaleGreen",  "LightGreen",  "MediumSpringGreen",  "SpringGreen",  "MediumSeaGreen",  "SeaGreen",  "ForestGreen",  "Green",  "DarkGreen",  "YellowGreen",  "OliveDrab",  "Olive",  "DarkOliveGreen",  "MediumAquamarine",  "DarkSeaGreen",  "LightSeaGreen",  "DarkCyan",  "Teal", "Aqua",  "Cyan",  "LightCyan",  "PaleTurquoise",  "Aquamarine",  "Turquoise",  "MediumTurquoise",  "DarkTurquoise",  "CadetBlue",  "SteelBlue",  "LightSteelBlue",  "PowderBlue",  "LightBlue",  "SkyBlue",  "LightSkyBlue",  "DeepSkyBlue",  "DodgerBlue",  "CornflowerBlue",  "MediumSlateBlue",  "RoyalBlue",  "Blue",  "MediumBlue",  "DarkBlue",  "Navy",  "MidnightBlue", "Cornsilk",  "BlanchedAlmond",  "Bisque",  "NavajoWhite",  "Wheat",  "BurlyWood",  "Tan",  "RosyBrown",  "SandyBrown",  "Goldenrod",  "DarkGoldenrod",  "Peru",  "Chocolate",  "SaddleBrown",  "Sienna",  "Brown",  "Maroon", "White",  "Snow",  "HoneyDew",  "MintCream",  "Azure",  "AliceBlue",  "GhostWhite",  "WhiteSmoke",  "SeaShell",  "Beige",  "OldLace",  "FloralWhite",  "Ivory",  "AntiqueWhite",  "Linen",  "LavenderBlush",  "MistyRose", "Gainsboro",  "LightGray"];

for(let i=0; i<450;i++){
  const box = document.createElement('div');
  box.classList.add('box');
  box.addEventListener('mouseover',()=>setColor(box))
  box.addEventListener('mouseleave',()=>deleteColor(box))
  borad.appendChild(box);
}

function setColor(el) {
  let color = getRandColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 5px ${color},0 0 10px ${color}`;
}

function deleteColor(el) {
  el.removeAttribute("style");
}

function getRandColor() {
  const idx = Math.round(Math.random()*colors.length)
  return colors[idx];
}