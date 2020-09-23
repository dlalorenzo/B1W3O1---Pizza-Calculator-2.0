   const priceSmall = 4.99; 
   const priceMeduim= 6.99;
   const priceLarge= 8.99;

   var small = prompt("how many small ⌀12");
   var meduim = prompt("how many meduim ⌀15");
   var large = prompt("how many large ⌀20");

   var totalSmall= small * priceSmall;
   var totalMeduim= meduim * priceMeduim;
   var totalLarge= large * priceLarge;
   var total= totalSmall + totalMeduim + totalLarge;

   document.write("total small pizza "+small+" total price &euro;"+totalSmall+"<br>");
   document.write("total meduim pizza "+meduim+" total price &euro;"+totalMeduim+"<br>");
   document.write("total large pizza "+large+" total price &euro;"+totalLarge+"<br>");
   document.write("total price &euro; "+total);

   alert("large pizza "+large +"\nmeduim pizza "+meduim +"\nsmall pizza "+small);
