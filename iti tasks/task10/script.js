 fetch('rockbands.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const bandSelect = document.getElementById('bandSelect');
                const artistSelect = document.getElementById('artistSelect');
                const errorMessage = document.getElementById('errorMessage');
                
                // Clear any previous error message
                errorMessage.textContent = '';
                
                // Validate data structure
                if (!Array.isArray(data)) {
                    throw new Error('Invalid JSON format: Expected an array of band objects');
                }
                
                // Populate band dropdown
                data.forEach((band, index) => {
                    if (band.band && Array.isArray(band.artists)) {
                        const option = document.createElement('option');
                        option.value = index;
                        option.textContent = band.band;
                        bandSelect.appendChild(option);
                    }
                });
                
                // Event listener for band selection
                bandSelect.addEventListener('change', (event) => {
                    const selectedIndex = event.target.value;
                    if (selectedIndex === '') {
                        artistSelect.disabled = true;
                        artistSelect.innerHTML = '<option value="">-- Choose an Artist --</option>';
                        return;
                    }
                    
                    const selectedBand = data[selectedIndex];
                    artistSelect.innerHTML = '<option value="">-- Choose an Artist --</option>';
                    artistSelect.disabled = false;
                    
                    if (selectedBand && Array.isArray(selectedBand.artists)) {
                        selectedBand.artists.forEach(artist => {
                            if (artist.name && artist.link) {
                                const option = document.createElement('option');
                                option.value = artist.link;
                                option.textContent = artist.name;
                                artistSelect.appendChild(option);
                            }
                        });
                    } else {
                        artistSelect.disabled = true;
                        artistSelect.innerHTML = '<option value="">No artists available</option>';
                    }
                });
                
                // Event listener for artist selection
                artistSelect.addEventListener('change', (event) => {
                    const selectedLink = event.target.value;
                    if (selectedLink !== '') {
                        window.open(selectedLink, '_blank');
                    }
                });
            })
            .catch(error => {
                const errorMessage = document.getElementById('errorMessage');
                errorMessage.textContent = `Error loading JSON: ${error.message}. Please check the file path or content.`;
                console.error('Error loading JSON:', error);
            });