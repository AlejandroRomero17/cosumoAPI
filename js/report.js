function getReporte(done) {
    const results = fetch("http://localhost:8080/api/greenhousecontrol/v1/report");
    

    results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getReporte(data => {
    data.forEach(reporte => {
        const article = document.createRange().createContextualFragment(
            `<article>
            <h2>Datos de Reporte</h2>
                <h2><strong>Id del Reporte:</strong>${reporte.reportID}</h2>
                <p><strong>Fecha:</strong> ${reporte.date}</p>
                <p><strong>Horario:</strong> ${reporte.time}</p>
                <p><strong>Id del Usuario:</strong> ${reporte.userID}</p>
                <p><strong>Nombre:</strong> ${reporte.name}</p>
                <p><strong>Observaciones:</strong> ${reporte.observations}</p>
            </article>`
        );
        const main = document.querySelector("main");
        main.append(article);
    });
});



