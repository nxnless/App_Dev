from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS , cross_origin

app = Flask(__name__)
CORS(app) 

# Connect to MongoDB
client = MongoClient('mongodb+srv://nonnon2546:6qVqQW86EA83OSV3@cluster0.9yz02fk.mongodb.net/?retryWrites=true&w=majority')
db = client['Store']
collection = db['Products']

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/api/products', methods=['GET'])
@cross_origin()
def get_users():
    users = list(collection.find({}))
    return jsonify(users)

@app.route('/api/products', methods=['POST'])
@cross_origin()
def add_user():
    try:
        data = request.get_json()  # Get JSON data from the request
        # Process the received data
        id = collection.count_documents({}) + 1
        data['_id'] = id
        collection.insert_one(data)
        return jsonify({'message': 'Data inserted successfully'}), 200
    except Exception as e:
        # Handle any errors
        return jsonify({'error': str(e)}), 500

@app.route('/api/products/<user_id>', methods=['PUT'])
@cross_origin()
def update_user(user_id):
    user_data = request.json
    result = collection.update_one({"_id": user_id}, {"$set": user_data})
    if result.modified_count > 0:
        return jsonify({"message": "User updated successfully"})
    else:
        return jsonify({"message": "User not found"}), 404
    
@app.route('/api/products/<item_id>', methods=['DELETE'])
@cross_origin
def delete_data(item_id):
    deleted = collection.delete_one({'_id': item_id})
    if deleted.deleted_count == 1:
        return jsonify({'message': 'Data deleted successfully'}), 200
    else:
        return jsonify({'error': 'Data not found'}), 404

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)