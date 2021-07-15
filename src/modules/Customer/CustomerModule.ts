/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerModule
 */
import { Module } from '@nestjs/common';
import { CustomerService } from './CustomerService';
import { CustomerRepository } from '../../repository/CustomerRepository';
import { CustomerRepositoryInterface } from './CustomerRepositoryInterface';

const customerRepositoryProvider = {};

@Module({
  providers: [
    CustomerService,
    { provide: CustomerRepositoryInterface, useClass: CustomerRepository },
  ],
  controllers: [],
})
export class CustomerModule {}
