import { injectable } from 'inversify';

/**
 * 报名人员
 */
interface IReversePlayer {
  nickname: string;
  email: string;
  race: number;
  occupation: number;
  talent: number;
  desc?: string;
  phone?: string;
  createAt: Date;
}

@injectable()
export class Reverse implements IReversePlayer {
  constructor(
    public nickname: string,
    public email: string,
    public race: number,
    public occupation: number,
    public talent: number,
    public desc?: string,
    public phone?: string,
    public createAt: Date = new Date(),
  ) { }
}
