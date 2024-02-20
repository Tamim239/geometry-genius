// one item another use other method that one function try to call some function...
function getInputById(inputField){
const inputFieldText = document.getElementById(inputField);
const inputFieldValue = inputFieldText.value;
const inputValue = parseFloat(inputFieldValue);
return inputValue;
}

function setInnerTextById (elements, area){
    const element = document.getElementById(elements);
     element.innerText = area;
}

// triangle
function triangleBtn(){
    const inputBase = getInputById("inputTriangleBase");
    const inputHeight = getInputById("inputTriangleHeight");
    const inputArea = 0.5 * inputBase * inputHeight;
    setInnerTextById("triangleArea", inputArea);
}

// rectangle
function rectangleBtn(){
    const inputWidth = getInputById("inputRectangleWidth");
    const inputLength = getInputById("inputRectangleWidth");
    const inputArea = inputWidth * inputLength;
    setInnerTextById("rectangleArea", inputArea);
}


// parallelogram 
function parallelogramBtn(){
    const inputBase = getInputById('inputParallelogramBase');
    const inputHeight = getInputById("inputParallelogramHeight");
    const inputArea = inputBase * inputHeight;
    setInnerTextById("parallelogramArea",inputArea);
}

// rhombusBtn
function rhombusBtn(){
    const inputD1 = getInputById("inputRhombusD1");
    const inputD2 = getInputById("inputRhombusD2");
    const inputArea = 0.5 * inputD1 * inputD2;
    setInnerTextById("rhombusArea", inputArea);
}

//Pentagon
function pentagonBtn(){
    const inputP = getInputById("inputPentagonP");
    const inputB = getInputById("inputPentagonB");
    const inputArea = 0.5 * inputP * inputB;
    setInnerTextById("PentagonArea", inputArea);
}

// Ellipse
function ellipseBtn(){
    const inputA = getInputById("inputEllipseA");
    const inputB = getInputById("inputEllipseB");
    const inputArea =(Math.PI * (inputA * inputB)) ;
    setInnerTextById("EllipseArea", inputArea);
}