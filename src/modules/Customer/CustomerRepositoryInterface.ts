import { Customer } from '../../entities/Customer';

/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class CustomerRepositoryInterface
 */
export abstract class CustomerRepositoryInterface {
  abstract getByPhone(phone: string): Promise<Customer>;
  abstract save(customer: Customer): Promise<void>;
  abstract get(id: string): Promise<Customer>;
  abstract update(customer: Customer): Promise<void>;
  abstract delete(customer: Customer): Promise<void>;
  abstract all(): Promise<Customer[]>;
}
