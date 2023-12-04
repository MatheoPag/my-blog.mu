a = document.querySelectorAll("a")
for (const a_ of a) {
a_.addEventListener("click", error_link)
};
function error_link(){
    if (this.name !== "insta") {
        window.alert("These links are just aesthetic");
    }
}