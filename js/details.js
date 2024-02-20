function rectangleBtn() {
    const inputRectangleWidth = document.getElementById("inputRectangleWidth");
    const inputWidthValue = inputRectangleWidth.value;
    const width = parseFloat(inputWidthValue);
    console.log(width);

    const inputRectangleLength = document.getElementById("inputRectangleLength");
    const inputLengthValue = inputRectangleLength.value;
    const length = parseFloat(inputLengthValue);

    const areaRectangle = width * length;
    const rectangleArea = document.getElementById("rectangleArea");
    rectangleArea.innerText = areaRectangle;
}