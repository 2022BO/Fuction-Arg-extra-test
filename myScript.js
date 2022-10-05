const paintIt = function (item) {
  console.log("The wall has been painted" + ": " + item);
  //console.log("The north wall has been painted orange");
};
paintIt("red");
paintIt("green");
paintIt();

const paintSouth = "The south-east wall has been painted grey";

const paintNorth = "The north wall has been painted orange";
paintIt(paintNorth + " and " + paintSouth);
paintIt(paintSouth);

const paintAllWalls = "the rest of the walls are serveral colors";

paintIt(paintNorth + " and " + paintSouth + " and " + paintAllWalls);
paintIt(paintNorth + " dotted " + " and " + paintAllWalls + " like a Rainbow ");

const paintPainting = function (item) {
  console.log("the artist made a painting :" + item);
};
const artPop = " like Andy Warhol ";
const artPointillism = " like George Seurat ";

paintPainting(artPop + " or " + artPointillism + " ? ");
