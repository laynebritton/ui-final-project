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
        "types": ["Fire"],
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
        "id": 1
        
    },
    {
        "enemy": "Machamp",
        "types": ["Fighting"],
        "answer": "Flying",
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
        "id": 2
        
    },
        {
        "enemy": "Rhydon",
        "types": ["Rock"],
        "answer": "Fighting",
        "options": [
            {
                "pokemon": "Geodude",
                "types": ["Rock"]
            },
            {
                "pokemon": "Charmander",
                "types": ["Fire"]
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
        "id": 3
        
    },
    {
        "enemy": "Ludicolo",
        "types": ["Water","Grass"],
        "answer": "Flying",
        "options": [
            {
                "pokemon": "Geodude",
                "types": ["Rock"]
            },
            {
                "pokemon": "Spearow",
                "types": ["Flying"]
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
        "id": 4
        
    },
    {
        "enemy": "Aerodactyl",
        "types": ["Rock","Flying"],
        "answer": "Water",
        "options": [
            {
                "pokemon": "Pidgey",
                "types": ["Flying"]
            },
            {
                "pokemon": "Squirtle",
                "types": ["Water"]
            },
            {
                "pokemon": "Charmander",
                "types": ["Fire"]
            },
            {
                "pokemon": "Spearow",
                "types": ["Flying"]
            },
        ],
        "id": 5
        
    },
    {
        "enemy": "Breloom",
        "types": ["Fighting","Grass"],
        "answer": "Fire",
        "options": [
            {
                "pokemon": "Geodude",
                "types": ["Rock"]
            },
            {
                "pokemon": "Machop",
                "types": ["Fighting"]
            },
            {
                "pokemon": "Charmander",
                "types": ["Fire"]
            },
            {
                "pokemon": "Bulbasaur",
                "types": ["Grass"]
            },
        ],
        "id": 6
        
    },
    {
        "enemy": "Charizard",
        "types": ["Fire","Flying"],
        "answer": "Rock",
        "options": [
            {
                "pokemon": "Pidgey",
                "types": ["Flying"]
            },
            {
                "pokemon": "Geodude",
                "types": ["Rock"]
            },
            {
                "pokemon": "Bulbasaur",
                "types": ["Grass"]
            },
            {
                "pokemon": "Machop",
                "types": ["Fighting"]
            },
        ],
        "id": 7
        
    },
    {
        "enemy": "Poliwrath",
        "types": ["Water","Fighting"],
        "answer": "Grass",
        "options": [
            {
                "pokemon": "Bulbasaur",
                "types": ["Grass"]
            },
            {
                "pokemon": "Charmander",
                "types": ["Fire"]
            },
            {
                "pokemon": "Geodude",
                "types": ["Rock"]
            },
            {
                "pokemon": "Machop",
                "types": ["Fighting"]
            },
        ],
        "id": 8
        
    },
    {
        "enemy": "Tropius",
        "types": ["Grass","Flying"],
        "answer": "Fire",
        "options": [
            {
                "pokemon": "Squirtle",
                "types": ["Water"]
            },
            {
                "pokemon": "Charmander",
                "types": ["Fire"]
            },
            {
                "pokemon": "Bulbasaur",
                "types": ["Grass"]
            },
            {
                "pokemon": "Machop",
                "types": ["Fighting"]
            },
        ],
        "id": 9
        
    },
        {
        "enemy": "Omanyte",
        "types": ["Rock","Water"],
        "answer": "Grass",
        "options": [
            {
                "pokemon": "Pidgey",
                "types": ["Flying"]
            },
            {
                "pokemon": "Charmander",
                "types": ["Fire"]
            },
            {
                "pokemon": "Bulbasaur",
                "types": ["Grass"]
            },
            {
                "pokemon": "Spearow",
                "types": ["Flying"]
            },
        ],
        "id": 10
        
    },
    
]


@app.route('/get_next_question', methods=['GET', 'POST'])
def get_next_question():
    global quiz_questions
    json_data = request.get_json()   

    id = json_data["id"]

    results= list(filter(lambda album: album["id"] == id + 1, quiz_questions))
    return jsonify(question=results[0])

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
