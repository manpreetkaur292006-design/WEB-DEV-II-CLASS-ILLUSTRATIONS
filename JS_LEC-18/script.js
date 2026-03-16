// REACT IS THE EXTENDED VERSION OF THE JS OR JS LIBRARY.
// JS LIBRARY V/S FRAMEWORK
// BOOTSTRAP AND TAILWIND ARE THE CSS FRAMEWORKS

// MOST OF THE COMPANIES USES REACT JS (COMPONENT PART) AND NEXT JS (ROUTING PART)


// API FETCHING WITH ASYNC AND AWAIT

async function getData(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}
getData()

