/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerModule
 */
import { Module } from '@nestjs/common';
import { CustomerService } from './CustomerService';
import { CustomerRepository } from '../../repository/mongo/CustomerRepository';
import { CustomerRepositoryInterface } from './CustomerRepositoryInterface';

const customerRepositoryProvider = {
  provide: CustomerRepositoryInterface,
  useClass: CustomerRepository,
};

@Module({
  providers: [CustomerService, customerRepositoryProvider],
  controllers: [],
})
export class CustomerModule {}
