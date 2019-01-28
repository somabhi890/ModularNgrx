import { Action } from '@ngrx/store';

export enum ModuleOneActionTypes {
  LoadModuleOnes = '[ModuleOne] Load ModuleOnes'
}

export class LoadModuleOnes implements Action {
  readonly type = ModuleOneActionTypes.LoadModuleOnes;
}

export type ModuleOneActions = LoadModuleOnes;
