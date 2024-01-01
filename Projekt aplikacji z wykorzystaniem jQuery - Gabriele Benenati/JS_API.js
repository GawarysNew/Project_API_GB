// ta funkcja łączy się z API i wyszukuje jej parametry, łączymy się z API 
function Find(){

    const kraje = fetch("https://restcountries.com/v3.1/name/" + $('#Kraj').val())
    .then(wynik => {

        if(wynik.ok){
            return wynik.json();
        }

        else{
            return Promise.reject(wynik.status);
        }
    })
// ta linia kodu podowduje wyświetlenie wyniku po udanej wcześniejszej operacji
    kraje.then(wynik => {

        const tab = wynik[0];
        console.log(wynik);


// te linie kodu odpowiadają za wypisaywanie danych z API
        $('#div2').empty();

        $('#div2').append(`
        <h3> ${tab.name.official} </h3>

        <hr>

        <h4> ${tab.flags.alt} </h4>
        <img id="flags" src='${tab.flags.png}'/>

        <h4>Coat Of Arms</h4>
        <img id="coatOfArms" src='${tab.coatOfArms.png}'/>
        `);

        $('#div3').empty();

        $('#div3').append(`
        <h3>General Information</h3>
        <hr>
        <h4>Population: <h5>${tab.population}</h5> </h4>

        <h4>Region: <h5>${tab.region}</h5> </h4>

        <h4>Continents: <h5>${tab.continents}</h5> </h4>

        <h4>Time Zones: <h5>${tab.timezones}</h5> </h4>

        <h4>Borders: <h5>${tab.borders}</h5> </h4>

        <h4>Capital: <h5>${tab.capital}</h5> </h4>

        <h4>Independent: <h5>${tab.independent}</h5> <h4>

        <h4>Landlocked: <h5>${tab.landlocked}</h5> <h4>
        `);
    })
// ta linia kodu odpowiada za wskazanie, wykrycie błędu jeżeli taki się pojawi
    kraje.catch(error => {
        console.log(error);
    })
}
// ta linia kodu odpowiada za wyświetlanie wyników w sposób natychmiastowy
$('#Kraj').keyup(Find);