fetch('http://localhost:1337/api/guitars?populate=*')
    .then(response => response.json())
        .then(data => {
            data.data.forEach(guitar => {
                const markup = `
                    <a class="guitar" href="${guitar.attributes.url}.html">
                        <img src="http://localhost:1337${guitar.attributes.Images.data[0].attributes.url}"/>
                        <p class="brand">${guitar.attributes.brand.data.attributes.name}</p>
                        <h2 class="name">${guitar.attributes.name}
                    </h2>                        </a>`;
                document.querySelector('.list').insertAdjacentHTML('beforeend', markup);          
            });
        })
        .catch(error => console.error(error));