import {Category} from './category';

export class Question{
id: number;
questionText: String;
answers: Answer[];
ordered: boolean;
explanation?: string;
tags: string[];
categorie?:Category[];
categoryIds: number[];

}