import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: '2',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://m.media-amazon.com/images/I/51X3ucqG5wL._AC_UF894,1000_QL80_.jpg',
      category: 'all',
    },
    {
      id: '3',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtamON28GKBZ-wHLZIh9W3hkQV3SiozSgMw&usqp=CAU',
    },
    {
      id: '4',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubg8q3XaAIwhGeOTVyFha8-jbg42SfcpNBg&usqp=CAU',
    },
    {
      id: '5',
      name: 'Mis libros',
      price: 23,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpgmvHkZEgiXlEaqJK80ZVPdcx9Xz9IzRO42eXV889cr9bA3IOgLiHrfiDB5mJ36nTko&usqp=CAU',
    },
    {
      id: '6',
      name: 'Casa para perro',
      price: 34,
      image: 'https://www.petco.com.mx/medias/118811.jpg-1200ftw?context=bWFzdGVyfHJvb3R8Mzg0OTY1fGltYWdlL2pwZWd8aDY3L2g2OC8xMDUxNTMzODY1NzgyMi8xMTg4MTEuanBnXzEyMDBmdHd8MGRkNmZiNzNlMDEyYWM2MjFlMDE1ZjY3Y2RmYjMzZmViYmFjMzliYTg2MjRmNjYyNGI4YmI5NTRlYzVkMDZiYw'
    },
    {
      id: '7',
      name: 'Gafas',
      price: 3434,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW48YLTNIZ8KesceT4mdPF4tJre0HLe2KT2A&usqp=CAU'
    }
  ];

}
