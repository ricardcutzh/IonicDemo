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
  

  obtenerRutas()
  {
    var datos = [
      {
        "codigo":"VU-03MTRGT",
        "alto": "5",
        "ancho": "10",
        "acabado": "Bolsas de 15 ctm",
        "ubicacion": "Km. 5.5 zona 17 Carretera al Atlantico ",
        "url": "http://docs.google.com/uc?id=1igGKsqsUHdxlNDqClB9Kv-cATQbMo37C"
      },
      {
        "codigo":"VU-02MTRGT",
        "alto": "4",
        "ancho": "15",
        "acabado": "Bolsas de 15 ctm",
        "ubicacion": "Ubicación: Km. 12 Ruta al Atlántico",
        "url": "http://docs.google.com/uc?id=1INPeAjCcNwvFMskmqz_h43z5Nl_oyKr-"
      },
      {
        "codigo":"VU-01MTRGT",
        "alto": "4",
        "ancho": "10",
        "acabado": "Bolsas de 15 ctm.",
        "ubicacion": "Km. 12 Ruta al Atlántico",
        "url": "http://docs.google.com/uc?id=11ZqJ3rjdkXXg82hFnAZjlbjb8DDCcLg_"
      },
      {
        "codigo":"VU-04MTRGT",
        "alto": "5",
        "ancho": "12",
        "acabado": "Bolsas de 15 ctm.",
        "ubicacion": "3ra. Calle 4-84 Zona 8 de Mixco, Por C.C. Plaza Mix",
        "url": "http://docs.google.com/uc?id=1-ohmMOUSTAGU4z05ak6hhXns75SWZhRD"
      },
      {
        "codigo":"VU-05MTRGT",
        "alto": "4",
        "ancho": "20",
        "acabado": "Bolsas de 15 ctm.",
        "ubicacion": "Cd. San Cristóbal salida a la 35 calle  Las Charcas",
        "url": "http://docs.google.com/uc?id=1_pALi7MHnjybftD3V7oKE_KvPfsOpI9q"
      },
      {
        "codigo":"VU-06MTRGT",
        "alto": "4",
        "ancho": "20",
        "acabado": "Bolsas de 15 ctm.",
        "ubicacion": "Km. 17 Ruta a la Antigua, antes del cruce a San Cris.",
        "url": "http://docs.google.com/uc?id=1Y1DyGnhE46B3_TJ_YHg94N7rTRluGyY-"
      }
    ];
    return datos;
  }
  

}
