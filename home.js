const renderPage = () => {
    return `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formularz</title>
        </head>
        <body>
            <h2>Formularz</h2>
            <form action="/submit" method="POST">
                <div>
                    <label for="firstName">Imię:</label>
                    <input type="text" id="firstName" name="firstName">
                </div>
                <div>
                    <label for="lastName">Nazwisko:</label>
                    <input type="text" id="lastName" name="lastName">
                </div>
                <div>
                    <label for="age">Wiek:</label>
                    <input type="number" id="age" name="age">
                </div>
                <div>
                    <label for="gender">Płeć:</label>
                    <select id="gender" name="gender">
                        <option value="male">Mężczyzna</option>
                        <option value="female">Kobieta</option>
                        <option value="other">Inna</option>
                    </select>
                </div>
                <div>
                    <label for="code">Numer albumu:</label>
                    <input type="number" id="code" name="code">
                </div>
                <div>
                    <label for="studyField">Kierunek:</label>
                    <input type="text" id="studyField" name="studyField">
                </div>
                <button type="submit">Wyślij</button>
            </form>
        </body>
        </html>
    `;
};

module.exports = {
    renderPage,
};