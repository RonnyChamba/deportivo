import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CardDeportivoService {


  
  API_URI = environment._APIUrl;
  constructor(
    private http: HttpClient,
    
  ) { }

  categorias(idPeriodo:number){
    return this.http.get<any>(environment._APIUrl+'api/deportivo/categorias/'+idPeriodo)
  }


  depCategorias(idPeriodo:number, tipo:number){
    return this.http.get<any>(environment._APIUrl+'api/deportivo/depCategorias/'+idPeriodo+'/'+tipo)
  }

  depEtapas(idPeriodo:number){
    return this.http.get<any>(environment._APIUrl+'api/deportivo/depEtapas/'+idPeriodo)
  }

  depGrupos(idPeriodo:number){
    return this.http.get<any>(environment._APIUrl+'api/deportivo/depGrupos/'+idPeriodo)
  }

  depEquipos(idPeriodo:number){
    return this.http.get<any>(environment._APIUrl+'api/deportivo/depEquipos/'+idPeriodo)
  }


  // tablaPosicionPorCategoria(idCategoria:number){
  //   return this.http.get<any>(environment._APIUrl+'api/deportivo/tabla-posiciones-categoria/'+idCategoria)
  // }

   programacion(idPeriodo:number, idCategoria:number,idEquipo:number,numeroFecha:number,idSemana:number, fecha:string){
     return this.http.get<any>(environment._APIUrl+'api/deportivo/programacion/'+idPeriodo+'/'+idCategoria+'/'+idEquipo+'/'+numeroFecha+'/'+idSemana+'/'+fecha)
   }

  // setResultado(idCalendario:number,lado:string,resultado:number){
  //   let dato ={
  //     idCalendario: idCalendario,
  //     lado:lado,
  //     resultado:resultado,
  //     idUsuario: this.loopBackAuthService.load().usuario.id
  //   }
  //   console.log("ver asignar resultado-->", environment.apiUrl+'api/deportivo/calendario/asignar',dato)
  //   return this.http.post(environment.apiUrl+'api/deportivo/calendario/asignar',dato)
  // }

  // publicaResultadoCalendario(idCalendario:number, idEstado:number){
  //   let dato ={
  //     idCalendario: idCalendario,
  //     lado:'',
  //     resultado:idEstado,
  //     idUsuario: this.loopBackAuthService.load().usuario.id
  //   }
  //   return this.http.post(environment.apiUrl+'api/deportivo/calendario/publicar',dato)
  // }

  // fechasCalendario(idCategoria:number, idTipo:number){
  //   console.log("fecha calendario",idCategoria,idTipo)
  //   return this.http.get<any>(environment.apiUrl+'api/deportivo/calendario/fechas/'+idCategoria+'/'+idTipo)
  // }

  // equiposJuegan(idPerido:number){
  //   return this.http.get<any>(environment.apiUrl+'api/deportivo/calendario/equipos/juegan/'+idPerido)
  // }
  // programarHorarios(idPeriodo:number, idSemana:number){
  //   console.log('api/deportivo/calendario/programas/horarios/'+idPeriodo+'/'+idSemana)
  //   return this.http.get<any>(environment.apiUrl+'api/deportivo/calendario/programas/horarios/'+idPeriodo+'/'+idSemana)
  // }

  // programacionSemana(idPeriodo:number){
  //   return this.http.get<any>(environment.apiUrl+'api/deportivo/calendario/programas/semana/'+idPeriodo)
  // }

  // saveProgramas(porgramas:any[]){
  //   return this.http.post(environment.apiUrl+'api/deportivo/programacion',porgramas)
  // }

  // contadorProgramacion(idSemana:number){
  //   return this.http.get<any>(environment.apiUrl+'api/deportivo/programacion/contador/'+idSemana)
  // }

  // equipoByCategoria(idCategoriaEquipo:number){
  //   return this.http.get<any>(environment.apiUrl+'api/deportivo/equipo/categoria/'+idCategoriaEquipo)
  // }

   publicaPartidoProgramado(idSemana:number, idUsuario:number){
     return this.http.get<any>(environment._APIUrl+'api/deportivo/programacion/publicar/'+idSemana+'/'+idUsuario)
   }

  // calendarioEquipo(idPeriodo:number, idEquipo:number,idTipo:number){
  //   console.log('calendario equipo -->', idPeriodo,idEquipo)
  //   return this.http.get<any>(environment.apiUrl+'api/deportivo/partido/equipo/'+idPeriodo+'/'+idEquipo+'/'+idTipo)
  // }
}
