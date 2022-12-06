//You code here

function submitData(name,email){
  let data={
    name:name,
    email:email
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function(response){
    return response.json();
  })
  .then (function(object){
    let h2 = document.createElement('h2');
    h2.innerHTML=object.id;
    document.body.appendChild(h2);
    console.log(object);
  })
  .catch(function(error){
    let p = document.createElement('p');
    p.innerHTML=error.message;
    document.body.appendChild(p);
    console.log(error.message);
  });

}