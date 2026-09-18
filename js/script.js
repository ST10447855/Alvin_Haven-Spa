// Small interactions used by the Part 2 prototype.
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            const open = nav.classList.toggle("open");
            menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }

    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.closest(".faq-item");
            const isOpen = item.classList.toggle("open");
            button.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
    });

    document.querySelectorAll("form[data-demo-form]").forEach(form => {
        form.addEventListener("submit", event => {
            event.preventDefault();
            const message = form.querySelector(".form-success");
            if (message) message.style.display = "block";
            form.reset();
        });
    });
});
