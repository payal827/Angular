import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfElseComponent } from './components/controlflow/if-else/if-else.component';
import { ForComponent } from './components/controlflow/for/for.component';
import { SwitchComponent } from './components/controlflow/switch/switch.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetApiComponent } from './components/apiintegration/get-api/get-api.component';
import { PostApiComponent } from './components/apiintegration/post-api/post-api.component';
import { LifecycleEventComponent } from './components/lifecycle-event/lifecycle-event/lifecycle-event.component';
import { NgTemplateComponent } from './components/directive/ng-template/ng-template.component';
import { NgContainerComponent } from './components/directive/ng-container/ng-container.component';
import { ViewchildComponent } from './components/decorators/viewchild/viewchild.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './service/auth.guard';


export const routes: Routes = [
    //defaul troute
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'add-emp',
                component: AddEmployeeComponent,
                // canActivate: [authGuard]
            },
            {
                path: 'data-binding',
                component: DataBindingComponent,
                canActivate: [authGuard]
            },
            {
                path: 'emp-list',
                component: EmployeeListComponent
            },
            {
                path: 'structural-dir',
                component: StructuralDirComponent,
                canActivate: [authGuard]
            },
            {
                path: 'attributedirective',
                component: AttributeDirectiveComponent
            },
            {
                path: "if-else",
                component: IfElseComponent
            },
            {
                path: 'for',
                component: ForComponent
            },
            {
                path: 'switch-case',
                component: SwitchComponent
            },
            {
                path: 'pipe',
                component: PipeComponent
            },
            {
                path: 'template',
                component: TemplateComponent
            },
            {
                path: 'reactive',
                component: ReactiveComponent
            },
            {
                path: 'get-api',
                component: GetApiComponent
            },
            {
                path: 'post-api',
                component: PostApiComponent

            },
            {
                path: 'lifecycle-event',
                component: LifecycleEventComponent
            },
            {
                path: 'ng-template',
                component: NgTemplateComponent
            },
            {
                path: 'ng-container',
                component: NgContainerComponent
            },
            {
                path: 'view-child',
                component: ViewchildComponent
            }

        ]
    }

];
