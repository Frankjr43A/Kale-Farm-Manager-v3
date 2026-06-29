document.addEventListener("DOMContentLoaded", () => {

        // Navigation buttons
            const navButtons = document.querySelectorAll(".nav-btn");
                const pages = document.querySelectorAll(".page");

                    function showPage(pageId) {

                            pages.forEach(page => {
                                        page.classList.remove("active");
                                                });

                                                        navButtons.forEach(button => {
                                                                    button.classList.remove("active");
                                                                            });

                                                                                    const selectedPage = document.getElementById(pageId);

                                                                                            if (selectedPage) {
                                                                                                        selectedPage.classList.add("active");
                                                                                                                }

                                                                                                                        const activeButton = document.querySelector(`[data-page="${pageId}"]`);

                                                                                                                                if (activeButton) {
                                                                                                                                            activeButton.classList.add("active");
                                                                                                                                                    }

                                                                                                                                                        }

                                                                                                                                                            navButtons.forEach(button => {

                                                                                                                                                                    button.addEventListener("click", () => {

                                                                                                                                                                                const page = button.dataset.page;

                                                                                                                                                                                            showPage(page);

                                                                                                                                                                                                    });

                                                                                                                                                                                                        });

                                                                                                                                                                                                            // Today's Date
                                                                                                                                                                                                                const today = new Date();

                                                                                                                                                                                                                    const options = {
                                                                                                                                                                                                                            weekday: "long",
                                                                                                                                                                                                                                    year: "numeric",
                                                                                                                                                                                                                                            month: "long",
                                                                                                                                                                                                                                                    day: "numeric"
                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                            const welcome = document.querySelector(".welcome-card");

                                                                                                                                                                                                                                                                if (welcome) {

                                                                                                                                                                                                                                                                        const date = document.createElement("p");

                                                                                                                                                                                                                                                                                date.style.marginTop = "10px";

                                                                                                                                                                                                                                                                                        date.textContent = today.toLocaleDateString("en-KE", options);

                                                                                                                                                                                                                                                                                                welcome.appendChild(date);

                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                        showPage("dashboardPage");

                                                                                                                                                                                                                                                                                                        });
})