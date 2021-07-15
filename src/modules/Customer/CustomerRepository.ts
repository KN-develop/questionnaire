/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerRepository
 */
import { Injectable, NotImplementedException } from '@nestjs/common';
import { Collection, Connection, Types } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Customer } from '../../entities/Customer';
import { RepositoryInterface } from '../../repository/RepositoryInterface';
import { Question } from '../../entities/Question';
import { Contact } from '../../entities/Contact';

@Injectable()
export class CustomerRepository implements RepositoryInterface {
  private readonly collection: Collection =
    this.connection.collection('customers');

  constructor(@InjectConnection() private readonly connection: Connection) {}

  public async getByPhone(phone: string): Promise<Customer> {
    const found = await this.collection.findOne({
      phone: phone,
    });

    if (!found) {
      throw new Error('Customer not found');
    }

    return this.documentToEntity(found);
  }

  public async save(customer: Customer): Promise<void> {
    const id = Reflect.get(customer, 'id');

    if (id) {
      throw new Error(
        'Customer is already saved in db, please call update if you want is it',
      );
    }

    const found = await this.collection.findOne({
      phone: customer.getPhone(),
    });
    if (found) {
      throw new Error(
        'Customer is already saved in db, please call update if you want is it',
      );
    }

    const document = this.entityToDocument(customer);
    const result = await this.collection.insertOne(document);
    Reflect.set(customer, 'id', result.insertedId.toString());
  }

  public async get(id: string): Promise<Customer> {
    const found = await this.collection.findOne({
      _id: new Types.ObjectId(id),
    });

    if (!found) {
      throw new Error('Customer not found');
    }

    return this.documentToEntity(found);
  }

  public async update(customer: Customer): Promise<void> {
    const id = Reflect.get(customer, 'id');

    if (!id) {
      throw new Error('Update can be only on entity with id');
    }

    const document = this.entityToDocument(customer);

    await this.collection.updateOne(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: document,
      },
    );
  }

  public async delete(customer: Customer): Promise<void> {
    const id = Reflect.get(customer, 'id');

    if (!id) {
      throw new Error('Remove can be only on entity with id');
    }

    await this.collection.deleteOne({
      _id: new Types.ObjectId(id),
    });
  }

  public async all(): Promise<Customer[]> {
    const documents = await this.collection.find({}).toArray();
    return documents.map(this.documentToEntity);
  }

  private documentToEntity(document: any): Customer {
    const customer = {} as Customer;

    Reflect.set(customer, 'id', document._id.toString());
    Reflect.set(customer, 'name', document.name);
    Reflect.set(customer, 'phone', document.phone);
    Reflect.set(
      customer,
      'contacts',
      document.contacts.map((contact) => {
        Reflect.setPrototypeOf(contact, Contact.prototype);
        return contact;
      }),
    );
    Reflect.setPrototypeOf(customer, Customer.prototype);

    return customer;
  }

  private entityToDocument(customer: Customer): any {
    const contacts = Reflect.get(customer, 'contacts') || [];

    return {
      name: Reflect.get(customer, 'name'),
      phone: Reflect.get(customer, 'phone'),
      contacts: contacts.map((contact) => ({
        channel: Reflect.get(contact, 'channel'),
        value: Reflect.get(contact, 'value'),
        name: Reflect.get(contact, 'name'),
      })),
    };
  }
}
