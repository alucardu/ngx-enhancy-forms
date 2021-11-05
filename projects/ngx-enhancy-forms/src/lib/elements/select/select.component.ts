import {Component, Host, Input, OnInit, Optional} from '@angular/core';
import {ControlContainer, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValueAccessorBase} from '../value-accessor-base/value-accessor-base.component';
import {FormElementComponent} from '../../form/form-element/form-element.component';
// import { TranslateService } from '@ngx-translate/core';
// import { _ } from '~/app/util/i18n'; // TODO: translate

export type AppSelectOptions = Array<{
	id: any;
	name: string;
	description?: string;
	disabled?: boolean;
}>;

@Component({
	selector: 'lib-enhancy-forms-form-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: SelectComponent, multi: true}],
})
export class SelectComponent extends ValueAccessorBase<string | string[]> implements OnInit {
	@Input() placeholder: string;
	@Input() options: AppSelectOptions;
	@Input() multiple = false;
	@Input() clearable = true;
	@Input() public dropdownPosition: string;
	@Input() public customSearchFn: (term: string, item: { id: string; name: string; description: string }) => boolean;

	constructor(
		@Optional() @Host() protected parent: FormElementComponent,
		@Optional() @Host() protected controlContainer: ControlContainer,
		// private translate: TranslateService
	) {
		super(parent, controlContainer);
	}

	ngOnInit(): void {
		super.ngOnInit();
		if (!this.placeholder) {
			// this.placeholder = this.translate.instant(_('Pick an option'));
			this.placeholder = ('Pick an option');
		}
	}
}
