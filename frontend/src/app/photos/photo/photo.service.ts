import { Photo } from './photo';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:3000/';

@Injectable({ providedIn: 'root' }) // Este decorator diz que o service é injetavel, ou seja, pode receber HttpClient e outros dentro dele. O providedIn setado como root define o escopo de utilização da instancia desta classe como o raiz da aplicação
export class PhotoService {
  constructor(private http: HttpClient) { } // Utilizar um modificador de acesso em um parametro de um método construtor o torna uma propriedade da classe

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(API + userName + '/photos'); //Um observable é lazy, pois só busca os dados quando alguém se inscreve nele
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(API + userName + '/photos', { params });
  }
}
