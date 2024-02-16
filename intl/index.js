let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

animals.sort((a,b) => Intl.Collator.compare(a,b))

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК