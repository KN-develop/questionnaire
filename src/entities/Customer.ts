/**
 * @author Nikolay Ivanov n_13@bk.ru
 * @class Customer
 */
import { ContactEntity } from './ContactEntity';

export class Customer {
  private readonly name: string;
  private readonly login: string;
  private readonly contacts: ContactEntity[];
}
