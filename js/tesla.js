const listOfModels = document.querySelector('.listOfModels');
const priceList = document.querySelector('.priceList');
const list = document.querySelector('#list');


// STEP 1. Choose model type

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

const model3 = teslaCars[0].type;
const model3Performance = teslaCars[1].type;
const modelYLongRange = teslaCars[2].type;
const modelYPerformance = teslaCars[3].type;
const modelS = teslaCars[4].type;
const modelSPlaid = teslaCars[5].type;
const modelX = teslaCars[6].type;
const modelXPlaid = teslaCars[7].type;

const priceForModel3 = teslaCars[0].price;
const priceForModel3Performance = teslaCars[1].price;
const priceForModelYLong = teslaCars[2].price;
const priceForModelYPerformance = teslaCars[3].price;
const priceForModelS = teslaCars[4].price;
const priceForModelSPlaid = teslaCars[5].price;
const priceForModelX = teslaCars[6].price;
const priceForModelXPlaid = teslaCars[7].price;

const resultModel3 =`Starting price for ${model3} is ${priceForModel3}`;
const resultModel3Performance =`Starting price for ${model3Performance} is ${priceForModel3Performance}`;
const resultModelYLongRange =`Starting price for ${modelYLongRange} is ${priceForModelYLong}`;
const resultModelYPerformance =`Starting price for ${modelYPerformance} is ${priceForModelYPerformance}`;
const resultModelS =`Starting price for ${modelS} is ${priceForModelS}`;
const resultModelSPlaid =`Starting price for ${modelSPlaid} is ${priceForModelSPlaid}`;
const resultModelX =`Starting price for ${modelX} is ${priceForModelX}`;
const resultModelXPlaid =`Starting price for ${modelXPlaid} is ${priceForModelXPlaid}`;

function addModelInPriceList () {

    let resultModelAndPrice = undefined;

    if (listOfModels.value == 'model3') {
        resultModelAndPrice = resultModel3;
    } else if (listOfModels.value == 'model3P') {
        resultModelAndPrice = resultModel3Performance;
    } else if (listOfModels.value == 'modelYLong') {
        resultModelAndPrice = resultModelYLongRange;
    } else if (listOfModels.value == 'modelYP') {
        resultModelAndPrice = resultModelYPerformance;
    } else if (listOfModels.value == 'modelS') {
        resultModelAndPrice = resultModelS;
    } else if (listOfModels.value == 'modelSPlaid') {
        resultModelAndPrice = resultModelSPlaid;
    } else if (listOfModels.value == 'modelX') {
        resultModelAndPrice = resultModelX;
    } else if (listOfModels.value == 'modelXPlaid') {
        resultModelAndPrice = resultModelXPlaid;
    };

    priceList.innerHTML = resultModelAndPrice;
};


 // STEP 2. Choose color


    //let modelHtml = `<p class="priceList""> ${resultModelAndPrice} </p>`;
    //list.insertAdjacentHTML('beforeend', modelHtml);




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
