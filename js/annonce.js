(function () {
    const seconde = 1000,
          minute = seconde * 60,
          heure = minute * 60,
          jour = heure * 24;
          
    let journee = new Date(),
        dd = String(journee.getDate()).padStart(2, "0"),
        mm = String(journee.getMonth() + 1).padStart(2, "0"),
        yyyy = journee.getFullYear(),
        annee = yyyy + 1,
        jrMois = "08/25/",
        jourJ = jrMois + yyyy;
    
    journee = mm + "/" + dd + "/" + yyyy;
    if (journee > jourJ) {
      jourJ = jrMois + annee;
    }
  
    
    const countDown = new Date(jourJ).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("jr").innerText = Math.floor(distance / (jour)),
            document.getElementById("hr").innerText = Math.floor((distance % (jour)) / (heure)),
            document.getElementById("min").innerText = Math.floor((distance % (heure)) / (minute)),
            document.getElementById("sec").innerText = Math.floor((distance % (minute)) / seconde);
      
        }, 0)
    }());