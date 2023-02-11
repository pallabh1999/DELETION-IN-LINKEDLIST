class Node 
{
  constructor(a)
  {
    this.value=a;
    this.next=null;
  }
}
// inserting node at the start
inserting_start = function(head,value)
{
  var new_head = new Node(value);
  new_head.next = head;
  return new_head;
}
// to print all the value
display = function(head)
{
  var temp = head;
  while(temp!=null)
  {
    console.log(temp.value);
    temp=temp.next;
  }
}
// inserting node at the end 
inserting_end = function(head,value)
{
  var new_end = new Node(value);
  var temp = head;
  while(temp.next!=null)
  {
    temp = temp.next;
  }
  
  temp.next = new_end;
  
}
// inserting at the mid of the linked_list
inserting_mid = function(head,n,value)
{
  var new_mid = new Node(value);
  var temp=head;
  while(n-1>0)
  {
   temp=temp.next;
   n=n-1;
  }
  var x = temp.next;
  temp.next = new_mid;
  new_mid.next = x;
}

// DELETING from the end
deleting_end = function(head)
{
  var temp= head;
  // SO WE HAVE TO HANDLE SOME EDGE CASES HERE
  // AS WE KNOW NULL.NEXT DOES NOT EXIST S0 temp.NEXT!= NULL 
  // IT CAN ONLY BE POSSIBLE IF U HAVE ONLY ONE NODE
  while(temp.next!=null && temp.next.next!=null)
  {
    temp=temp.next;
  }
  temp.next= temp.next.next;
}

// deleting from mid or nth Node
deleting_mid = function(head,n)
{
  temp=head;
  while(n-2!=0)
  {
    temp=temp.next;
    n=n-1;
  }
  temp.next= temp.next.next;
}



head = new Node(7);
head = inserting_start (head,6);
console.log(head);
inserting_end(head,8)
inserting_mid(head,1,10000000000000000)

// DELETING FROM THE start
 head=head.next;

// DELETING FROM THE end
deleting_end (head);
// DELETING FROM MID
deleting_mid (head,2)

display(head);