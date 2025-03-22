// Initialize bookings in localStorage if not already present
if (!localStorage.getItem('bookings')) {
  localStorage.setItem('bookings', JSON.stringify([]));
}

// Function to update the dashboard with bookings
function updateDashboard() {
  const bookings = JSON.parse(localStorage.getItem('bookings'));
  const bookingsDiv = document.getElementById('bookings');
  bookingsDiv.innerHTML = bookings.map((booking, index) => `
    <div class="booking">
      <p><strong>Departure:</strong> ${booking.departure}</p>
      <p><strong>Destination:</strong> ${booking.destination}</p>
      <p><strong>Class:</strong> ${booking.seatClass}</p>
      <button onclick="deleteBooking(${index})">Delete</button>
    </div>
  `).join('');
}

// Function to delete a booking
function deleteBooking(index) {
  const bookings = JSON.parse(localStorage.getItem('bookings'));
  bookings.splice(index, 1); // Remove the booking at the specified index
  localStorage.setItem('bookings', JSON.stringify(bookings)); // Update localStorage
  updateDashboard(); // Refresh the dashboard
}

// Function to handle form submission
document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const departure = document.getElementById('departure').value;
  const destination = document.getElementById('destination').value;
  const seatClass = document.getElementById('seatClass').value;

  const booking = { departure, destination, seatClass };

  // Save booking to localStorage
  const bookings = JSON.parse(localStorage.getItem('bookings'));
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));

  alert('Booking successful!');
  updateDashboard(); // Refresh the dashboard
});

// Countdown Timer
// Countdown Timer
const launchDate = new Date('2024-12-25T00:00:00').getTime(); // Set a future launch date

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `
      ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
  } else {
    document.getElementById('timer').innerHTML = "Launch Complete!";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize the countdown timer
updateCountdown();
// AI-Based Travel Tips
const tips = [
  "Pack warm for Mars—it’s colder than you think!",
  "Zero-gravity training is recommended for first-time travelers.",
  "Don’t forget your camera for stunning lunar landscapes.",
  "Stay hydrated in space—it’s easy to forget!",
  "VIP cabins include a personal AI assistant for your journey."
];

function showRandomTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById('tip').textContent = tip;
}

showRandomTip();
setInterval(showRandomTip, 10000); // Change tip every 10 seconds

// Initialize dashboard on page load
updateDashboard();

// Accommodation Recommendations
// Accommodation Recommendations
const accommodations = {
  hotel: [
    { name: "Orbital Lux Hotel", description: "Luxury hotel with a view of Earth.", price: "$10,000/night" },
    { name: "Lunar Grand Hotel", description: "Stay in style on the Moon.", price: "$15,000/night" },
    { name: "Stellar Oasis", description: "A serene space hotel with zero-gravity lounges.", price: "$12,000/night" },
    { name: "Galactic Retreat", description: "Exclusive hotel with panoramic views of the galaxy.", price: "$18,000/night" },
    { name: "Cosmic Haven", description: "A cozy space hotel with futuristic amenities.", price: "$14,000/night" },
  ],
  orbital: [
    { name: "ISS Experience", description: "Live like an astronaut on the International Space Station.", price: "$20,000/night" },
    { name: "Mars Orbital Station", description: "Experience life in orbit around Mars.", price: "$25,000/night" },
    { name: "Neptune Sky Lounge", description: "A luxurious orbital station with views of Neptune.", price: "$22,000/night" },
    { name: "Jupiter Vista Station", description: "Orbital station with breathtaking views of Jupiter.", price: "$28,000/night" },
    { name: "Saturn Ring Retreat", description: "Stay in an orbital station near Saturn's rings.", price: "$30,000/night" },
  ],
  capsule: [
    { name: "Starlight Capsule", description: "Compact and cozy space capsule for solo travelers.", price: "$8,000/night" },
    { name: "Galaxy Pod", description: "A futuristic capsule with stunning views of the Milky Way.", price: "$9,500/night" },
    { name: "Orbital Pod", description: "A high-tech capsule orbiting Earth.", price: "$7,500/night" },
    { name: "Lunar Capsule", description: "A capsule on the Moon's surface with lunar views.", price: "$10,000/night" },
    { name: "Mars Capsule", description: "A capsule on Mars with red planet views.", price: "$12,000/night" },
  ],
  resort: [
    { name: "Aurora Space Resort", description: "A luxury resort with aurora views from space.", price: "$25,000/night" },
    { name: "Zero-Gravity Resort", description: "Experience zero-gravity luxury in space.", price: "$30,000/night" },
    { name: "Galactic Paradise", description: "A resort with infinity pools overlooking the galaxy.", price: "$35,000/night" },
    { name: "Stellar Retreat", description: "A secluded resort for ultimate relaxation in space.", price: "$28,000/night" },
    { name: "Cosmic Oasis", description: "A resort with futuristic amenities and starry views.", price: "$32,000/night" },
  ],
  dome: [
    { name: "Lunar Crystal Dome", description: "A transparent dome on the Moon with Earth views.", price: "$20,000/night" },
    { name: "Mars Glass Dome", description: "A dome on Mars with panoramic red planet views.", price: "$22,000/night" },
    { name: "Saturn View Dome", description: "A dome near Saturn's rings for unparalleled views.", price: "$26,000/night" },
    { name: "Jupiter Sky Dome", description: "A dome with views of Jupiter's swirling storms.", price: "$28,000/night" },
    { name: "Neptune Ocean Dome", description: "A dome with views of Neptune's deep blue atmosphere.", price: "$30,000/night" },
  ],
};

function showRecommendations() {
  const type = document.getElementById('accommodationType').value;
  const recommendationsDiv = document.getElementById('recommendations');
  const recommendations = accommodations[type];

  recommendationsDiv.innerHTML = recommendations.map(rec => `
    <div class="recommendation">
      <p><strong>${rec.name}</strong></p>
      <p>${rec.description}</p>
      <p>Price: ${rec.price}</p>
    </div>
  `).join('');
}

// Initialize recommendations on page load
showRecommendations();
