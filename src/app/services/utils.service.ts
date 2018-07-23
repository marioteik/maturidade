import { Injectable } from '@angular/core';
import { cloneDeep, reject } from 'lodash';

@Injectable()
export class UtilsService {
    removeFromArray(arr: any[], f): any[] {
        let newArr = cloneDeep(arr);

        newArr = reject(newArr, f);

        return newArr;
    }
}
