/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerService
 */
import { Injectable, NotImplementedException } from '@nestjs/common';
import { Customer } from '../../entities/Customer';
import { Contact } from '../../entities/Contact';
import { CreateCustomerData } from './dto/CreateCustomerData';
import { EditCustomerData } from './dto/EditCustomerData';
import { BanCustomerData } from './dto/BanCustomerData';
import { CustomerRepositoryInterface } from './CustomerRepositoryInterface';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepositoryInterface,
  ) {}

  public async all(): Promise<Customer[]> {
    return await this.customerRepository.all();
  }

  public async oneById(id: string): Promise<Customer> {
    return await this.customerRepository.get(id);
  }

  public async oneByPhone(phone: string): Promise<Customer> {
    return await this.customerRepository.getByPhone(phone);
  }

  public async add(data: CreateCustomerData): Promise<Customer> {
    const customer = new Customer(data.name, data.phone);
    await this.customerRepository.save(customer);

    return customer;
  }

  public async update(data: EditCustomerData): Promise<Customer> {
    const found = await this.customerRepository.get(data.id);

    if (found.getPhone() !== data.phone) {
      throw new Error(
        'Customer account phone is not equal, if you want to change account phone you need to use updatePhone method',
      );
    }

    const customer = new Customer(data.name, data.phone, data.id);

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
