import { Field } from '@shared/interfaces/forms/field';

export const FormLogin: Field[] = [
  {
    label: 'Nombre',
    placeholder: 'juan perez',
    type: 'text',
    item: 'email',
    name: 'email',
    required: true,
  },
  {
    label: 'Apellido',
    placeholder: '********',
    type: 'text',
    item: 'password',
    name: 'password',
    required: true,
  },
  {
    label: 'Departamento',
    placeholder: 'bogota',
    type: 'text',
    item: 'password',
    name: 'password',
    required: true,
  },
  {
    label: 'Ciudad',
    placeholder: 'bogota',
    type: 'text',
    item: 'password',
    name: 'password',
    required: true,
  },
  {
    label: 'Numero de documento',
    placeholder: 'bogota',
    type: 'text',
    item: 'password',
    name: 'password',
    required: true,
  },
];

export const FormOTP: Field[] = [
  {
    label: 'Código de verificación',
    placeholder:'code',
    type: 'otp',
    item: 'code',
    name: 'code',
    required: true,
  },
  {
    label: 'numero de telefono',
    placeholder:'phone',
    type: 'hidden',
    item: 'phone',
    name: 'phone',
    required: true,
  },
];
