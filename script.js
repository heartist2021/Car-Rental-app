function showRentForm(carId) {
    const rentForm = document.getElementById('rentForm');
    rentForm.style.display = 'block';

    // Add logic to pre-fill the form with car details, if needed
    // For simplicity, let's just update the form header with the selected car model
    document.querySelector('.rent-form h2').textContent = `Rent Car - Model ${carId}`;
}

// Optional: Close the form when clicking outside of it
document.addEventListener('click', function(event) {
    const rentForm = document.getElementById('rentForm');
    if (!event.target.closest('.rent-form') && event.target.tagName !== 'BUTTON') {
        rentForm.style.display = 'none';
    }
});
