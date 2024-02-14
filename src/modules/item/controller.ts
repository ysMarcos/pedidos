import { Request, Response } from "express";
import { db } from "../../db/";
import { item } from "./model";
import { sql } from "drizzle-orm";
import { eq } from "drizzle-orm";

export async function create(request: Request, response: Response) {
    const {
        name,
        value
    } = request.body;

    const query = db.insert(item).values({
        name: sql.placeholder("name"),
        value: sql.placeholder("value")
    })
    .prepare();

    try {
        const newItem = await query.execute({ name, value });
        return response.status(201).json(newItem)
    } catch (error) {
        response.status(400).json(error)
    }
}

export async function list(request: Request, response: Response) {
    const { limit, page } = request.query;
    const offset =  Number(limit) * (Number(page) - 1);
    const list = db
        .select()
        .from(item)
        .limit(Number(limit))
        .offset(offset)
        .prepare();

    try {
        const items = await list.execute();
        response.status(200).json(items);
    } catch (error){
        response.status(400).json(error)
    }
}

export async function getById(request: Request, response: Response) {
    const { id } = request.params;
    const itemById = db
        .select()
        .from(item)
        .where(
            eq(item.id, sql.placeholder("id"))
        )
        .prepare();

    try {
        const items = await itemById.execute({id:Number(id)});
        response.status(200).json(items);
    } catch (error){
        response.status(400).json(error)
    }
}
