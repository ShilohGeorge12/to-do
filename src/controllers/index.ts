import { Request, Response } from 'express';

export const getToDo = async (req: Request, res: Response) => {
	res.send('hellow');
};
