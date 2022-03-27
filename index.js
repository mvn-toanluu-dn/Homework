function loadDoc() {
  var http = new XMLHttpRequest();
  http.open('GET','https://reqres.in/api/users',true);
  http.send();
    http.onreadystatechange = function () {  
      if (this.readyState == 4 && this.status == 200) {
        const arr = JSON.parse(this.responseText).data;
        renderUser(arr);
      }
    };
};
loadDoc();

function renderUser(arr) {
  for( var arrs of arr)
  console.log(arrs);
}

fetch('https://reqres.in/api/users?page=2')
  .then(response => response.json())
  .then((data) => {
    const arr2 = data.data;
    renderUser2(arr2);
  } )
  .catch(error => console.log(error));

  function renderUser2(arr2) {
    for( var arrs2 of arr2)
    console.log(arrs2);
  }