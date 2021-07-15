/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerModule
 */
import { Module } from '@nestjs/common';
import { CustomerService } from './CustomerService';
import { CustomerRepository } from './CustomerRepository';

@Module({
  providers: [CustomerService, CustomerRepository],
  controllers: [],
})
export class CustomerModule {}
