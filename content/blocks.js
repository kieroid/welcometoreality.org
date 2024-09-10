function html(t) {
    const div = document.createElement('div');
    div.innerHTML = t;
    return div;
}
function showBlock(inputText, node) {
    node.appendChild(document.createTextNode(`${inputText}`))
    node.appendChild(document.createElement("br"))

    const command = inputText.trim().split(' ')[0];
    let args = inputText.trim().split(' ').slice(1);
    if (command !== "") {
        try {
            node.appendChild(commands[command](args))
        } catch(err) {}
    }
}
const commands = {

};