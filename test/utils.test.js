import { findById } from '../cart/utils.js';

const test = QUnit.test;

//Find by ID Test

const products = [
    {
        id: 1,
        name:`Granny's Bonnet`,
        image:'../assets/Aquilegia.jpeg',
        type:'Flower',
        height:'15-20 in',
        light:'partial shade',
        price: 6.99,
    },
    {
        id: 2,
        name:'Carnations',
        image:'../assets/carnations.jpeg',
        type:'Flower',
        height:'25-30 in',
        light:'full sun',
        price: 4.49,
    },
    {
        id: 3,
        name:'Misc Large Dahlias',
        image:'../assets/large dahlias.jpeg',
        type:'Mix',
        height:'3-4 ft',
        light:'full sun',
        price: 7,
    }];

test(`findById should take in an ID and return the object matching the input ID`, (expect) => {

    const expected = `{
        "height":'25-30 in',
        "id": 2,
        "image":'../assets/carnations.jpeg',
        "light":'full sun',
        "name":'Carnations',
        "price": 4.49,
        "type":'Flower'
    }`;
    
    const actual = findById(products, 2);

    expect.deepEqual(actual, expected);
});