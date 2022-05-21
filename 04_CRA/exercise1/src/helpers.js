const choice = items => (items[Math.floor(Math.random() * items.length)])
const remove = (items, item) => {
    let removed = undefined;
    for (let i = 0; i < items.length; i++) {
        if (item === items[i]) {
            removed = items.splice(i, 1);
            break;
        }
    }
    return removed;
}
export { choice, remove };