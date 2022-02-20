const $container = document.querySelector('.container');
const $template = document.getElementById('datosList').content;
const $fragment = document.createDocumentFragment();

axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {

        let data = res.data;
        console.log(data);

        data.forEach((el) => {

            $template.querySelector('h3').textContent = el.id;
            $template.querySelector('#name').textContent = `Nombre: ${el.name}`;
            $template.querySelector('#user').textContent = `Usuario: ${el.username}`;
            $template.querySelector('#email').textContent = `Email: ${el.email}`;
            $template.querySelector('#phone').textContent = `Telefono: ${el.phone}`;
            $template.querySelector('#website').textContent = `SitioWeb: ${el.website}`;

            let $clone = document.importNode($template, true);

            $fragment.appendChild($clone);

        })

        $container.appendChild($fragment);

    })
    .catch((err) => {
        let message = err.response.statusText || 'Data not found';
        console.log(message);
        $container.textContent = `Error ${err.response.status} ${message}`;
    })