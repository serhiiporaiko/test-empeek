import { ItemComment } from "./item-comment";
import { HasId } from "./hasId";

export class Item implements HasId {
    id: number;
    name: string;
    comments: ItemComment[];
}