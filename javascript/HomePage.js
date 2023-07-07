document.getElementById('immdi').onclick = (event) => {
    event.preventDefault();
    { sessionStorage.setItem('serviceData',JSON.stringify( {  'https://api.themoviedb.org/3/movie/101' : {"queryParams":{"api_key": document.getElementById('i4y15').value}} }));  location.href= '/AboutUsPage' ;}};window.onload = () => {};