var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
};

var claimReservation = function (name) {
  var isNameFound = false;
  for (var key in reservations) {
    if (name.toLowerCase() === key.toLowerCase()) {
      isNameFound = true;
      if (reservations[key].claimed) {
        alert("Hello " + name + ". Your reservation is ALREAY claimed");
      }
      else {
        alert("Hello " + name + ". Your reservation is NOT YET claimed");
        reservations[key].claimed = true;
      }
      break;
    }
  }
  if (isNameFound === false) {
    alert("Hello " + name + ". There is nothing under your name, You will be now added");
    reservations[name] = { claimed: false };
  }
};

var addName = function(name) {
  var newReservation = document.createElement("li");
  var newName = document.createTextNode(name);
  newReservation.appendChild(newName);
  var reservationList = document.getElementById("list");
  reservationList.appendChild(newReservation);
};

// before clicking on anything - I display my current database
for (var key in reservations) {
    addName(key);
}

document.getElementById("button").onclick = function() {
  name = document.getElementById("input").value;
  claimReservation(name);
  addName(name);
};
