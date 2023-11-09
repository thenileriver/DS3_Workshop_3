from flask import Flask, request, render_template, redirect, url_for, flash

app = Flask(__name__, template_folder='Template')

@app.route('/')
def index():
    return render_template('HTML_Demo.html')  # Ensure you have an '___.html' in the templates folder

@app.route('/submit', methods=['POST'])
def submit():
    # Extract the data from the form
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Here you can print it to the console, save it to a file, send an email, store to a database, etc.
    print(f"Name: {name}")
    print(f"Email: {email}")
    print(f"Message: {message}")

    # Redirect back to the homepage or to a 'thank you' page
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
