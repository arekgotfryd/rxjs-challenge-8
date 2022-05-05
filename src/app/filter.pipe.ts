import { Pipe, PipeTransform } from "@angular/core";

export type Mapper<T, G> = (item: T, ...args: any[]) => G;
export type Matcher<I> = Mapper<I, boolean>;

@Pipe({ name: "filter" })
export class FilterPipe<T> implements PipeTransform {
  transform(items: ReadonlyArray<T>, matcher: Matcher<T>, ...args: any[]): T[] {
    return items.filter(item => matcher(item, ...args));
  }
}
