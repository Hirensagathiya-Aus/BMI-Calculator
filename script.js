document.addEventListener('DOMContentLoaded', () => {
    // BMI Calculator Logic
    const bmiForm = document.getElementById('bmi-form');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
            const resultDiv = document.getElementById('bmi-result');

            if (weight > 0 && height > 0) {
                const bmi = (weight / (height * height)).toFixed(2);
                let category = '';

                if (bmi < 18.5) {
                    category = 'Underweight';
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    category = 'Normal';
                } else if (bmi >= 25 && bmi <= 29.9) {
                    category = 'Overweight';
                } else {
                    category = 'Obese';
                }

                resultDiv.innerHTML = `Your BMI is ${bmi} (${category})`;
            } else {
                resultDiv.innerHTML = 'Please enter valid weight and height.';
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // In a real application, you would send this data to a server.
                // For this project, we can simulate a successful submission.
                alert('Thank you for your message!');
                contactForm.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
