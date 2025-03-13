document.addEventListener("DOMContentLoaded", function () {
    const lengthSlider = document.getElementById("lengthSlider");
    const lengthValue = document.getElementById("lengthValue");
    const generateBtn = document.getElementById("generateBtn");
    const passwordBox = document.getElementById("passwordBox");
    const copyText = document.getElementById("copyText");

    lengthSlider.addEventListener("input", () => {
        lengthValue.textContent = lengthSlider.value;
    });

    generateBtn.addEventListener("click", () => {
        const length = lengthSlider.value;
        const password = generatePassword(length);
        passwordBox.value = password;
        copyText.textContent = "Click to copy";
        copyText.classList.remove("copied");
    });

    passwordBox.addEventListener("click", () => {
        if (passwordBox.value) {
            navigator.clipboard.writeText(passwordBox.value);
            copyText.textContent = "Copied to clipboard!";
            copyText.classList.add("copied");

            setTimeout(() => {
                copyText.textContent = "Click to copy";
                copyText.classList.remove("copied");
            }, 2000);
        }
    });

    function generatePassword(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }
});
