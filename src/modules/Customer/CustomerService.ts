/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerService
 */
import { NotImplementedException } from '@nestjs/common';
import { Customer } from '../../entities/Customer';
import { GetOneCustomerData } from './dto/GetOneCustomerData';
import { CreateCustomerData } from './dto/CreateCustomerData';
import { EditCustomerData } from './dto/EditCustomerData';
import { BanCustomerData } from './dto/BanCustomerData';

export class CustomerService {
  public async all(): Promise<Customer[]> {
    return [];
  }

  public async one(data: GetOneCustomerData): Promise<Customer> {
    throw new NotImplementedException();
  }

  public async add(data: CreateCustomerData): Promise<Customer> {
    throw new NotImplementedException();
  }

  public async edit(data: EditCustomerData): Promise<Customer> {
    throw new NotImplementedException();
  }

  public async ban(data: BanCustomerData): Promise<boolean> {
    throw new NotImplementedException();
  }
}
