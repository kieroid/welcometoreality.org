let blockHistory = [];
let n = 0;

document.addEventListener("keydown", function(e) {
    if (e.key === 'Enter') {
        //input
        let input = document.getElementById("blockinput")
        let node = document.createElement("li")
        let inputText = input.value;
        input.value = "";

        showBlock(inputText,node)

        blockHistory.push(inputText)
        document.getElementById("history").appendChild(node);

        //remove start text
        if (n === 0) {
            document.getElementById("inputMessage").style.visibility = "hidden";
            n = 1;
        }
    }
});