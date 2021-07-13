/**
 * @package
 * @author Nikolay Ivanov n_13@bk.ru | https://github.com/KN-develop
 * @interface RepositoryInterface
 */
export interface RepositoryInterface {
  get(id: string): any;
  save(entity: any): any;
  update(entity: any): any;
  delete(entity: any): void;
  all(): any;
}
