"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    //   public id: number; //접근 지정자 : private, public, protected
    //   public task: string;
    //   public complete: boolean;
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.default = TodoItem;
