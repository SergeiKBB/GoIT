// function makeDishWithShef(shefName, dish) {
//     console.log(`Шеф ${shefName} готовит ${dish}`);
// }
//
// makeDishWithShef('Поли', 'пирожок');
// makeDishWithShef('Поли', 'чай');
// makeDishWithShef('Манго', 'тортик');
// makeDishWithShef('Манго', 'кофе');


function makeShef(shefName) {
    return function makeDish(dish) {
        console.log(`Шеф ${shefName} готовит ${dish}`);
    }
}

const Poly = makeShef('Поли');

Poly('пирожок')
Poly('чай')

const Mango = makeShef('Манго');

Mango('тортик')
Mango('кофе')