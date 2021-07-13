/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Customer
 */
import { Contact } from './Contact';

export class Customer {
  private readonly id: string;
  private readonly name: string;
  private readonly login: string;
  private readonly contacts: Contact[];

  constructor(name: string, login: string, id: string | null = null) {
    this.name = name;
    this.login = login;
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public getLogin(): string {
    return this.login;
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
