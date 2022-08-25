import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'vuela'
})
export class VuelaPipes implements PipeTransform {

    transform(value: boolean) {
        return (value ) ? 'vuela': 'no vuela';
    }

}