// var car = {
//     model: "911",
//     make: "porsche",
//     color: "black",
//     year: "2014"
// };

var carFactory = {
    build: function(car) {
        // console.log('carFactory build method', car);
    },

    updateProperties: function(car) {
        car.speed = 100;
        car.color = 'blue';

        return car.color;
    },

    getCar: function() {
        var car = {
            model: "911",
            make: "porsche",
            color: "black",
            year: "2014"
        };

        return car;
    },

    init: function() {
        var car = carFactory.getCar();
        carFactory.updateProperties(car);
        carFactory.build(car);

        return [car, carFactory.updateProperties(car), carFactory.build(car)];
    },

    yearMade: '1987',

    manufacturer: 'Porsche' 
};

carFactory.init();
console.log('calling out main object', carFactory);

function hereIs(carFactory) {
    carFactory.engineSize = '4 cylinder';
}

hereIs(carFactory);

console.log('using function to call an object', carFactory.engineSize);




