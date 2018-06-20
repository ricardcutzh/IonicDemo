import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from "lodash"
/*
  Generated class for the DispoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DispoProvider {

  url = "http://www.filltext.com/KfgRZ/?rows=1&pretty=true&NumCaras={number|100}";

  constructor(public http: HttpClient) {
    //console.log('Hello DispoProvider Provider');
  }


  //OBTIENE LA INFORMACION DE LAS VALLAS UNIPOLARES
  obtenerUnipolares()
  {
    return this.http.get(this.url);
  }

  //OBTIENE LA INFORMACION DE LAS VALLAS CONVENVCIONALES
  obtenerConvencionales()
  {
    return this.http.get(this.url);
  }

  //OBTIENE LA INFORMACION DE LAS DEMAS (PASARELAS Y PASACALLES)
  obtenerOtras()
  {
    return this.http.get(this.url);
  }

  //ARREGLO DE DATOS EN EJEMPLO DE COMO SE DEBERIAN DE ENVIAR LOS DATOS HACIA LA VISTA
  //METODO EJEMPLO
  obtenerCarasEntrando()
  {
    var datos = [
      {
        "region":"Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "Guatemala"
      },
      {
        "region":"Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "Mixco"
      },
      {
        "region":"Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "San Miguel Petata"
      },
      {
        "region":"Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "Palencia"
      },
      {
        "region":"Norte",
        "Departamento": "Alta Verapaz",
        "Municipio": "Coban"
      },
      {
        "region":"Norte",
        "Departamento": "Alta Verapaz",
        "Municipio": "Tactic"
      },
      {
        "region":"Norte",
        "Departamento": "Baja Verapaz",
        "Municipio": "Granados"
      },
      {
        "region":"Central",
        "Departamento":"Chimaltenango",
        "Municipio":"El Tejar"
      },
      {
        "region":"Central",
        "Departamento":"Sacatepequez",
        "Municipio":"Antigua Guatemala"
      },
      {
        "region":"Central",
        "Departamento":"Escuintla",
        "Municipio":"Iztapa"
      }
    ];
    //DATA QUE SE VA A MANEJAR
    var data = [];
    //AGRUPACION ACORDE DE A LA REGION
    var agrupado = _.groupBy(datos, "region");
    _.forEach(agrupado, function(value){
      //METIENDO EN LA DATA PARA PODER RETORNARLOS
      data.push(value);
    });
    return data;
  }
  
  

}
