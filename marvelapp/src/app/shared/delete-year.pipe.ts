import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'deleteYear'
})
export class DeleteYear implements PipeTransform {

    transform(value: string): string {
        return value.replace(/\([^()]*\)/g,'');
    }
}