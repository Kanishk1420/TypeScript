let subs: number | string = '100M';
console.log(subs);

let apirequest: 'pending'| 'success' | 'error' = 'pending';
apirequest = 'error'; // If i want to change only within the given values

const orders = [100, 200, 300];
let currentorder: number | undefined; // currentorder can be number or undefined
for(let order of orders){ 
    if(order === 200){
        currentorder = order;
    }
}
console.log(currentorder); // currentorder can be number or undefined