
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    const country = document.getElementById('country-container')
    for(let i=0; i<data.length; i++){

        let countryName = data[i].name
        let countryCapital = data[i].capital
        let countryPopulation = data[i].population
        let countryFlag = data[i].flag


        let div = document.createElement('div')
        div.className = 'col-md-5 border border-primary p-4 m-3'
        country.appendChild(div)

        let cName = document.createElement('h3')
        cName.innerText = 'Name : ' + countryName
        div.appendChild(cName)

        let caName = document.createElement('p')
        caName.innerText = 'Catipal : ' + countryCapital
        div.appendChild(caName)

        let pName = document.createElement('p')
        pName.innerText = 'Population : ' + countryPopulation
        div.appendChild(pName)

        let img = document.createElement('img')
        img.setAttribute('src', countryFlag);
        img.style.width = '200px'
        div.appendChild(img)



        // let borders = data[i].borders
        // let borderText = '';
        // for (let j = 0; j < borders.length; j++) {
        //     let borders = data[j].borders
        //     borderText = borderText + borders
        // }
        // let borderTag = document.createElement('p')
        // borderTag.innerText = 'Borders : ' + borderText
        // div.appendChild(borderTag)
    }
})