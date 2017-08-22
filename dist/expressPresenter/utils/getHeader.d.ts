/// <reference types="express" />
import { Request } from 'express';
declare const getHeader: (req: Request, name: string, defaultVal?: any) => string;
export default getHeader;
