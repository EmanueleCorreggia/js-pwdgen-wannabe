// il tuo nome
var nome= prompt('il tuo nome');
console.log (nome);
// il tuo cognome
var cognome= prompt('il tuo cognome');
console.log (cognome);
// il tuo colore
var colore= prompt('il tuo colore preferito');
console.log (colore);
// password generator
var password =nome + cognome + colore +'19';
console.log (password)
document.getElementById('password-generator').innerHTML = password;
