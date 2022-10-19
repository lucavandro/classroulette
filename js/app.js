var studentsClass = {
    "3ASA":[
        "CECI ANTONIO",
"CORRERA MONICA",
"DE LUCIA EGIDIO",
"DE LUCA MARIA",
"DELLA PERUTA ANTONIO",
"D'ANGELO NARCISO VINCENZO",
"DI NUZZO GIUSEPPE",
"DI NUZZO MARIANNA",
"FERRARA MARIA",
"FERRARA ANNA",
"FATICOSO GIANLUIGI",
"LUCCI RAFFAELE",
"PISCITELLI DOMENICO",
"PASCARELLA ANGELA",
"RAZZANO ANGELO MARIA",
"TRAMONTANO VITO",
"TOZZI AURORA",
"VIGLIOTTA FRANCESCO ALESSIO",
"VIGLIOTTI ANTONELLA",
"VALENTINO CARLO",
    ],
    "4ASA":[
        "Abbunto Raffaele",
"Cinelli Francesco",
"Costa Gabriele",
"d'Albenzio Armando",
"de Lucia Domenico",
"di Lucia Sposito Clementina",
"di Nuzzo Mario",
"di Rosa Stefano",
"Dragone Raffaele",
"Errico Luisa",
"Guerra Antonio",
"Guida Francesco Pio",
"Iaderosa Domenico",
"Iazzetta Daniele",
"Migliore Daniele",
"Ruotolo Antonio",
"Ruotolo Emanuele",
"Tenneriello Antonio",
"Vigliotti Carmen",
"Vigliotti Michele",
    ],
    "5ASA":[
        "BAIA",
        "BOVE F",
        "BOVE L",
        "CALVANESE",
        "CIRMA",
        "CITO",
        "COLELLA",
        "D'ANGELO",
        "INVERNO",
        "MALIGNO",
        "MARTONE G",
        "MARTONE M",
        "MASI",
        "MIRETTO",
        "PASSARIELLO",
        "PATRELLI",
        "PECCHILLO",
        "PRISCO",
        "RICCIARDI",
        "SCAMPERTI",
        "SOLLITTO",
        "VINCIGUERRA"
    ],
    "2ASA":[
        "CARFORA",
    "COMOTTI",
    "d'AIELLO",
    "d'ALESSANDRO",
    "DI VICO",
    "DRAGONE",
    "FEPPO",
    "GIOIELLA",
    "GRIECO",
    "GUERRA",
    "GUIDA",
    "IANNIELLO",
    "IGNARRA",
    "LIBERTI",
    "LOFFREDO",
    "MICCO",
    "PIROZZI",
    "PISCITELLI",
    "PLACIDO",
    "ROPERTI",
    "SANTONASTASO",
    "SIVIERO",
    "SOLARO",
    "UGHETTO"
    ],
    "1ESA":[
        "Alabis",
        "Bernardo",
        "Biondo",
        "Caprio",
        "Cicchella",
        "Cioffi",
        "d'Angelo",
        "de Chiara",
        "de Lucia L.",
        "de Lucia S.",
        "del Giudice",
        "del Prete",
        "Errico",
        "Ferraro",
        "Grieco",
        "Guida",
        "Mastroianni",
        "Mataluna", 
        "Merola",
        "Pascarella",
        "Pagliaro",
        "Santacroce",
        "Scarano",
        "Ventrone"
        
    ],
    "3ESA" : [
        "Bucciero",
        "Cioffi",
        "Corraro ",
        "Del Monaco",
        "della Ventura",
        "di Nuzzo",
        "di Silvestro",
        "Ferrara",
        "Fucci",
        "Lombardi",
        "Manna",
        "Mannelli",
        "Martinisi",
        "Pagliaro",
        "Piscitelli",
        "Loffredo",
        "Spisto",
        "Santonastaso",

        
    ]
    
}
var app = new Vue({
    el: '#app',
    data: {
      message: 'Pronti?',
      classNum: Object.keys(studentsClass)[0],
      classes: Object.fromEntries(Object.keys(studentsClass).map(x=>[x,x])),
      sampled: [],
    },
    methods:{
        pickStudents: function(){
            $("#student").removeClass("animate__animated animate__heartBeat")
            var that = this;
            var i = 0;
            var students = _.shuffle(studentsClass[that.classNum]);
            var intervalHandler = setInterval(function(){
                that.message = students[i++%students.length];
            }, 100);
            setTimeout(function(){
                clearInterval(intervalHandler);
                var sample = _.sample(students);
                while(that.sampled.indexOf(sample)!=-1){
                    sample = _.sample(students);
                }
                that.sampled.push(sample);
                that.message = sample;
                $("#student").addClass("animate__animated animate__heartBeat")
            }, 5000);
            
        }
    },
  
});
