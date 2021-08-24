import { findById } from '../cart/utils.js';

const test = QUnit.test;

//Find by ID Test

const products = [
    {
        id: 1,
        name:`Granny's Bonnet`
    },
    {
        id: 2,
        name:'Carnations'
    },
    {
        id: 3,
        name:'Misc Large Dahlias'
    }];

test(`findById should take in an ID and return the object matching the input ID`, (expect) => {

    const expected = `{
        id: 2,
        name: "Carnations"
    }`;
    
    const actual = findById(products, 2);

    expect.equal(actual, expected);
});