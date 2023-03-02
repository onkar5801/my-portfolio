import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
   {path:'about',
   component:AboutComponent
 
   },
  {path:'education',
   component:EducationComponent
},
{path:'projects',
   component:ProjectsComponent
},
{path:'skills',
   component:SkillsComponent
},
{path:'contact',component:ContactComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
