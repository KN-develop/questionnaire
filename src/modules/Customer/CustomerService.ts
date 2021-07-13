/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerService
 */
import { Injectable, NotImplementedException } from '@nestjs/common';
import { Customer } from '../../entities/Customer';
import { Contact } from '../../entities/Contact';
import { GetOneCustomerData } from './dto/GetOneCustomerData';
import { CreateCustomerData } from './dto/CreateCustomerData';
import { EditCustomerData } from './dto/EditCustomerData';
import { BanCustomerData } from './dto/BanCustomerData';
import { CustomerRepository } from './CustomerRepository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  public async all(): Promise<Customer[]> {
    return await this.customerRepository.all();
  }

  public async one(data: GetOneCustomerData): Promise<Customer> {
    return await this.customerRepository.get(data.id);
  }

  public async add(data: CreateCustomerData): Promise<Customer> {
    const customer = new Customer(data.name, data.login);
    await this.customerRepository.save(customer);

    return customer;
  }

  public async update(data: EditCustomerData): Promise<Customer> {
    const customer = new Customer(data.name, data.login, data.id);

    customer.updateAllContacts(
      data.contacts.map(
        (contact) => new Contact(contact.channel, contact.name, contact.value),
      ),
    );

    await this.customerRepository.update(customer);

    return customer;
  }

  public async ban(data: BanCustomerData): Promise<boolean> {
    throw new NotImplementedException();
  }
}
