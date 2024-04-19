function getverReporte(done) {
    const results = fetch("http://localhost:8080/api/greenhousecontrol/v1/viewreport");
    

    results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getverReporte(data => {
    data.forEach(verReporte => {
        const article = document.createRange().createContextualFragment(
            `<article>
            <h2>Ver Reporte</h2>
                <h2><strong>Id del Reporte:</strong>${verReporte.reportID}</h2>
                <p><strong>Fecha:</strong> ${verReporte.date}</p>
                <p><strong>Horario:</strong> ${verReporte.time}</p>
                <p><strong>Observaciones:</strong> ${verReporte.observations}</p>
            </article>`
        );
        const main = document.querySelector("main");
        main.append(article);
    });
});



