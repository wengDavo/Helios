import { InjectionToken } from "@angular/core";

export const appname = new InjectionToken<string>('app name',{
    providedIn:'root',
    factory: () => 'Kami'
})