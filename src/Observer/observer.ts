interface Subscriber {
  update(data: any): void;
}
interface Publisher {
  subscribe(sub: Subscriber): void;
  unSubscribe(sub: Subscriber): void;
  notifySubscribers(data: any): void;
}
interface Display {
  display(): void;
}

export class JSTimes implements Publisher {
  private subscribers: Subscriber[] = [];
  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }
  unSubscribe(subscriber: any) {
    this.subscribers = this.subscribers.filter(
      (element: any) => subscriber.name !== element.name
    );
  }
  notifySubscribers(data: any) {
    this.subscribers.forEach((subscriber) => subscriber.update(data));
  }
}

export class JSTimesReader implements Subscriber, Display {
  constructor(public name: string) {}
  private state: any = {};
  update(data: any) {
    this.state = data;
    this.display();
  }
  display() {
    console.log(`${this.name} received: ${JSON.stringify(this.state)}`);
  }
}
