
// apply saved theme on page load

        const savedTheme = localStorage.getItem("x");

        if (savedTheme) {
            document.body.className = savedTheme;
        }

        /* Function to change theme */
        function setTheme(mode) {
            document.body.className = mode;
            localStorage.setItem("x", mode);}