// src/app/app.route.ts

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contacts } from './contacts/contacts';
import { About } from './about/about';
import { New } from './new/new';

// Nome do site para compor o `title`
const siteName = "NgLegal";

export const routes: Routes = [
    // Rotas vazias redirecionam para a `/home` ← Sempre a primeira
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    // Páginas { rota, componente, título }
    { path: 'home', component: Home, title: siteName },
    { path: 'contacts', component: Contacts, title: `${siteName} - Faça Contato` },
    { path: 'about', component: About, title: `${siteName} - Sobre` },
    { path: 'new', component: New, title: `${siteName} - Cadastro` },
    // Rota coringa para redirecionar caminhos inválidos ← Sempre a última
    { path: '**', redirectTo: '/home' }
];
