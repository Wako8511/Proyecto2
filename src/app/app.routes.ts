import { Routes } from '@angular/router';
import { CharacterList } from './feature/component/character-list/character-list';

export const routes: Routes = [
    {
        path: 'characters',
        component: CharacterList
    },
    {
        path: 'Characters',
        redirectTo: 'characters'
    },
    {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
    }
];
