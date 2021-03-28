// mappers

function mapToNegativize(sourceArray) {
  let newSourceArray = [];
  for (const [i, v] of sourceArray.entries()) {
    newSourceArray[i] = 0 - v;
  }
  return newSourceArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  let newSourceArray = [];
  for (const [i, v] of sourceArray.entries()) {
    newSourceArray[i] = v * 2;
  }
  return newSourceArray;
}

function mapToSquare(sourceArray) {
  let newSourceArray = [];
  for (const [i, v] of sourceArray.entries()) {
    newSourceArray[i] = v * v;
  }
  return newSourceArray;
}

// reducers

function reduceToTotal(sourceArray, startingPoint = 0) {
  let i;
  let out = startingPoint;
  for (i = 0; i < sourceArray.length; i++) {
    out += sourceArray[i];
  }
  return out;
}

function reduceToAllTrue(sourceArray) {
  let out = true;
  for (const val of sourceArray) {
    if (!val) {
      out = false;
    }
  }
  return out;
}

function reduceToAnyTrue(sourceArray) {
  let out = false;
  for (const val of sourceArray) {
    if (val) {
      out = true;
    }
  }
  return out;
}
