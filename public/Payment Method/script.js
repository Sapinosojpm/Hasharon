        // Select payment options and details
        const paymentOptions = document.querySelectorAll('input[name="payment"]');
        const cardDetails = document.querySelector('.card-details');
        const paypalDetails = document.querySelector('.paypal-details');
        const stripeDetails = document.querySelector('.stripe-details');
        const gcashDetails = document.querySelector('.gcash-details');
        
        // Hide/Show fields based on payment option
        paymentOptions.forEach(option => {
            option.addEventListener('change', () => {
                // Hide all payment details first
                cardDetails.classList.add('hidden');
                paypalDetails.classList.add('hidden');
                stripeDetails.classList.add('hidden');
                gcashDetails.classList.add('hidden');
        
                // Show the relevant details based on the selected payment method
                if (option.value === 'card') {
                    cardDetails.classList.remove('hidden');
                } else if (option.value === 'paypal') {
                    paypalDetails.classList.remove('hidden');
                } else if (option.value === 'stripe') {
                    stripeDetails.classList.remove('hidden');
                } else if (option.value === 'gcash') {
                    gcashDetails.classList.remove('hidden');
                }
            });
        });