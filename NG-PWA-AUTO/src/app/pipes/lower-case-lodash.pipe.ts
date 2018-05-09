import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "lowerCaseLodash" })
export class LowerCaseLodashPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\s+/g, "_").toLowerCase();
  }
}
