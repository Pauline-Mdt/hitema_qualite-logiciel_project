export default class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}