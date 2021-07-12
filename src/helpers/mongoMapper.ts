interface ObjectType {
  [key: string]: any;
}

export function entityToDocument<E extends ObjectType>(
  entity: E,
  fields: string[],
): any {
  const document = {};

  fields.forEach((field) => {
    document[field] = Reflect.get(entity, field);
  });

  return document;
}

export function documentToEntity<E extends ObjectType>(
  document: any,
  fields: string[],
  ClassName,
): E {
  const instance = {} as E;

  fields.forEach((key) => {
    if (key === 'id') {
      Reflect.set(instance, key, document._id.toString());
      return;
    }
    Reflect.set(instance, key, document[key]);
  });

  Reflect.setPrototypeOf(instance, ClassName.prototype);

  return instance;
}
