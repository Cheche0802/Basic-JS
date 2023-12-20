

const heroes = ['Batman', 'Superman', 'Wonderwoman', 'Aquaman'];

console.warn('For Traditiona');

for (let i = 0; i < 5; i++) {
    console.log(heroes[i]);
    
}

console.warn('forma correcta');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i])
    
}

console.warn('For in');

for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of');

for (let i of heroes) {
    console.log(i)
}