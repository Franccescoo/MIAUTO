import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { DbservicioService } from 'src/app/services/dbservicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  ingreso: any = {
    nombre: '',
    clave: ''
  };

  ListaDatos: any = [
    {
      idUsuario: '',
      nombre: '',
      username: '',
    }
  ]
  user:any[] =[]

  constructor(private router: Router, private api: ApiservicesService, private bd: DbservicioService,public storage: Storage,private toastController: ToastController) { }

  ngOnInit() {
    this.bd.dbState().subscribe((res) => {
      if (res){
        this.bd.fetchUser().subscribe(item => {
          this.user = item;
          this.ListaDatos = item;
        })
      }
      
    })
    
  }

  async iniciarSesion(){
    await this.bd.login(this.ingreso.nombre, this.ingreso.clave);
    if (this.ingreso.nombre.length == 0) {
        this.presentToast("Ingrese usuario");
    }
    else if(this.ingreso.clave == 0){
      this.presentToast("Ingrese Su Contraseña");
    }
    else if(this.user.length == 0){
      this.presentToast("Usuario y/o Contraseña incorrecta");
    }else{
      let navigationsExtras: NavigationExtras ={
       state: {
         idEnviado: this.user[0].iduser
       }
      }
      //this.router.navigate(['/home'], navigationsExtras);

       this.router.navigate(['/home'], navigationsExtras);

      // if (this.user[0].fk_id_tipousuario == 2) {
      //   this.router.navigate(['/home']);
      //   this.presentToast("Bienvenido "+ this.ingreso.nombre);
      // } else {
      //   if (this.user[0].fk_id_tipousuario == 1) {
      //     this.router.navigate(['/home']);
      //     this.presentToast("Bienvenido "+ this.ingreso.nombre);
      //   }
      
  
      // }
    
  
    }
  }


  
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000

    });
    toast.present();
  }
}
