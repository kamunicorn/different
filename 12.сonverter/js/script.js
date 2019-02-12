/*jshint esversion: 6 */

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

	function getData() {
        return new Promise(function(resolve, reject) {
            
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            
            request.onreadystatechange = function() {
                if (request.readyState === 4 && request.status === 200) {
                    let data = JSON.parse(request.response);
                    resolve(data);
                }
            };

            request.send();

        });
    }	// End getData
    
    getData()
            .then((data) => {
                inputUsd.value = (inputRub.value / data.usd).toFixed(3);
            })
            .catch(() => inputUsd.value = "Что-то пошло не так!");

});
