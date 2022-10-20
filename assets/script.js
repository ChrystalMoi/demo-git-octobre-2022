/* ecouteur du form (du formulaire quand le bouton est cliqué) */
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Valider !");
})