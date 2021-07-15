/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Customer
 */
import { Contact } from './Contact';

export class Customer {
  private readonly id: string;
  private readonly name: string;
  private readonly phone: string;
  private readonly contacts: Contact[] = [];

  constructor(name: string, phone: string, id: string | null = null) {
    this.name = name;
    this.phone = phone;
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    const found = this.contacts.find(
      (cont) =>
        cont.getName() !== contact.getName() &&
        cont.getChannel() !== contact.getChannel() &&
        cont.getValue() !== contact.getValue(),
    );

    if (!found) {
      this.contacts.push(contact);
    }
  }

  public removeContact(contact: Contact) {
    const foundIndex = this.contacts.findIndex(
      (cont) =>
        cont.getName() === contact.getName() &&
        cont.getChannel() === contact.getChannel() &&
        cont.getValue() === contact.getValue(),
    );

    if (foundIndex !== -1) {
      this.contacts.splice(foundIndex, 1);
    }
  }

  public updateAllContacts(contacts: Contact[]) {
    while (this.contacts.length) {
      this.contacts.pop();
    }
    contacts.forEach((contact) => this.addContact(contact));
  }
}
