import { ItemAuthor } from "./item-author";
import { HasId } from "./hasId";

export class ItemComment implements HasId {
    id: number;
    text: string;
    author: ItemAuthor;
}