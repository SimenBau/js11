var input = document.getElementById('input')
input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(array) {
    // `rows` is an array of rows
    // each row being an array of cells.
    array.forEach(element => {
        console.log(element[2], element[3]);
    });

    let jenter = 0;
    simen.forEach(element => {
        if (element[11] == "kvinne" && element[10] == "1MKB") {
            jenter++;
        }
    });
    console.log(`Vi har ${jenter} jenter på 1MKB`);

    var divContainer = document.createElement("div");
    divContainer.className = 'container';
    document.body.append(divContainer);

    // Todo Bruk For Loop først. Etterpå skal du bruke dem:
    img = document.createElement('img');
    img.src = element[14];
    divContainer.appendChild(img);

  })
})