const list = document.querySelectorAll(".item");
const a = list.length;
console.log(`Numbers of categories: ${a}`);

list.forEach((item) => {
    const found_h2 = item.querySelector("h2").textContent;
    const found_li = item.querySelectorAll("li").length;
    console.log(found_h2);
    console.log(found_li);
});