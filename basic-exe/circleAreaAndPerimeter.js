function calculateCircle(r) {
    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    let formattedArea = area.toFixed(2);
    let formattedPerimeter = perimeter.toFixed(2);

    console.log(formattedArea);
    console.log(formattedPerimeter);
}