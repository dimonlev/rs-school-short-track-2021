const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.length === 0) {
      this.value = new ListNode(element);
    } else {
      let temp = this.value;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new ListNode(element);
    }
    this.length++;
  }

  dequeue() {
    const first = this.value;
    this.value = this.value.next;
    this.length--;
    return first.value;
  }
}

module.exports = Queue;
