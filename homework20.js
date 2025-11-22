//я думав дуже довго поки не згадав про апендчайлд 😭
const gallery = document.querySelector(".gallery");

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        gallery.appendChild(gallery.firstElementChild);
    }

    if (event.key === "ArrowRight") {
        gallery.insertBefore(gallery.lastElementChild, gallery.firstElementChild);
    }
});


const input = document.querySelector("input");
const boxes = document.getElementById("boxes");
const render = document.querySelector('[data-action="render"]');
render.addEventListener("click", () => {
    let size = 30;
    for (let i = 0; i < input.value; i++) {
        const div = document.createElement("div");
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = randomColor;
        boxes.appendChild(div);
        size += 10;
    }
});
const destroy = document.querySelector('[data-action="destroy"]');
destroy.addEventListener("click", () => {
    boxes.innerHTML = "";
});