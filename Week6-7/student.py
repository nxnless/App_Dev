from flask import request,Flask,jsonify
from flask_basicauth import BasicAuth
app = Flask(__name__)

app.config['BASIC_AUTH_USERNAME'] = 'username'
app.config['BASIC_AUTH_PASSWORD'] = 'password'
basic_auth = BasicAuth(app)

students=[
    {"id":1,"fname":"nine A","lname":"arcme"},
    {"id":2,"fname":"nine B","lname":"deela"},
    {"id":3,"fname":"nine C","lname":"ehai"}
]
@app.route("/")
def Greet():
    return "<p>Welcome to Student Management API </p>"

@app.route("/students",methods=["GET"])
@basic_auth.required
def get_all_students():
    return jsonify({"student":students})

@app.route("/students/<int:student_id>",methods=["GET"])
@basic_auth.required
def get_book(student_id):
    std=next( (s for s in students if s["id"]==student_id),None)
    if std:
        return jsonify(std)
    else:
        return jsonify({"error":"Student not found"}),404
    
@app.route("/students" , methods = ["POST"])
@basic_auth.required
def create_book():
    data = request.get_json()
    new_std = {
        "id":len(students)+1,
        "fname":data["fname"],
        "lname":data["lname"]
    }
    students.append(new_std)
    return jsonify(new_std),201

@app.route("/students/<int:student_id>" ,methods = ["DELETE"])
@basic_auth.required
def delete_book(student_id):
    global students
    students = [s for s in students if s["id"] != student_id]
    if students:
        return jsonify({"message" : "Book deleted successfully"})
    else:
        return jsonify({"message":"Student deleted successfully"}),404
        

@app.route("/students/<int:student_id>" ,methods = ["PUT"])
@basic_auth.required
def update_book(student_id):
    std = next((s for s in students if s["id"] == student_id),None)
    if std:
        data = request.get_json()
        std.update(data)
        return jsonify(std)
    else:
        return jsonify({"error":"Student not found"}),404
        

if __name__=="__main__":
    app.run(host="0.0.0.0",port=5000,debug=True)
