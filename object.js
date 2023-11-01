const student = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Razz', 'Salman','Amir'],
    act: function(){
        console.log('number 1 sakib khan');
    },
    car: {
        brand: 'Tesla',
        made: 2024,
        manufacturer: {
            name:'tesla',
            CEO: 'Elon Musk',
             
        }
    }
   

}
// console.log(student);
console.log(student.act);
student.act();