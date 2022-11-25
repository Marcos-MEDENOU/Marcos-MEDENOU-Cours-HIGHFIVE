let color=["Rouge", "Bleu"];
console.log("Affichage de l'élement a index1");
console.log(color[1]);
console.log("Etat actuel du tableau")
console.log(color);
console.log("ajout de violet");
color.push("violet");
console.log(color);
console.log("ajout de jaune");
color.push("jaune");
console.log(color);
console.log("ajout de Beige");
color.push("Beige");
console.log(color);
console.log("suppression de Rouge");
color.shift();
console.log(color);
console.log("suppression de Beige");
color.pop();
console.log(color);
color.splice(1,3,"marcos");
console.log(color);

let analphabet=["a", "b", "c", "d", "e", "f"];
analphabet.splice(2,0,"g","h");
console.log(analphabet);

// let valor=analphabet.slice(1,3);
// console.log(typeof(analphabet));
// console.log(valor) +"<br>"+ console.log(analphabet.toString());
// console.log(typeof(analphabet.toString()));
// console.log(analphabet.join("+"));
console.log(typeof(analphabet.join("+")));