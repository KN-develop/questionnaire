/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerModule
 */
import { Module } from '@nestjs/common';
import { CustomerService } from './CustomerService';

@Module({
  providers: [CustomerService],
  controllers: [],
})
export class CustomerModule {}
