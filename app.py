from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
from os import path, walk

app = Flask(__name__, static_folder="static", template_folder="templates")
app.config['TESTING'] = True
app.config["TEMPLATES_AUTO_RELOAD"] = True

quiz_questions = [
    {
        "enemy": "Typhlosion",
        "types": ["fire"],
        "answer": "Water",
        "options": [
            {
                "pokemon": "Squirtle",
                "types": ["Water"]
            },
            {
                "pokemon": "Bulbasaur",
                "types": ["Grass"]
            },
            {
                "pokemon": "Machop",
                "types": ["Fighting"]
            },
            {
                "pokemon": "Pidgey",
                "types": ["Flying"]
            },
        ],
        "enemy_image": "https://cdn.bulbagarden.net/upload/thumb/4/47/157Typhlosion.png/600px-157Typhlosion.png"
    }
]


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/learn')
def learn_home():
    return render_template("learn.html")


@app.route('/quiz')
def quiz_home():
    temp_workaround = None
    for question in quiz_questions:
        temp_workaround = question
    return render_template("quiz_question.html", question=quiz_questions[0])


if __name__ == '__main__':
    app.run(debug=True)
