import { Component, OnInit } from '@angular/core';
import { StorageService } from "./storage.service";
import { ItemsService } from "./items.service";
import { Item } from "./item";
import { ItemComment } from "./item-comment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemsService, StorageService]
})
export class AppComponent implements OnInit {
  
  items: Item[] = [];
  activeItem: Item;
  itemNameToAdd: string;
  commentTextToAdd: string;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
    if (this.items.length > 0)
      this.activeItem = this.items[0];
  }  

  addItem() {
    let name = (this.itemNameToAdd || '').trim();
    if (name) {
      let item = this.itemsService.addItem(this.itemNameToAdd);
      this.itemNameToAdd = '';
      this.activeItem = item;
    }
  }

  deleteItem(id: number) {
    if (confirm('Are you sure?')) {
      this.itemsService.deleteItem(id);
      if (this.activeItem && id == this.activeItem.id) {
        if (this.items.length > 0)
          this.activeItem = this.items[0];
        else
          this.activeItem = undefined
      }        
    }
  }

  isActiveItem(item: Item) {
    return this.activeItem && this.activeItem.id == item.id;
  }

  setActiveItem(item: Item) {
    this.activeItem = item;
    this.commentTextToAdd = '';
  }

  addComment(id: number) {
    let text = (this.commentTextToAdd || '').trim();
    if (text) {
      this.itemsService.addComment(id, this.commentTextToAdd);
      this.commentTextToAdd = '';
    }
  }
}
