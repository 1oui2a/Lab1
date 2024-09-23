// function that multiplies each no. under 70 by 2
const ages = [25, 31, 42, 77]; 

let a = ages.map( // .map function
    (item)=>{ // this arrow function will assign var item to each element
        if(item < 70)
            return item * 2;
        else
            return item;
    } 
);

console.log(a);
