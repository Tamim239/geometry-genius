function triangleBtn (){
    const inputTriangleBase = document.getElementById("inputTriangleBase");
    const inputBaseValue = inputTriangleBase.value;
    const base = parseFloat(inputBaseValue);

    const inputTriangleHeight = document.getElementById("inputTriangleHeight");
    const inputHeightValue = inputTriangleHeight.value;
    const height = parseFloat(inputHeightValue);
    const area = 0.5 * base * height;

    const triangleArea = document.getElementById("triangleArea");
    triangleArea.innerText = area;
}