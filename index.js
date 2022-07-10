document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.querySelector("#toggle-button");
    const checkbox = document.querySelector("#theme-checkbox");
    toggler.addEventListener("click", () => {
        let theme = checkbox.checked ? "dark" : "light";
        checkbox.checked = !checkbox.checked;
        document.documentElement.setAttribute("data-theme", theme);
        toggleSwitch();
    });

    const toggleSwitch = () => {
        let icons = toggler.querySelectorAll("div");
        icons.forEach((icon) => {
            icon.classList.toggle("d-none");
        });
    };

    const cursor = document.querySelector("#cursor");
    function track(e) {
        cursor.style.top = `${e.pageY}px`;
        cursor.style.left = `${e.pageX}px`;
    }
    document.addEventListener("mousemove", track, false);
})
