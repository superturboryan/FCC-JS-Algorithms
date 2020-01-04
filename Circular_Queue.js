/*
In this challenge you will be creating a Circular Queue. 
A circular queue is a queue that writes to the end of a collection then begins overwriting itself at the beginning of the collection. 
This type of data structure is useful in certain situations. For example, a circular queue can be used for streaming media. 
Once the queue is full, new media data will overwrite old data.

A good way to illustrate this concept is with an array of length 5:
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
Here the read and write are both at position 0. 

Now the queue gets 3 new records a, b, and c. Our queue now looks like:
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3

As the read head reads, it can remove values or keep them:
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
Now we write the values d, e, and f to the queue. 

Once the write reaches the end of the array it loops back to the beginning:
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1

This approach requires a constant amount of memory but allows files of a much larger size to be processed.
*/

class CircularQueue {
    constructor(size) {
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
      while (size > 0) {
         this.queue.push(null);
         size--;
      }
    }
 
    print() {
      return this.queue;
    }
 
    enqueue(item) {
        // If write is at last index and spot is null, write to last index then site write pointer to beginning
        if (this.write == this.max && this.queue[this.write] == null) {
          this.queue[this.write] = item
          this.write = 0
          // And return the written item
          return item
        }
        // Otherwise if the spot for the write pointer is null, write to the spot
        else if (this.queue[this.write] == null) {
        this.queue[this.write] = item
        // Then increment the write counter
        this.write += 1
        // And return the written item
          return item
        }
        // Otherwise the spot is already taken/not read. Do not write! Return null
        else {
          return null
        }
    }
 
    dequeue() {

        if (this.queue[this.read] == null) {
          return null
        }
        let num = this.queue[this.read]
        this.queue[this.read] = null
        this.read == this.max ? this.read = 0 : this.read += 1
         return num
      }
 } 

 let queue = new CircularQueue(5)

 queue.enqueue(1)
 queue.enqueue(2)
 queue.enqueue(3)
 queue.enqueue(4)
 queue.enqueue(5)

 let first = queue.dequeue()
 let second = queue.dequeue()
 let third = queue.dequeue()
 console.log(queue.queue)
 console.log("Old first: " + first)
 console.log("Old second: " + second)
 console.log("Old third: " + third)
 console.log("Read: " + queue.read + " Write: " + queue.write)
 queue.enqueue(6)
 console.log(queue.queue)
 queue.enqueue(7)
 console.log(queue.queue)
 queue.enqueue(8)
 console.log(queue.queue)
 queue.dequeue()
 console.log(queue.queue)