const apiKey = "2751b1019ca26683a07dce240cec1d96";/* key da API */
var campoCit = document.getElementById('cidade');/* Puxa o conteudo do id=cidade */
campoCit.addEventListener('blur', function consultaTempCity() { /* Quando clica na area em branco ele ativa */
    let valorCit = campoCit.value;/* Armazena um valor */

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + valorCit + '&appid=' + apiKey + '&units=metric&lang=pt_br')/*Requisita para a APi */
        .then(response => response.json())/* Converte o JSON */
        .then(data => {/* Define o valor de cada um */
            console.log(data);;
            document.getElementById("temp").innerHTML = data.main.temp + "Cº" || '';
            document.getElementById("cond").innerHTML = data.weather[0].description || '';
            document.getElementById("umi").innerHTML = data.main.humidity + "%" || '';
            document.getElementById("vent").innerHTML = data.wind.speed + "M/S" || '';
        })
        .catch(error => erro);/* Avisa que deu erro */

    campoCit.addEventListener('blur', consultaTempCity);/* Caso seja clicado em uma area sem nada, ele manda para a API */
    document.getElementById('Consult').addEventListener('click', consultaTempCity);/* Caso seja clicado no botão, ele manda para a API */

});