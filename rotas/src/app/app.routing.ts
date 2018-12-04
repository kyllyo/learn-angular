import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CursosComponent } from "./cursos/cursos.component";
import { LoginComponent } from "./login/login.component";
import { ModuleWithProviders } from "@angular/core";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";

const APP_ROUTES: Routes = [
    { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard] },
    { path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        /*canActivateChild: [AlunosGuard]*/ },
    //{path: 'cursos', component: CursosComponent},
    //{path: 'curso/:id', component: CursoDetalheComponent},
    {path: 'login', component: LoginComponent},
    //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

