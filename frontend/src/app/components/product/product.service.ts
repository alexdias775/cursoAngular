import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  // leitura de uma lista 
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  /* passando como um parâmetro para esse método 
  um "id"(como string)  */
  // 


  // abaixo teremos como uma resposta de chamada
  // um Observable de produto, ou seja, pode sobrescrever
  // para registrar uma função e quando a resposta desse produto
  // chegar do backend aí sim é chamada a função para implementar a lógica 
  

  // método para ler por id, ou seja, de um único produto
  readById(id: string): Observable<Product> {
      // passando uma url base com o id do produto
      // através de uma variavel url
      // a variavel url chama o endereço do produto
      const url = `${this.baseUrl}/${id}`
      // passa como parametro url
      // vai realizar do Product
      return this.http.get<Product>(url)
      // 
    }

    update(product: Product): Observable<Product> {
      const url = `${this.baseUrl}/${product.id}`
      return this.http.put<Product>(url, product)
    }

  // para atualizar precisa-se obter um produto por id, apenas um único 
  // produto, e precisa-se também de um método  que vai submeter ums requisição do tipo 
  // put, que é uma requisição que vai atualizar um produto no backend. 
  // Há dois métodos que podem ser usados: o patch, quando se quer atualizar 
  // apenas alguns atributos do produto. O put, quando se quiser atualizar o objeto inteiro. 


    delete(id: string): Observable<Product> {
      const url = `${this.baseUrl}/${id}`;
      return this.http.delete<Product>(url)
    }
}
