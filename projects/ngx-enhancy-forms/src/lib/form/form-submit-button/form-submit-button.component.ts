import {Component, Host, HostBinding, Input, Optional} from '@angular/core';
import {FormComponent} from '../form.component';

@Component({
	selector: 'lib-enhancy-forms-form-submit-button',
	templateUrl: './form-submit-button.component.html',
	styleUrls: ['./form-submit-button.component.scss'],
})
export class FormSubmitButtonComponent {
	@Input() public isLoading = false;
	@Input() fullWidth = false;
	@Input() variant: 'greenFilled' | 'redFilled' = 'greenFilled';
	@Input() public submitCallback: (value: any) => Promise<null>;

	@HostBinding('class._fullWidth') get _(): boolean {
		return this.fullWidth;
	}

	constructor(@Host() @Optional() private parentForm: FormComponent) {
	}

	submitForm(): void {
		this.parentForm
			.trySubmit()
			.then((value) => {
				this.isLoading = true;
				this.submitCallback(value)
					.then(() => (this.isLoading = false))
					.catch(() => (this.isLoading = false));
			})
			.catch(() => {
			}); // swallow the error, the framework will scroll to the field that needs attention
	}
}
