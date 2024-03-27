from flask import Flask, request, jsonify
from flask_cors import CORS  
import pickle
import numpy as np
import os
import sys

executable_dir = getattr(sys, '_MEIPASS', os.getcwd())
model_path = os.path.join(executable_dir, "models", "predictor.pickle")
print("Model path:", model_path)

app = Flask(__name__)
CORS(app)  


with open('models/predictor.pickle', 'rb') as file:
    model = pickle.load(file)


BASE_URL = "/api" 

@app.route(BASE_URL + '/predict', methods=['POST'])
def predict():
    data = request.json
    carat = float(data['carat'])
    cut = int(data['cut'])
    color = int(data['color'])
    clarity = int(data['clarity'])
    depth = int(data['depth'])
    table = int(data['table'])
    length = float(data['length'])
    width = float(data['width'])
    height = float(data['height'])

   
    features = np.array([carat, cut, color, clarity, depth, table, length, width, height]).reshape(1, -1)

   
    prediction = model.predict(features)

    
    prediction = prediction.item()

   
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)
