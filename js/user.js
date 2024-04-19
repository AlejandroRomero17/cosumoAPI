function getUsuarios(done) {
    const results = fetch("http://localhost:8080/api/greenhousecontrol/v1/user");
    

    results
        .then(response => response.json())
        .then(data => {
            done(data);
        });
}

getUsuarios(data => {
    data.forEach(usuario => {
        const article = document.createRange().createContextualFragment(
            `<article>
                <h2>Datos de Usuario</h2>
                <h2><strong>Id del Usuario:</strong>${usuario.userID}</h2>
                <p><strong>Nombre:</strong> ${usuario.name}</p>
                <p><strong>Apellido Paterno:</strong> ${usuario.lastname}</p>
                <p><strong>Apellido Materno:</strong> ${usuario.second_lastname}</p>
                <p><strong>Tipo:</strong> ${usuario.type}</p>
            </article>`
        );
        const main = document.querySelector("main");
        main.append(article);
    });
});
