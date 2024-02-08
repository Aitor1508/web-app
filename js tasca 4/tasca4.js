let storage = window.localStorage;
storage.setItem("Tipus","Turisme");    // es desa la clau "Tipus" amb el valor "Turisme"
let tipus = storage.getItem("Tipus");    // resultat: tipus = "Turisme"
window.onload = () => {    // funció que s'executa un cop carregat el document HTML
    let base_de_dades = storage.getItem("base_de_dades");   
    if(base_de_dades == null) {    // la base de dades només es crea si encara no existeix
        indexedDB.open("Dades").onupgradeneeded = event => {    // esdeveniment de creació o actualització de la base de dades "Dades"
            event.target.result.createObjectStore("Vehicles", {keyPath: "ID", autoIncrement:true}).createIndex("Tipus", "Motor");    // es crea la taula "Vehicles" amb la clau principal "ID" i els índexos de consulta "Tipus" i "Motor"
        }
        storage.setItem("base_de_dades","ok");    // es desa la informació conforme la base de dades ja s'ha creat
    }
}
