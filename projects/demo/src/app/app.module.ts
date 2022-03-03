import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxEnhancyFormsModule} from '@klippa/ngx-enhancy-forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubFormExampleComponent} from './subForm/sub-form-example.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		NgxEnhancyFormsModule,
	],
	declarations: [
		AppComponent,
		SubFormExampleComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
