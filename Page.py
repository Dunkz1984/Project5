from flask import Flask, render_template, request, redirect, jsonify

app = Flask(__name__)

conversion_factors = {
    "kg": 1,
    "lbs": 0.453592,
    "g": 0.001,
    "oz": 0.0283495
}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/convert", methods=["POST"])
def convert():
    data = request.get_json()
    value = float(data["value"])
    from_unit = data["from_unit"]
    to_unit = data["to_unit"]

    value_in_kg = value * conversion_factors[from_unit]

    converted_value = value_in_kg / conversion_factors[to_unit]

    return jsonify({"result": round(converted_value, 4)})

if __name__ == "__main__":
    app.run(debug = True)