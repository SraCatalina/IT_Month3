const listOfModels = document.querySelector('.listOfModels');
const priceList = document.querySelector('.priceList');

// Open model types

const teslaCars = [
{type: 'Model 3', price: [42990]},
{type: 'Model 3 Performance', price: [53990]},
{type: 'Model Y Long Range', price: [54990]},
{type: 'Model Y Performance', price: [58990]},
{type: 'Model S', price: [89990]},
{type: 'Model S Plaid', price: [109990]},
{type: 'Model X', price: [99990]},
{type: 'Model X Plaid', price: [109990]},
];

let priceForModel3 = teslaCars[0].price;
let priceForModel3Performance = teslaCars[1].price;
let priceForModelYLong = teslaCars[2].price;
let priceForModelYPerformance = teslaCars[3].price;
let priceForModelS = teslaCars[4].price;
let priceForModelSPlaid = teslaCars[5].price;
let priceForModelX = teslaCars[6].price;
let priceForModelXPlaid = teslaCars[7].price;



function addModelInPriceList () {
    
    priceList.innerHTML = listOfModels.value;
};




 // color

/*
    let selectInputs = document.querySelectorAll('select');
    let restInputs = document.querySelector('.additionalOption');
    let allOfInputs = +selectInputs + +restInputs;
    let res = [];
    allOfInputs.forEach(input => {
     res.push(input.value)
    })
    //return res;*/

   // priceList.innerHTML = ;












//model 3
//teslaCars[0].price; teslaCars[1].price 

//model Y
//teslaCars[2].price; teslaCars[3].price

//model S
//teslaCars[4].price; teslaCars[5].price

//model X
//teslaCars[6].price; teslaCars[7].price











/* 

// After MODEL

Model 3 
Model 3 Performance

Model Y
Long Range
Performance

Model S
Model S Plaid

Model X
Model X Plaid



//Model S after 'Interior'

<div class="space">
    <h5>Steering Control</h5>
        <select>
            <option value="steeringWheel" selected>Steering Wheel</option>
            <option value="yokeWheel">Yoke Wheel</option>
        </select>
</div>

// open cream interior 2,000





// Model Y after Interior 

<div class="space">
    <h5>Seat</h5>
        <select>
            <option value="fiveSeat" selected>Five seated interior</option>
            <option value="sevenSeat">Seven seated interior (+ 4,000$)</option>
        </select>
</div>

// Model Y in advanced

<input type="checkbox" name="option5" id="" value="towHitch" />
<label class="checkbox" for="option1">Tow Hitch (+ 1,000$)</label>



// Model X after Interior 

<div class="space">
    <h5>Steering Control</h5>
        <select>
            <option value="steeringWheel" selected>Steering Wheel</option>
            <option value="yokeWheel">Yoke Wheel</option>
        </select>
</div>

<div class="space">
    <h5>Seat</h5>
        <select>
            <option value="fiveSeat" selected>Five seated interior</option>
            <option value="sixSeat" selected>Six seated interior (+ 3,500$)</option>
            <option value="sevenSeat">Seven seated interior (+ 4,000$)</option>
        </select>
</div>

// open cream interior 2,000





//DIV 

*/
