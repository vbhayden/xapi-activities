import { Request } from 'express';
import { defaultTo } from 'lodash';

const getHeader = (req: Request, name: string): string => {
  return defaultTo(req.body[name], defaultTo<string>(req.header(name), ''));
};

export default getHeader;
