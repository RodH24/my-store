import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  onLoaded(img: string) {
    console.log('log padre', img);
  }

  widthImg = 10;
  name = 'Hector';
  age = 33;
  img =
    'https://megamitoys.com.mx/cdn/shop/files/00_755x1000_0a845dec-2229-4a89-9f89-6ddce627059a.webp?v=1686243340';
  btnDisabled = true;
  register = {
    name: '',
    email: '',
    password: ''
  }
  person = {
    name: 'Hector',
    age: 33,
    avatar:
      'https://megamitoys.com.mx/cdn/shop/files/00_755x1000_0a845dec-2229-4a89-9f89-6ddce627059a.webp?v=1686243340',
  };

  names: string[] = ['Hector', 'Manuel', 'Vero', 'Montse'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };


  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);

  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
