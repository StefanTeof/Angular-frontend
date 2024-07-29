import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'add-category', component: AddCategoryComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' }
];

