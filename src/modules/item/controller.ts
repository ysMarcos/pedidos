import { Request, Response } from "express";
import { db } from "../../db/";
import { item } from "./model";
import { sql } from "drizzle-orm";

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
