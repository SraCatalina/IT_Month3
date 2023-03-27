// Key const elements
const listOfModels = document.querySelector(".listOfModels");
const listOfColors = document.querySelector(".listOfColors");
const listOfWheels = document.querySelector(".listOfWheels");
const listOfInterior = document.querySelector(".listOfInterior");
const additionalOption = document.querySelector(".additionalOption");

const resultModel = document.querySelector(".resultModel");
const resultColor = document.querySelector(".resultColor");
const resultWheels = document.querySelector(".resultWheels");
const resultInterior = document.querySelector(".resultInterior");
const resultAdvanced = document.querySelector(".resultAdvanced");

/*
const autopilotOption = document.querySelector('#addAutopilot');
const fullSelfDrivingOption = document.querySelector('#addFullSelfDriving');
const chargingOption = document.querySelector('#addCharging');
const towHitchOption = document.querySelector('addTowHitch');
*/

// Wheels const elements
const wheelsModel318 = document.querySelector("#model318");
const wheelsModel319 = document.querySelector("#model319");
const wheelsModelS19 = document.querySelector("#modelS19");
const wheelsModelS21 = document.querySelector("#modelS21");
const wheelsModelY19 = document.querySelector("#modelY19");
const wheelsModelY20 = document.querySelector("#modelY20");
const wheelsModelX20 = document.querySelector("#modelX20");
const wheelsModelX22 = document.querySelector("#modelX22");

// Advanced const elements
const autopitot = document.getElementById("addAutopitot");
const fullSelfDriving = document.getElementById("addFullSelfDriving");
const charging = document.getElementById("addCharging");
const towHitch = document.getElementById("addTowHitch");

// STEP 1. Choose model type

