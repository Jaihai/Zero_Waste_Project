// app.routes.ts
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { EssentialsComponent } from '../essentials/essentials.component';
 import { HouseholdComponent } from '../household/household.component';
  import { HaircareComponent } from '../haircare/haircare.component'; 
  import { CleanbeautyComponent } from '../cleanbeauty/cleanbeauty.component'; 
  import { BathbodyComponent } from '../bathbody/bathbody.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './cart/CheckOut/checkout.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminAddProductComponent } from './admin/admin-add-product/admin-add-product.component';
import {UserHomeComponent} from '../User/UserHome.component';
import { authGuard } from './admin/auth.guard';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from '../app/order/orders.component';
import { UserService } from './services/services.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { FooterComponent } from './footer/footer.component';
import {ManageComponent} from './admin/ManageOrder/manage.component';
export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'essentials', component: EssentialsComponent },
  { path: 'household', component: HouseholdComponent },
  { path: 'haircare', component: HaircareComponent },
  { path: 'cleanbeauty', component: CleanbeautyComponent },
  { path: 'bathbody', component: BathbodyComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'cart', component: CartComponent },
 {path:"UserHome",component:UserHomeComponent},
 {path:"checkout",component:CheckoutComponent},
 {path:"ProductsComponent",component:ProductsComponent},
 {path:"orders",component:OrdersComponent},
 {path:"services",component:UserService},
 {path:"search",component:SearchResultsComponent},
 {path:"footer",component:FooterComponent},
 {path:"admin/manage",component:ManageComponent},
  // 🔹 ADMIN ROUTES
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [authGuard] },
  { path: 'admin/add-product', component: AdminAddProductComponent, canActivate: [authGuard] },


  { path: '**', redirectTo: '' }  // wildcard
];
