class Subscriber {
    constructor(name, emailAddress, age) {
      this.name = name;
      this.emailAddress = emailAddress;
      this.age = age;
    }
  }
  
  class Message {
    constructor(content, minimumAge = null) {
      this.content = content;
      this.minimumAge = minimumAge;
    }
  }
  
  class NewsletterSystem {
    constructor(sendEmail) {
      this.subscribers = [];
      this.sendEmail = sendEmail;
    }
  
    sendNewsletter(message) {
      for (const subscriber of this.subscribers) {
        if (subscriber.age >= (message.minimumAge || 0)) {
          const personalizedMessage = `Hello ${subscriber.name} ${message.content}`;
          this.sendEmail(subscriber.emailAddress, personalizedMessage);
        }
      }
    }
  
    subscribe(subscriber) {
      if (subscriber.age >= 13 && !this.subscribers.includes(subscriber)) {
        this.subscribers.push(subscriber);
      }
    }
  
    unsubscribe(subscriber) {
      const index = this.subscribers.indexOf(subscriber);
      if (index !== -1) {
        this.subscribers.splice(index, 1);
      }
    }
  }