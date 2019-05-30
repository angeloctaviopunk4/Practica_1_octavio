export class Persona {

    iconos:String[]=[
        'fa fa-heart','fa fa-amazon','fa fa-apple','fa fa-angellist',
        'fa fa-heartbeat','fa fa-comment','fa fa-universal-access'
      ];
      Emoticon:String;Nombre:String;Apellido_paterno:String;Apellido_materno:String;Edad:String;Sexo:String;Correo:String;

    public constructor (Emoticon:String,Nombre:String,Apellido_paterno:String,Apellido_materno:String,Edad:String,Sexo:String,Correo:String){
        this.iconorandom();
            
    }

    iconorandom(){
        //return  Math.floor(Math.random()*7)+0;
            this.Emoticon = this.iconos[Math.floor(Math.random()*7)].toString();
      }

}