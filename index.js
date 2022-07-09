function enterCity () {
  let city = prompt("Enter a city"); 
  
     

  if (city === "Milan"|| city === "Paris" || city === "New York") {
  alert("It is currently 19°C (66°F) in ${city} with a humidity of 80%");
  } 

  else if (city !=="St") {
  
  prompt ("Sorry, we don't know the weather for this city, try going to",  "https://www.google.com/search?q=weather+sydney");
  
  }
  }
   