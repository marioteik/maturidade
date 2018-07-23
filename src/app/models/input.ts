enum inputType {
  'text',
  'password',
  'submit',
  'reset',
  'radio',
  'checkbox',
  'button',
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'range',
  'search',
  'time',
  'url',
  'week'
}

interface InputBase {
  name?: string;
  type?: inputType;
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
}
