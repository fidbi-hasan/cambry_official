// Get the elements
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const appointmentModal = document.getElementById('appointmentModal');
    const modalPanel = document.getElementById('modalPanel');

    // Function to open the modal
    function openModal() {
        appointmentModal.classList.remove('hidden');
        appointmentModal.classList.add('flex');
        
        // We use a tiny delay (requestAnimationFrame) to allow the browser
        // to register the 'flex' display before starting the 'opacity' transition.
        requestAnimationFrame(() => {
            appointmentModal.classList.remove('opacity-0');
            modalPanel.classList.remove('opacity-0');
            modalPanel.classList.remove('scale-95');
        });
    }

    // Function to close the modal
    function closeModal() {
        appointmentModal.classList.add('opacity-0');
        modalPanel.classList.add('opacity-0');
        modalPanel.classList.add('scale-95');

        // Wait for the transition to finish (300ms) before hiding it
        setTimeout(() => {
            appointmentModal.classList.add('hidden');
            appointmentModal.classList.remove('flex');
        }, 300); // Must match the transition duration
    }

    // --- Event Listeners ---

    // Open Modal
    openModalBtn.addEventListener('click', openModal);

    // Close Modal (via '×' button)
    closeModalBtn.addEventListener('click', closeModal);

    // Close Modal (by clicking backdrop)
    appointmentModal.addEventListener('click', (event) => {
        // Check if the click is on the backdrop itself (event.target)
        if (event.target === appointmentModal) {
            closeModal();
        }
    });



    