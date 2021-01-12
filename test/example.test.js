// IMPORT MODULES 
import { countsAsYes, percentage } from './utils.js';

const test = QUnit.test;

test('Will return true when given input that begins with correct letter', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsYes('yes', 'Y', 'y');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('will return false when given input that begins with correct letter', (expect) => {
    const expected = false;

    const actual = countsAsYes('no', 'n', 'N');

    expect.equal(actual, expected)
});


test('function will return a whole number percentage of the fraction from two numbers', (expect) => {
    const expected = 75;

    const actual = percentage(3, 4);

    expect.equal(actual, expected);
});