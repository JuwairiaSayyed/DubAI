from flask import Flask, jsonify, request, render_template
from datetime import datetime

app = Flask(__name__)

# Mock database for bookings
bookings = []

@app.route('/')
def home():
    return render_template('index.html')  # Serve the frontend

@app.route('/book', methods=['POST'])
def book_trip():
    data = request.json
    if not data or 'departure' not in data or 'destination' not in data or 'seatClass' not in data:
        return jsonify({"error": "Invalid booking data"}), 400

    # Add a unique ID and timestamp to the booking
    booking = {
        "id": len(bookings) + 1,
        "departure": data['departure'],
        "destination": data['destination'],
        "seatClass": data['seatClass'],
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    bookings.append(booking)
    return jsonify({"message": "Booking successful!", "booking": booking})

@app.route('/dashboard', methods=['GET'])
def get_dashboard():
    return jsonify({"bookings": bookings})

@app.route('/delete/<int:booking_id>', methods=['DELETE'])
def delete_booking(booking_id):
    global bookings
    bookings = [booking for booking in bookings if booking['id'] != booking_id]
    return jsonify({"message": "Booking deleted successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
