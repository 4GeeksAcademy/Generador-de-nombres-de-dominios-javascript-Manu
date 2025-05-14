// Lista de pronombre, adjetivos y sustantivos
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
// Aqui utilizo los bucles
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      let domain = p + a + n + ".com";
      console.log(domain);
    }
  }
}
// Estas serian las extensiones
let extensions = ['.com', '.net', '.us', '.io'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        let domain = p + a + n + ext;
        console.log(domain);
      }
    }
  }
}