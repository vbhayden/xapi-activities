/// <reference types="express" />
import { Request } from 'express';
declare const getHeader: (req: Request, name: string) => string;
export default getHeader;
