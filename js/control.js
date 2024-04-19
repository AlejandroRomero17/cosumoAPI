function getControl(done) {
    const results = fetch("http://localhost:8080/api/greenhousecontrol/v1/control");
    

    results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getControl(data => {
    data.forEach(control => {
        const article = document.createRange().createContextualFragment(
            `<article>
            <h2>Datos de Control</h2>
                <h2><strong>Id del control:</strong>${control.controlID}</h2>
                <p><strong>Fecha:</strong> ${control.date}</p>
                <p><strong>Hora de Registro:</strong> ${control.time}</p>
                <p><strong>Sensor de Humedad:</strong> ${control.humidity_sensor}</p>
                <p><strong>Sensor de Temperatura:</strong> ${control.temperature_sensor}</p>
                <p><strong>Ventilación:</strong> ${control.ventilation}</p>
            </article>`
        );
        const main = document.querySelector("main");
        main.append(article);
    });
});



