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
        
    }
]


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/learn')
def learn_home():
    return render_template("learn-intro.html")

@app.route('/learn/intro')
def learn_intro():
    return render_template("learn-intro.html")

@app.route('/learn/strengths')
def learn_strengths():
    return render_template("learn-strengths.html")

@app.route('/learn/weaknesses')
def learn_weaknesses():
    return render_template("learn-weaknesses.html")

@app.route('/learn/types1')
def learn_types1():
    return render_template("learn-types1.html")

@app.route('/learn/types2')
def learn_types2():
    return render_template("learn-types2.html")
    
@app.route('/learn/multiple_types')
def learn_multiple_types():
    return render_template("learn-multiple-types.html")

@app.route('/quiz')
def quiz_home():
    temp_workaround = None
    for question in quiz_questions:
        temp_workaround = question
    return render_template("quiz_question.html", question=quiz_questions[0])


if __name__ == '__main__':
    app.run(debug=True)
