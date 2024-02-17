const button = document.querySelector("button"); 
const repairList = document.querySelector(".need-repair"); 

const createVehicle = function (type, numWheels, color) {
    const vehicle = {
        type: type,
        numWheels: numWheels,
        color: color
    };
    return vehicle;
};


const car = createVehicle("Lamborghini", 4, "blue");
const bike = createVehicle("Huffy", 2, "red");
const skateboard = createVehicle("Santa Cruz", 4, "black");


const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}

car.needsRepair = true; 
bike.needsRepair = true; 

button.addEventListener("click", function () {
  repairList.innerHTML = "";

  const vehicleRepairList = myVehicles.filter (function (vehicle) {
    return vehicle.needsRepair === true;
  });

  for (let vehicle of vehicleRepairList) {
    let li = document.createElement("li");
    li.innerHTML = `My <span>${vehicle.type}</span> needs some 💜`;
    repairList.append(li);
  }
});


