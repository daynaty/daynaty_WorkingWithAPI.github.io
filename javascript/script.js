const apiURL = "https://api.artic.edu/api/v1/artworks/129884";

fetch (apiURL).then((Response) => Response.json()).then ((data) => {console.log(data)})