const teslaCars = [
  { type: "Model 3", price: [42990] },
  { type: "Model 3 Performance", price: [53990] },
  { type: "Model Y Long Range", price: [54990] },
  { type: "Model Y Performance", price: [58990] },
  { type: "Model S", price: [89990] },
  { type: "Model S Plaid", price: [109990] },
  { type: "Model X", price: [99990] },
  { type: "Model X Plaid", price: [109990] },
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

const resultModel3 = `Starting price for ${model3} is ${priceForModel3}`;
const resultModel3Performance = `Starting price for ${model3Performance} is ${priceForModel3Performance}`;
const resultModelYLongRange = `Starting price for ${modelYLongRange} is ${priceForModelYLong}`;
const resultModelYPerformance = `Starting price for ${modelYPerformance} is ${priceForModelYPerformance}`;
const resultModelS = `Starting price for ${modelS} is ${priceForModelS}`;
const resultModelSPlaid = `Starting price for ${modelSPlaid} is ${priceForModelSPlaid}`;
const resultModelX = `Starting price for ${modelX} is ${priceForModelX}`;
const resultModelXPlaid = `Starting price for ${modelXPlaid} is ${priceForModelXPlaid}`;

function addModelInPriceList() {
  let resultModelAndPrice = undefined;

  if (listOfModels.value == "notAnOption") {
    resultModelAndPrice = `Please choose a model, 0`;
    listOfColors.disabled = true;
    listOfWheels.disabled = true;
    listOfInterior.disabled = true;
  } else if (listOfModels.value == "model3") {
    resultModelAndPrice = resultModel3;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModelY19.classList.add("wheelsY");
    wheelsModelY20.classList.add("wheelsY");
    wheelsModelS19.classList.add("wheelsS");
    wheelsModelS21.classList.add("wheelsS");
    wheelsModelX20.classList.add("wheelsX");
    wheelsModelX22.classList.add("wheelsX");
    wheelsModel318.classList.remove("wheels3");
    wheelsModel319.classList.remove("wheels3");
  } else if (listOfModels.value == "model3P") {
    resultModelAndPrice = resultModel3Performance;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModelY19.classList.add("wheelsY");
    wheelsModelY20.classList.add("wheelsY");
    wheelsModelS19.classList.add("wheelsS");
    wheelsModelS21.classList.add("wheelsS");
    wheelsModelX20.classList.add("wheelsX");
    wheelsModelX22.classList.add("wheelsX");
    wheelsModel318.classList.remove("wheels3");
    wheelsModel319.classList.remove("wheels3");
  } else if (listOfModels.value == "modelYLong") {
    resultModelAndPrice = resultModelYLongRange;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModel318.classList.add("wheels3");
    wheelsModel319.classList.add("wheels3");
    wheelsModelS19.classList.add("wheelsS");
    wheelsModelS21.classList.add("wheelsS");
    wheelsModelX20.classList.add("wheelsX");
    wheelsModelX22.classList.add("wheelsX");
    wheelsModelY19.classList.remove("wheelsY");
    wheelsModelY20.classList.remove("wheelsY");
  } else if (listOfModels.value == "modelYP") {
    resultModelAndPrice = resultModelYPerformance;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModel318.classList.add("wheels3");
    wheelsModel319.classList.add("wheels3");
    wheelsModelS19.classList.add("wheelsS");
    wheelsModelS21.classList.add("wheelsS");
    wheelsModelX20.classList.add("wheelsX");
    wheelsModelX22.classList.add("wheelsX");
    wheelsModelY19.classList.remove("wheelsY");
    wheelsModelY20.classList.remove("wheelsY");
  } else if (listOfModels.value == "modelS") {
    resultModelAndPrice = resultModelS;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModelY19.classList.add("wheelsY");
    wheelsModelY20.classList.add("wheelsY");
    wheelsModel318.classList.add("wheels3");
    wheelsModel319.classList.add("wheels3");
    wheelsModelX20.classList.add("wheelsX");
    wheelsModelX22.classList.add("wheelsX");
    wheelsModelS19.classList.remove("wheelsS");
    wheelsModelS21.classList.remove("wheelsS");
  } else if (listOfModels.value == "modelSPlaid") {
    resultModelAndPrice = resultModelSPlaid;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModelY19.classList.add("wheelsY");
    wheelsModelY20.classList.add("wheelsY");
    wheelsModel318.classList.add("wheels3");
    wheelsModel319.classList.add("wheels3");
    wheelsModelX20.classList.add("wheelsX");
    wheelsModelX22.classList.add("wheelsX");
    wheelsModelS19.classList.remove("wheelsS");
    wheelsModelS21.classList.remove("wheelsS");
  } else if (listOfModels.value == "modelX") {
    resultModelAndPrice = resultModelX;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModelY19.classList.add("wheelsY");
    wheelsModelY20.classList.add("wheelsY");
    wheelsModel318.classList.add("wheels3");
    wheelsModel319.classList.add("wheels3");
    wheelsModelS19.classList.add("wheelsS");
    wheelsModelS21.classList.add("wheelsS");
    wheelsModelX20.classList.remove("wheelsX");
    wheelsModelX22.classList.remove("wheelsX");
  } else if (listOfModels.value == "modelXPlaid") {
    resultModelAndPrice = resultModelXPlaid;
    listOfColors.disabled = false;
    listOfWheels.disabled = false;
    listOfInterior.disabled = false;
    wheelsModelY19.classList.add("wheelsY");
    wheelsModelY20.classList.add("wheelsY");
    wheelsModel318.classList.add("wheels3");
    wheelsModel319.classList.add("wheels3");
    wheelsModelS19.classList.add("wheelsS");
    wheelsModelS21.classList.add("wheelsS");
    wheelsModelX20.classList.remove("wheelsX");
    wheelsModelX22.classList.remove("wheelsX");
  }

  resultModel.innerHTML = resultModelAndPrice + ` $`;
}

// STEP 2. Choose color

const colorsList = [
  { color: "white", price: [0] },
  { color: "black", price: [1500] },
  { color: "silver", price: [1500] },
  { color: "blue", price: [1500] },
  { color: "red", price: [3000] },
];

const priceForWhite = colorsList[0].price;
const priceForBlack = colorsList[1].price;
const priceForSilver = colorsList[2].price;
const priceForBlue = colorsList[3].price;
const priceForRed = colorsList[4].price;

function addColorInPriceList() {
  let resultColorAndPrice = undefined;

  if (listOfColors.value == "white") {
    resultColorAndPrice = `Perl White colour: ` + priceForWhite;
  } else if (listOfColors.value == "black") {
    resultColorAndPrice = `Solid Black colour: ` + priceForBlack;
  } else if (listOfColors.value == "silver") {
    resultColorAndPrice = `Midnight Silver metallic colour: ` + priceForSilver;
  } else if (listOfColors.value == "blue") {
    resultColorAndPrice = `Deep Blue metallic colour: ` + priceForBlue;
  } else if (listOfColors.value == "red") {
    resultColorAndPrice = `Ultra Red colour: ` + priceForRed;
  }

  resultColor.innerHTML = resultColorAndPrice + ` $`;
}

// STEP 3. Choose wheels

const wheelsList = [
  { type: "modelX", size: "20", price: [0] },
  { type: "modelXPlaid", size: "22", price: [5500] },
  { type: "modelS", size: "19", price: [0] },
  { type: "modelSPlaid", size: "21", price: [4500] },
  { type: "modelYLongRange", size: "19", price: [0] },
  { type: "modelYPerformance", size: "20", price: [2000] },
  { type: "model3", size: "18", price: [0] },
  { type: "model3Performance", size: "19", price: [1500] },
];

const priceForWheelsX = wheelsList[0].price;
const priceForWheelsXPlaid = wheelsList[1].price;
const priceForWheelsS = wheelsList[2].price;
const priceForWheelsSPlaid = wheelsList[3].price;
const priceForWheelsYLongRange = wheelsList[4].price;
const priceForWheelsYPerformance = wheelsList[5].price;
const priceForWheels3 = wheelsList[6].price;
const priceForWheels3Performance = wheelsList[7].price;

function addWheelsInPriceList() {
  let resultWheelsAndPrice = undefined;

  if (listOfWheels.value == "model3") {
    resultWheelsAndPrice = `Disk 18' aero: ` + priceForWheels3;
  } else if (listOfWheels.value == "model3P") {
    resultWheelsAndPrice = `Disk 19' sport: ` + priceForWheels3Performance;
  } else if (listOfWheels.value == "modelY") {
    resultWheelsAndPrice = `Disk 19' gemini: ` + priceForWheelsYLongRange;
  } else if (listOfWheels.value == "modelYP") {
    resultWheelsAndPrice = `Disk 20' induction: ` + priceForWheelsYPerformance;
  } else if (listOfWheels.value == "modelS") {
    resultWheelsAndPrice = `Disk 19' tempest: ` + priceForWheelsS;
  } else if (listOfWheels.value == "modelSP") {
    resultWheelsAndPrice = `Disk 21' arachnid: ` + priceForWheelsSPlaid;
  } else if (listOfWheels.value == "modelX") {
    resultWheelsAndPrice = `Disk 20' cyberstream: ` + priceForWheelsX;
  } else if (listOfWheels.value == "modelXP") {
    resultWheelsAndPrice = `Disk 22' turbine: ` + priceForWheelsXPlaid;
  }
  resultWheels.innerHTML = resultWheelsAndPrice + ` $`;
}

// STEP 4. Choose Interior

const interiors = [
  { color: "All black", price: [0] },
  { color: "Black & White", price: [1000] },
  { color: "Cream", price: [2000] },
];

const interiorBlack = interiors[0].price;
const interiorBlackWhite = interiors[1].price;
const interiorCream = interiors[2].price;

function addInteriorInPriceList() {
  let resultInteriorsAndPrice = undefined;

  if (listOfInterior.value == "BlackBlack") {
    resultInteriorsAndPrice = `Black Interior: ` + interiorBlack;
  } else if (listOfInterior.value == "BlackAndWhite") {
    resultInteriorsAndPrice = `Black & White Interior: ` + interiorBlackWhite;
  } else if (listOfInterior.value == "Cream") {
    resultInteriorsAndPrice = `Cream Interior: ` + interiorCream;
  }
  resultInterior.innerHTML = resultInteriorsAndPrice + ` $`;
}

// STEP 5. Advanced

// если поставлена галочка, создать "ли"

const advancedList = [
  { type: "Autopitot", price: [6000] },
  { type: "Full Self-Driving", price: [15000] },
  { type: "Charging", price: [500] },
  { type: "Tow Hitch", price: [1000] },
];

const autopitotPrice = advancedList[0].price;
const fullSelfDrivingPrice = advancedList[1].price;
const chargingPrice = advancedList[2].price;
const towHitchPrice = advancedList[3].price;

function addAutopilotOptionInPriceList() {
  let checkboxAutopilot = undefined;
  if ((additionalOption.checked = true)) {
    checkboxAutopilot = `Added Autopilot: ` + autopitotPrice;
    let additionalOptionHtml = `<li> ${checkboxAutopilot} $ </li>`;
    resultAdvanced.insertAdjacentHTML("beforeend", additionalOptionHtml);
  } else if ((additionalOption.checked = false)) {
    checkboxAutopilot = "";
    let additionalOptionHtml = `<li> ${checkboxAutopilot} $ </li>`;
    resultAdvanced.insertAdjacentHTML("beforeend", additionalOptionHtml);
  }

  //let addResultFromCheckbox = checkboxesChecked[0].value;
  //let modelHtml = `<li> ${addResultFromCheckbox} </li>`;
  //resultAdvanced.insertAdjacentHTML("beforeend", modelHtml);
}

/*

function getCheckedCheckBoxes() {
  var selectedCheckBoxes = document.querySelectorAll('input.checkbox:checked');

  var checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);

  console.log(checkedValues);

  return checkedValues; // для использования в нужном месте
}




function addAutopilotOptionInPriceList() {
  let checkboxAutopilot = undefined;
  if (additionalOption.value == "autopilotHalf") {
    checkboxAutopilot = `Added Autopilot: ` + autopitotPrice;
    let additionalOptionHtml = `<li> ${checkboxAutopilot} $ </li>`;
    resultAdvanced.insertAdjacentHTML("beforeend", additionalOptionHtml);
  } else {
    
  }

else if (additionalOption.value == "autopilotFull") {
    checkboxChecked =
      `Added Full Self-Driving capability: ` + fullSelfDrivingPrice;
  } else if (additionalOption.value == "charging") {
    checkboxChecked = `Added Charging: ` + chargingPrice;
  } else if (additionalOption.value == "hitch") {
    checkboxChecked = `Added Tow Hitch: ` + towHitchPrice;
  }





function addAdvancedOptionsInPriceList() {
  let additionalOptions = document.getElementsByClassName(".additionalOption");
  let checkboxesChecked = [];
  for (let i = 0; i < additionalOptions.length; i++) {
    if (additionalOptions[i].checked) {
      checkboxesChecked.push(additionalOptions[i].value);
    }
    return checkboxesChecked;
  }
  let addResultFromCheckbox = checkboxesChecked.value;
  let modelHtml = `<li> ${addResultFromCheckbox} </li>`;
  resultAdvanced.insertAdjacentHTML("beforeend", modelHtml);
}



let modelHtml = `<li></li>`


${resultModelAndPrice} 
resultAdvanced.insertAdjacentHTML('beforeend', modelHtml);

*/
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
