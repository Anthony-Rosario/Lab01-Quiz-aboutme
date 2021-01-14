// IMPORT MODULES 
import { countsAsYes, percentage } from './utils.js';

const test = QUnit.test;
//Tested countsAsYes Function
test('Will return true when given input that begins with correct letter', (expect) => {
    
    const expected = true;
    
    
    const actual = countsAsYes('yes', 'Y', 'y');

   
    expect.equal(actual, expected);
});


test('will return false when given input that begins with correct letter', (expect) => {
    const expected = false;

    const actual = countsAsYes('no', 'n', 'N');

    expect.equal(actual, expected);
});

//Tested Percentage Function
test('function will return a whole number percentage of the fraction from two numbers', (expect) => {
    const expected = 75;

    const actual = percentage(3, 4);

    expect.equal(actual, expected);
});