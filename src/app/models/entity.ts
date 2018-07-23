export interface Entity {
    __v?: number;
    _id?: string;
    name: string;
    route: string;
    permission?: string;
    formSchema: FormField[];
}

export class FormField implements InputBase {
    _id?: string;
    name: string;
    type: inputType;
    value?: 'T';
    readonly?: boolean;
    disabled?: boolean;
    size?: number;
    maxlength?: number;
    autocomplete?: boolean;
    autofocus?: boolean;
    form?: string;
    list?: string;
    min?: number;
    max?: number;
    multiple?: boolean;
    pattern?: string;
    placeholder?: string;
    required?: boolean;
    step?: number;

    constructor(options: InputBase = {}) {
        this.name = options.name;
        this.type = options.type;
        this.value = options.value;
        this.readonly = options.readonly;
        this.disabled = options.disabled;
        this.size = options.size;
        this.maxlength = options.maxlength;
        this.autocomplete = options.autocomplete;
        this.autofocus = options.autofocus;
        this.form = options.form;
        this.list = options.list;
        this.min = options.min;
        this.max = options.max;
        this.multiple = options.multiple;
        this.pattern = options.pattern;
        this.placeholder = options.placeholder;
        this.required = options.required;
        this.step = options.step;
    }
}
