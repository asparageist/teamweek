// Business Logic

export default function Plant(type, quantity) {
  this.type = type;
  this.quantity = quantity;
}

Plant.prototype.calculateCost = function () {
  let cost = 0;
  switch (this.type) {
    case "flower":
      cost = 2.99;
      break;
    case "tree":
      cost = 39.99;
      break;
    case "fruit-tree":
      cost = 49.99;
      break;
    case "shrub":
      cost = 6.99;
      break;
    case "vegetable-seeds":
      cost= 4.99;
      break;
    case "squash-seeds":
      cost = 4.99;
      break;
    case "flower-starts":
      cost = 12.99;
      break;
    case "veggie-starts":
      cost = 14.99;
      break;

  }
  return cost * this.quantity;
};