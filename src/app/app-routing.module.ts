import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './landing/index/index.component';
import { WhatIsItComponent } from './landing/what-is-it/what-is-it.component';
import { RouteQuestionnaireComponent } from './application/route-questionnaire/route-questionnaire.component';
import { SplashScreenComponent } from './application/splash-screen/splash-screen.component';
import { WelcomeScreenComponent } from './application/welcome-screen/welcome-screen.component';
import { RouteScreenComponent } from './application/app-navigation/route-screen/route-screen.component';
import { RouteConfirmationComponent } from './application/route-confirmation/route-confirmation.component';
import { TaskComponent } from './application/app-navigation/route-screen/task/task.component';
import { RewardsComponent } from './application/app-navigation/rewards/rewards.component';
import { WhatIsPingpingComponent } from './application/what-is-pingping/what-is-pingping.component';
import { GoalsComponent } from './application/app-navigation/goals/goals.component';
import { CreateGoalComponent } from './application/app-navigation/goals/create-goal/create-goal.component';
import { RouteOverviewComponent } from './application/route-overview/route-overview.component';
import { AchievementsComponent } from './application/app-navigation/rewards/achievements/achievements.component';
import { DeleteDataComponent } from './application/app-navigation/more/delete-data/delete-data.component';
import { MoreComponent } from './application/app-navigation/more/more.component';
import { ExportComponent } from './application/app-navigation/more/export/export.component';
import { ImportComponent } from './application/app-navigation/more/import/import.component';
import { ImportConfirmationComponent } from './application/app-navigation/more/import/import-confirmation/import-confirmation.component';
import { DeleteDataConfirmationComponent } from './application/app-navigation/more/delete-data/delete-data-confirmation/delete-data-confirmation.component';
import { PrivacyComponent } from './application/app-navigation/more/privacy/privacy.component';
import { TipsComponent } from './application/app-navigation/route-screen/task/tips/tips.component';

const routes: Routes = [
  { path: 'app', component: SplashScreenComponent },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'what-is-pingping', component: WhatIsPingpingComponent },
  { path: 'route-questionnaire', component: RouteQuestionnaireComponent },
  { path: 'route-questionnaire/:questionPosition', component: RouteQuestionnaireComponent },
  { path: 'route-confirmation', component: RouteConfirmationComponent },
  { path: 'route-screen', component: RouteScreenComponent },
  { path: 'route-overview', component: RouteOverviewComponent },
  { path: 'task/:task', component: TaskComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'create-goal', component: CreateGoalComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'more', component: MoreComponent },
  { path: 'export', component: ExportComponent },
  { path: 'import', component: ImportComponent },
  { path: 'import-confirmation', component: ImportConfirmationComponent },
  { path: 'delete-data', component: DeleteDataComponent },
  { path: 'delete-data-confirmation', component: DeleteDataConfirmationComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'watishet', component: WhatIsItComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
