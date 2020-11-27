import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { FinishComponent } from './components/finish/finish.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

const routes: Routes = [
  {path:'step1' , component:PersonalDetailsComponent},
  {path:'step2' , component:ContactDetailsComponent},
  {path:'step3' , component:SkillsComponent},
  {path:'step4' ,component:WorkExperienceComponent},
  {path:'finish' ,component:FinishComponent},
  {path:'' , redirectTo:'step1', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
