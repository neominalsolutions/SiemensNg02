export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

// features klasöründeki componentler bu modeli ortak olarak arayüzde kullancaklar.
// TodoList, TodoItem ve TodoCreate ortak kullanılacak.