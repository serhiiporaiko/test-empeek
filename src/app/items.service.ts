import { Injectable } from '@angular/core';
import { StorageService } from "./storage.service";
import { Item } from "./item";
import { HasId } from "./hasId";

@Injectable()
export class ItemsService {
    ITEMS_KEY = "items";
    items: Item[];

    constructor(private storageService: StorageService) { }

    getItems(): Item[] {
        if (this.items)
            return this.items;

        this.items = this.storageService.getItem(this.ITEMS_KEY);

        if (!this.items)
            this.items = [];

        return this.items;
    }

    newId(arr: HasId[]) {
        if (!arr || arr.length == 0)
            return 1;
        let maxId = Math.max.apply(null, arr.map(p => p.id));
        return maxId + 1;
    }

    saveItems() {
        this.storageService.setItem(this.ITEMS_KEY, this.items);
    }

    addItem(name: string) {
        let item = {
            id: this.newId(this.items),
            name: (name || '').trim(),
            comments: []
        };
        this.items.push(item);
        this.saveItems();
        return item;
    }

    deleteItem(id: number) {        
        let itemIndex = this.items.findIndex(item => item.id == id);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
            this.saveItems();
        }
    }

    addComment(id: number, text: string) {
        let item = this.items.find(item => item.id == id);
        if (item) {
            item.comments.push({
                id: this.newId(item.comments),
                text: (text || '').trim(),
                author: {
                    name: 'Anonymous',
                    photoUrl: 'https://fakeimg.pl/50x50/'
                }
            });
            this.saveItems();
        }
    }
}