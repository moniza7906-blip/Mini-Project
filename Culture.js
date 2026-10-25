document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    const galleryImages =
        document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            // Create popup
            const overlay = document.createElement("div");

            overlay.className = "image-overlay";

            overlay.innerHTML = `
                <div class="image-viewer">

                    <span class="close-image">&times;</span>

                    <img src="${this.src}"
                         alt="Varanasi Heritage">

                </div>
            `;

            document.body.appendChild(overlay);


            // Close button
            const closeButton =
                overlay.querySelector(".close-image");

            closeButton.addEventListener("click", function () {
                overlay.remove();
            });


            // Close when clicking outside image
            overlay.addEventListener("click", function (event) {

                if (event.target === overlay) {
                    overlay.remove();
                }

            });

        });

    });


    const elements = document.querySelectorAll(
        ".card, .tradition, .festival, .food-card, .story-box"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const popup =
                document.querySelector(".image-overlay");

            if (popup) {
                popup.remove();
            }

        }

    });

    console.log(
        "Welcome to the Culture & Traditions page of Varanasi Heritage!"
    );

});