function randomNum() {
    return (Math.floor(Math.random() * 256))
}
function randomColor() {
    return `rgba(${randomNum()},${randomNum()},${randomNum()})`
}
export {randomColor}