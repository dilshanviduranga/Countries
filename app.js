fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let tblCountries = document.getElementById("tbl");

        let tblBody = `<tr>
                    <th>Name</th>
                    <th>Flag</th>
                    <th>Region</th>
                </tr>`;

        data.forEach(element => {
            tblBody += `<tr>
                    <td>${element.name.common}</td>
                    <td>${element.flag}</td>
                    <td>${element.region}</td>
                </tr>`
        });

        tblCountries.innerHTML = tblBody;
    })



// https://restcountries.com/v3.1/name/{name}




function update(e) {
    if (e.keyCode == 13) {
        let searchValue = document.getElementById("txtSearchValue").value;

        let offitalName = document.getElementById("offitalName");
        let name = document.getElementById("name")
        let img = document.getElementById("img")
        let population = document.getElementById("population")


        console.log(searchValue);
        fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
            .then(res => res.json())
            .then(data => {

                data.forEach(obj => {
                    

                    offitalName.innerText = obj.name.official;
                    name.innerText = obj.name.common;
                    population.innerHTML = obj.population;

                    img.innerHTML = `<img src="${obj.flags.png}" alt="">`
                    console.log(obj.maps.googleMaps);
                    map.innerHTML = `<a href="${obj.maps.googleMaps}">ABC</a>`


                })
                console.log(data);




            })


    }
}


function serchCuntrie() {
    // let searchValue = document.getElementById("txtSearchValue").value;

    // let offitalName = document.getElementById("offitalName");
    // let name = document.getElementById("name")
    // let img = document.getElementById("img")
    // let population = document.getElementById("population")


    // console.log(searchValue);
    // fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    //     .then(res => res.json())
    //     .then(data => {

    //         data.forEach(obj => {
    //             console.log(population.innerHTML);
    //             if(population.innerHTML=="Population -"){
    //                 offitalName.innerText += obj.name.official;
    //                 name.innerText += obj.name.common;
    //                 population.innerHTML += obj.population;

    //                 img.innerHTML = `<img src="${obj.flags.png}" alt="">`
    //                 console.log(obj.maps.googleMaps);
    //                 map.innerHTML = `<a href="${obj.maps.googleMaps}">ABC</a>`
    //             }

    //         })
    //         console.log(data);




    //     })
}