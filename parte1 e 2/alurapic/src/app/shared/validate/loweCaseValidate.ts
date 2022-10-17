import { AbstractControl } from "@angular/forms";

export function loweCaseValidate(control: AbstractControl) {
  const value = control.value as string;
  if (value.trim() && !/^[a-z0-9_\-]+$/.test(value)) {
    return { loweCase: true };
  }
  return null;
}