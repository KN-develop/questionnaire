/**
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @class EditCustomerData
 */
import { CreateContactData } from '../../../dto/CreateContactData';

export class EditCustomerData {
  id: string;
  name: string;
  phone: string;
  contacts: CreateContactData[];
}
