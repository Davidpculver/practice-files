'use strict'

const companies = [
    {name: 'company one', category: 'finance', start: 1981, end: 2003},
    {name: 'company two', category: 'retail', start: 1992, end: 2008},
    {name: 'company three', category: 'auto', start: 1999, end: 2007},
    {name: 'company four', category: 'retail', start: 1989, end: 2010},
    {name: 'company five', category: 'technology', start: 2009, end: 2014},
    {name: 'company six', category: 'finance', start: 1987, end: 2010},
    {name: 'company seven', category: 'auto', start: 1986, end: 1996},
    {name: 'company eight', category: 'technology', start: 2011, end: 2016},
    {name: 'company nine', category: 'retail', start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// companies.forEach(function (company) {
//     console.log(company.name)
// })

// const canDrink = ages.filter(function(age) {
//     if(age >= 21){
//         return true;
//     }
// });

// const canDrink = ages.filter(age => age >= 21);
//
// console.log(canDrink)
//
// const retailCompanies = companies.filter(function (company) {
//     if(company.category === 'retail'){
//         return true;
//     }
// })

// const retailCompanies = companies.filter(company => company.category === 'retail')

// console.log(retailCompanies)
//
// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies)

// const tenYears = companies.filter(company => (company.end - company.start) >= 10)
// console.log(tenYears)


//create array of company names using map

// const companyNames = companies.map(function(company) {
//     return company.name;
// })

// const testMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// })

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
// console.log(testMap)

// const agesSquare = ages.map(age => Math.sqrt(age));
// // const agesTimesTwo = ages.map(age => (age*2));
// console.log(agesSquare)
// // console.log(agesTimesTwo)
//
// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => (age*2));
//
// console.log(ageMap)


//sort companies by start year
// const sortedCompanies = companies.sort(function (comp1, comp2) {
//     if(comp1.start > comp2.start){
//         return 1;
//     } else {
//         return -1;
//     }
// })


const sortedCompanies = companies.sort((comp1, comp2) => (comp1.start > comp2.start ?  1 : -1))

console.log(sortedCompanies)

const sortAges = ages.sort((a,b) => (a-b));
console.log(sortAges)











