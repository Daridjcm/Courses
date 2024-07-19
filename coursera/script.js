document.addEventListener('DOMContentLoaded', () => {
    const seatMap = [
        { id: 'A1', status: 'available' },
        { id: 'A2', status: 'reserved' },
        { id: 'A3', status: 'available' },
        { id: 'A4', status: 'available' },
        { id: 'B1', status: 'reserved' },
        { id: 'B2', status: 'available' },
        { id: 'B3', status: 'available' },
        { id: 'B4', status: 'reserved' },
        // Add more seats as needed
    ];

    function generateSeatMap() {
        const seatMapContainer = document.getElementById('seat-map');
        seatMapContainer.innerHTML = '';
        seatMap.forEach(seat => {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat', seat.status);
            seatElement.dataset.id = seat.id;
            seatElement.textContent = seat.id;
            seatMapContainer.appendChild(seatElement);
        });
    }

    generateSeatMap();
});
