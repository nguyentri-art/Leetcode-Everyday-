function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  var carry = 0;
  var sum = 0;
  var head = new ListNode(0);
  var now = head;
  var a = l1;
  var b = l2;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  console.log(head.next);
  return head.next;
};

l1 = [2, 4, 3];
l2 = [5, 6, 4];

console.log("demo result " + addTwoNumbers(l1, l2));
