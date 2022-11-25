/**
 * Discount
 * 
 * const orders = [
  {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},
  {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},
  {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},
  {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},
  {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},
  {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
  {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
  {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
  {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
  {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
  {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
  {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
  {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
  {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
];

Chaque objet du tableau orders représente une commande. Chaque commande contient 
un certain nombre de propriétés, dont certaines ne nous seront pas utiles. Par exemple, 
les numéros de produits ne nous 
intéressent pas vraiment.

Là où notre regard doit s'arrêter, c'est sur le timestamp et le price de chaque commande. 
La propriété price, c'est le prix, facile. Le timestamp, c'est la date de la commande au 
format de l'heure Unix. 
C'est une façon particulière d'exprimer une date, car il s'agit du nombre exact de secondes
écoulées entre le 1er janvier 1970 à minuit pile et un instant T. 
Par exemple, le 2 janvier 1970 à minuit pile, 
le timestamp Unix était égal à 24 * 60 * 60 secondes, soit 86400. C'est un format 
de date très courant en informatique, autant s'y habituer.

Vous allez donc devoir créer une fonction capable de prendre ce tableau en paramètres, 
et de modifier le prix des commandes effectuées en juillet 2020 
afin d'y appliquer votre réduction de 20 %.

/!\ Vous ne devez pas altérer les types de valeurs. Les prix vous sont donnés 
en tant que chaînes de caractères, vous rendrez une chaîne de caractères. 
Un prix de "30" auquel on applique une réduction de 20 % 
sera changé pour "24", non pas 24.
Indices

Vous pouvez attaquer l'exercice sans lire la suite. Voici toutefois quelques indices 
pour les moins costauds d'entre vous :
    Vous pourriez avoir besoin de jeter un œil du côté de Date.
    Une petite équation, comme ça, pour le plaisir de retirer 50 % au nombre 10 : 5 = 10 - 10 * 50 / 100.
 */

// PROGRAM

// function prixReal(tableau){
//   for(let i=0; i<=tableau.length;i++){
//     let dateSup= Date.UTC(2020,7)/1000;
//     let dateInf= Date.UTC(2020,6)/1000;
//     let timestampInMilliseconds=(tableau[i].timestamp);
//     if((timestampInMilliseconds<dateSup) && (timestampInMilliseconds>dateInf)){
//       tableau[i].price-=((tableau[i].price)*20)/100;
//       console.log(tableau[i]);
//     }
//   }
// }

// const orders = [
//   {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},
//   {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},
//   {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},
//   {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},
//   {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},
//   {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
//   {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
//   {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
//   {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
//   {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
//   {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
//   {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
//   {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
//   {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
// ];
// prixReal(orders);

//END PROGRAM


const orders = [
  {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},
  {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},
  {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},
  {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},
  {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},
  {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},
  {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},
  {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},
  {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},
  {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},
  {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},
  {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},
  {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},
  {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}
];

orders.forEach(item=>{
  item.timestamp=new Date(Number(item.timestamp)*1000);
});

console.log(orders);
function Orgnization(timestamp,price){
    let month=timestamp.getMonth();
    let year= timestamp.getFullYear();
    if(month==6 && year==2020){
      let a=Number(price)- Number((price)*0.2);
      price=String(a);
      console.log(price);
    }
  return price;
}
orders.forEach(item=>{
  item.price=Orgnization(item.timestamp,item.price)
});
// Orgnization(orders)


