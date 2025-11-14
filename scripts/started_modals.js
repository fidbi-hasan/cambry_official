 // Get the elements with NEW IDs
    const openContactModalBtn = document.getElementById('openContactModalBtn');
    const closeContactModalBtn = document.getElementById('closeContactModalBtn');
    const contactModal = document.getElementById('contactModal');
    const contactModalPanel = document.getElementById('contactModalPanel');

    // Function to open the modal
    function openModal() {
        contactModal.classList.remove('hidden');
        contactModal.classList.add('flex');
        
        requestAnimationFrame(() => {
            contactModal.classList.remove('opacity-0');
            contactModalPanel.classList.remove('opacity-0');
            contactModalPanel.classList.remove('scale-95');
        });
    }

    // Function to close the modal
    function closeModal() {
        contactModal.classList.add('opacity-0');
        contactModalPanel.classList.add('opacity-0');
        contactModalPanel.classList.add('scale-95');

        setTimeout(() => {
            contactModal.classList.add('hidden');
            contactModal.classList.remove('flex');
        }, 300); // Must match the transition duration
    }

    // --- Event Listeners ---
    openContactModalBtn.addEventListener('click', openModal);
    closeContactModalBtn.addEventListener('click', closeModal);
    contactModal.addEventListener('click', (event) => {
        if (event.target === contactModal) {
            closeModal();
        }
    });