<script>
    // Select the display input field
    const display = document.calci.display;

    // Function to append values to the display
    function appendValue(value) {
        display.value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        display.value = '';
    }

    // Function to evaluate the expression in the display
    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    // Add event listeners to all buttons
    document.querySelectorAll('input[type="button"]').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else if (value === '^') {
                // Add exponentiation operator
                display.value += '**';
            } else {
                appendValue(value);
            }
        });
    });
</script>
