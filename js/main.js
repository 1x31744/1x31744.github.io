new WinBox("Limit Viewport", {
    top: 50,
    right: 50,
    bottom: 100,
    left: 50,
    border: "0.1em",
    background: "#000fff",
});

new WinBox("hellp em im stuck in hole",     {
    title: "Custom Color",
    background: "#ff005d",
    border: 4
});
let b1 = document.getElementById('button1');
b1.addEventListener('click', () => {
    document.getElementById('p2').classList.add("brown_button");
    document.getElementById('p2').textContent = ":P"
});

new WinBox("New winbox");