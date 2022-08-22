import { rootRouterConfig } from './app.routes';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//Necessário para colocar o formato de dinheiro
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);
// fecha

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/'},
    // necessário para formatar o dinheiro
    {provide: LOCALE_ID, useValue: 'pt'},
    // fecha
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
