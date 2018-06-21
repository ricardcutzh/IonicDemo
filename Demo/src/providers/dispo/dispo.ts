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

  /*
  +------------------------------------------------+
  |   MANTAS
  +------------------------------------------------+
  */
  // 
  obtenerEntradasLugar(idLugar) {
    //id lugar sirve para filtar los lugares
    var datos = [
      {
        "codigoEstructura": "VU-01MTRGT",
        "codigoValla": "0343223",
        "alto": 9.00,
        "ancho": 4.00,
        "unidad": "mts",
        "ubicacion": "Km. 5.5 zona 17 Carretera al Atlantico",
        "acabado": " Bolsas de 15 ctm.",
        "imagen": "https://guatemalamarketing.files.wordpress.com/2014/12/valla6.jpg",
        "idValla": 1
      },
      {
        "codigoEstructura": "VU-02MTRGT",
        "codigoValla": "0343223",
        "alto": 15.00,
        "ancho": 6.00,
        "unidad": "mts",
        "ubicacion": "Km. 13 ruta al Atlantico",
        "acabado": "Bolsas de 15 ctm.",
        "imagen": "../../assets/imgs/UNI1.JPG",
        "idValla": 2
      },
      {
        "codigoEstructura": "VU-03MTRGT",
        "codigoValla": "VU-03MTRGT",
        "alto": 10.00,
        "ancho": 4.00,
        "unidad": "mts",
        "ubicacion": "Km. 12 Ruta al Atlánticoo",
        "acabado": " Bolsas de 15 ctm.",
        "imagen": "../../assets/imgs/Uni2.jpeg",
        "idValla": 3
      }
    ]
    return datos;
  }

  /*
  +------------------------------------------------+
  |   DISPONIBILIDAD
  +------------------------------------------------+
  */
  //OBTIENE LA INFORMACION DE LAS VALLAS UNIPOLARES
  obtenerUnipolares() {
    return this.http.get(this.url);
  }

  //OBTIENE LA INFORMACION DE LAS VALLAS CONVENVCIONALES
  obtenerConvencionales() {
    return this.http.get(this.url);
  }

  //OBTIENE LA INFORMACION DE LAS DEMAS (PASARELAS Y PASACALLES)
  obtenerOtras() {
    return this.http.get(this.url);
  }

  /*
  +------------------------------------------------+
  |   ARREGLO DE DATOS EN EJEMPLO DE COMO SE DEBERIAN DE ENVIAR LOS DATOS HACIA LA VISTA
  +------------------------------------------------+
  */

  //METODO EJEMPLO
  obtenerCarasEntrando() {
    var datos = [
      {
        "region": "Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "Guatemala",
        "Id": 1
      },
      {
        "region": "Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "Mixco",
        "Id": 2
      },
      {
        "region": "Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "San Miguel Petata",
        "Id": 3
      },
      {
        "region": "Metropolitana",
        "Departamento": "Guatemala",
        "Municipio": "Palencia",
        "Id": 4
      },
      {
        "region": "Norte",
        "Departamento": "Alta Verapaz",
        "Municipio": "Coban",
        "Id": 5
      },
      {
        "region": "Norte",
        "Departamento": "Alta Verapaz",
        "Municipio": "Tactic",
        "Id": 6
      },
      {
        "region": "Norte",
        "Departamento": "Baja Verapaz",
        "Municipio": "Granados",
        "Id": 7
      },
      {
        "region": "Central",
        "Departamento": "Chimaltenango",
        "Municipio": "El Tejar",
        "Id": 8
      },
      {
        "region": "Central",
        "Departamento": "Sacatepequez",
        "Municipio": "Antigua Guatemala",
        "Id": 9
      },
      {
        "region": "Central",
        "Departamento": "Escuintla",
        "Municipio": "Iztapa",
        "Id": 10
      }
    ];
    //DATA QUE SE VA A MANEJAR
    var data = [];
    //AGRUPACION ACORDE DE A LA REGION
    var agrupado = _.groupBy(datos, "region");
    _.forEach(agrupado, function (value) {
      //METIENDO EN LA DATA PARA PODER RETORNARLOS
      data.push(value);
    });
    return data;
  }
}
