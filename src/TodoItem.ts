class TodoItem {
  //   public id: number; //접근 지정자 : private, public, protected
  //   public task: string;
  //   public complete: boolean;

  constructor(
    public id: number,
    public task: string,
    public complete: boolean
  ) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }
  printDetails(): void {
    console.log(
      `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
    );
  }
}
export default TodoItem;
