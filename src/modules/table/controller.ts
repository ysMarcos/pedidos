import { Request, Response } from "express";
import { db } from "../../db/";
import { table } from "./model";
import { sql } from "drizzle-orm";
import { eq } from "drizzle-orm";

export async function create(request: Request, response: Response) {
    const {
        number
    } = request.body;

    const query = db.insert(table).values({
        number: sql.placeholder("number"),
    })
    .prepare();

    try {
        const result = await query.execute({ number });
        return response.status(201).json(result)
    } catch (error) {
        response.status(400).json(error)
    }
}

export async function list(request: Request, response: Response) {
    const { limit, page } = request.query;
    const offset =  Number(limit) * (Number(page) - 1);
    const list = db
        .select()
        .from(table)
        .limit(Number(limit))
        .offset(offset)
        .prepare();

    try {
        const result = await list.execute();
        response.status(200).json(result);
    } catch (error){
        response.status(400).json(error)
    }
}

export async function getById(request: Request, response: Response) {
    const { id } = request.params;
    const tableById = db
        .select()
        .from(table)
        .where(
            eq(table.id, sql.placeholder("id"))
        )
        .prepare();

    try {
        const result = await tableById.execute({id:Number(id)});
        response.status(200).json(result);
    } catch (error){
        response.status(400).json(error)
    }
}
